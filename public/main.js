// Sound system for creature exhibits
// Requirements implemented:
// - Load creature list from /api/creatures (fallback to /data/creatures.json for static hosting).
// - Preload sounds into state.creatureAudioMap keyed by creature id.
// - Detect nearest exhibit (<= 7m) on KeyX and play its sound, stopping any previous one.
// - Background music on #bg-music is independent and never interrupted.

(function () {
  const state = {
    creatures: [],
    creatureAudioMap: new Map(),
    displays: [], // [{ id, position: THREE.Vector3 }]
    currentCreatureSound: null,
    playerRig: null, // optional external setter
    insideMuseum: true, // set externally if you track entry/exit
  };

  async function init() {
    await fetchCreaturesWithFallback();
    populateDisplaysFromScene();
    setupKeyHandlers();
  }

  async function fetchCreaturesWithFallback() {
    // Prefer same-origin paths; avoid absolute / when running from file://
    const base = window.location.origin && window.location.origin !== "null"
      ? window.location.origin
      : "";
    const endpoints = [
      `${base}/api/creatures`,
      `${base}/data/creatures.json`,
      "./data/creatures.json", // final fallback for flat/static hosting
    ];
    for (const url of endpoints) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`status ${res.status}`);
        const data = await res.json();
        state.creatures = Array.isArray(data) ? data : [];
        loadDisplaySounds();
        return;
      } catch (err) {
        console.warn(`Fetch failed for ${url}:`, err);
      }
    }
    console.error("Unable to load creatures from any source.");
  }

  function loadDisplaySounds() {
    state.creatureAudioMap.clear();
    state.creatures.forEach((c) => {
      if (!c || !c.id || !c.sound) return;
      const audio = new Audio(`/sound/${encodeURIComponent(c.sound)}`);
      audio.preload = "auto";
      state.creatureAudioMap.set(String(c.id), audio);
    });
  }

  function populateDisplaysFromScene() {
    // Map known artwork entity ids to creature ids.
    const mapping = [
      { id: "artwork1", creatureId: "artwork1" },
      { id: "artwork2", creatureId: "artwork2" },
      { id: "artwork3", creatureId: "artwork3" },
      { id: "artwork4", creatureId: "artwork4" },
      { id: "artwork5", creatureId: "artwork5" },
      { id: "artwork6", creatureId: "artwork6" },
      { id: "artwork7", creatureId: "artwork7" },
    ];
    state.displays = mapping
      .map((m) => {
        const el = document.getElementById(m.id);
        if (!el || !el.object3D || !el.object3D.position) return null;
        const pos = el.object3D.position.clone
          ? el.object3D.position.clone()
          : new THREE.Vector3().copy(el.object3D.position);
        return { id: m.creatureId, position: pos };
      })
      .filter(Boolean);
  }

  function setupKeyHandlers() {
    window.addEventListener("keydown", (e) => {
      if (e.code !== "KeyX") return;
      if (!isPlayerInsideMuseum()) return;
      handlePlayNearestCreatureSound();
    });
  }

  function isPlayerInsideMuseum() {
    return !!state.insideMuseum;
  }

  function handlePlayNearestCreatureSound() {
    const playerPos = getPlayerPosition();
    if (!playerPos) return;
    const nearest = findNearestExhibit(playerPos, 7);
    if (!nearest) {
      console.warn("No exhibit within range.");
      return;
    }
    playCreatureSound(nearest.id);
  }

  function getPlayerPosition() {
    const rig = state.playerRig || document.querySelector("#rig");
    if (rig && rig.object3D && rig.object3D.position) {
      return rig.object3D.position.clone
        ? rig.object3D.position.clone()
        : rig.object3D.position;
    }
    console.warn("Player rig not found.");
    return null;
  }

  function findNearestExhibit(playerPos, maxDistance = 7) {
    if (!state.displays || !state.displays.length) return null;
    let nearest = null;
    let nearestDist = Infinity;
    const tmp = new THREE.Vector3();
    state.displays.forEach((disp) => {
      if (!disp || !disp.position) return;
      tmp.copy(disp.position);
      const dist = tmp.distanceTo(playerPos);
      if (dist < nearestDist && dist <= maxDistance) {
        nearest = disp;
        nearestDist = dist;
      }
    });
    return nearest;
  }

  function stopCurrentCreatureSound() {
    if (state.currentCreatureSound) {
      try {
        state.currentCreatureSound.pause();
        state.currentCreatureSound.currentTime = 0;
      } catch (e) {
        console.warn("Error stopping current creature sound", e);
      }
      state.currentCreatureSound = null;
    }
  }

  function playCreatureSound(id) {
    stopCurrentCreatureSound();
    const audio = state.creatureAudioMap.get(String(id));
    if (!audio) {
      console.warn(`No audio found for creature id: ${id}`);
      return;
    }
    audio.currentTime = 0;
    audio.play().catch((err) => console.error("Failed to play creature sound:", err));
    state.currentCreatureSound = audio;
    audio.onended = () => {
      if (state.currentCreatureSound === audio) {
        state.currentCreatureSound = null;
      }
    };
  }

  window.addEventListener("DOMContentLoaded", init);

  // Expose for debugging if needed
  window.GallerySound = {
    state,
    playCreatureSound,
    stopCurrentCreatureSound,
    findNearestExhibit,
    handlePlayNearestCreatureSound,
    loadDisplaySounds,
  };
})();
