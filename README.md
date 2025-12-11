# Horror Museum VR Gallery - Filipino Mythology Exhibit

## Project Story

This project is an immersive 3D virtual reality horror-themed art gallery that showcases Filipino mythical creatures. The museum was designed to educate visitors about Philippine folklore through an interactive, atmospheric experience that combines traditional museum aesthetics with modern VR technology and horror elements.

The concept emerged from a desire to preserve and share Filipino cultural heritage in an engaging, accessible format. By creating a virtual museum, we can reach audiences worldwide and present these mythological creatures in a way that captures their eerie, mysterious nature while providing educational content.

## Concept

The Horror Museum VR Gallery is a dark, atmospheric 3D environment built with A-Frame (WebVR) that features:

- **7 Filipino Mythical Creatures**: Duwende, Kapre, Manananggal, Serena, Tikbalang, Tiyanak, and White Lady
- **Interactive Audio System**: Background ambient music and individual creature sounds
- **Horror Visual Effects**: Flickering lights, dynamic fog, visual glitches, jump scares, and creature distortions
- **Educational Content**: Information panels with creature descriptions and an educational rap song
- **Eerie Atmosphere**: Dark lighting, thick fog, and unsettling visual effects

The museum creates a sense of unease and mystery, making visitors feel like they're exploring a haunted gallery where the creatures might come alive at any moment.

## Development Stack

### Core Technologies
- **A-Frame v1.4.2**: WebVR framework for 3D scenes
- **THREE.js**: 3D graphics library (included with A-Frame)
- **HTML5/CSS3**: Structure and styling
- **JavaScript (ES6+)**: Interactive functionality and effects

### Assets
- **3D Models**: GLTF format (witch model)
- **Images**: JPG/PNG formats for creature artwork and banner
- **Audio**: MP3 format for background music and creature sounds

### Tools
- **VS Code**: Code editor
- **Live Server**: Local development server
- **Git/GitHub**: Version control and deployment

## Project Structure

```
Art Gallery/
├── index.html              # Main scene file (2108 lines)
├── README.md               # This file
├── CODE_EXPLANATION.md     # Detailed code documentation
├── PRESENTATION.md         # Project presentation deck
├── public/
│   └── main.js            # Creature sound system
├── data/
│   └── creatures.json     # Creature metadata
├── images/
│   ├── duwende.jpg
│   ├── kapre.jpg
│   ├── manananggal.png
│   ├── serenaa.jpg
│   ├── tikbalang.jpg
│   ├── tiyanak.jpg
│   ├── white lady.jpg
│   ├── banner.png
│   └── witch/             # 3D model files
│       ├── scene.gltf
│       ├── scene.bin
│       └── textures/
└── sound/
    ├── background sound.mp3
    ├── duwende sound.mp3
    ├── kapre sound.mp3
    ├── Manananggal Sounds.mp3
    ├── serena sound.mp3
    ├── Tikbalang sounds.mp3
    ├── tiyanak sound.mp3
    ├── white lady sound.mp3
    └── Filipino Mythical Creatures Rap.mp3
```

## Setup Instructions

### Prerequisites
- A modern web browser with WebGL support (Chrome, Firefox, Edge, Safari)
- A local web server (cannot run from `file://` protocol due to CORS)

### Local Development

#### Option 1: Using VS Code Live Server
1. Open the project folder in VS Code
2. Install the "Live Server" extension (Ritwick Dey)
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. The app will open in your browser automatically

#### Option 2: Using Node.js (http-server)
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to project directory
cd "Art Gallery"

# Start server
http-server -p 8000

# Open browser to http://localhost:8000/index.html
```

#### Option 3: Using Python
```bash
# Navigate to project directory
cd "Art Gallery"

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser to http://localhost:8000/index.html
```

#### Option 4: Using Node.js (live-server)
```bash
# Install live-server globally
npm install -g live-server

# Navigate to project directory
cd "Art Gallery"

# Start server
live-server --port=8000

# Browser opens automatically
```

### Controls
- **Mouse/Touch**: Look around (drag to rotate view)
- **W/A/S/D Keys**: Move forward/left/backward/right
- **Keys 1-7**: Play individual creature sounds
- **X Key**: Play educational rap song about Filipino mythology

## Deployment

### GitHub Pages


### Vercel Deployment




## Features

### Core Features
-  7 Creature Exhibits with detailed information panels
-  Dark, atmospheric museum environment (16x16 units)
-  Interactive audio system (background + creature sounds)
-  Dynamic lighting with flickering effects
-  Variable fog system that thickens near exhibits
-  Visual distortions and glitches
-  Jump scare system
-  Educational content (rap song)
-  VR-ready (A-Frame WebVR support)

### Horror Effects
-  Flickering lights (ambient, directional, spotlights)
-  Random spotlight failures
-  Creature visual distortions (blur, color shifts)
-  Glowing eyes effect (Manananggal & Tiyanak)
-  Screen flickers and red flash glitches
-  Camera shake/distortion
-  Thickening fog near exhibits
-  Jump scares (creatures flash across screen)

### Interactive Elements
-  Keyboard movement (WASD)
-  Mouse/touch look controls
-  Key 1-7: Play creature sounds
-  Key X: Play educational rap
-  Automatic background music
-  Eerie witch character with instructions

## Team Roles (Im doing this project solo.)

### Single Developer / Developer
- **Role**: Full-stack development, 3D scene design, visual effects implementation
- **Responsibilities**:
  - A-Frame scene architecture and setup
  - Horror visual effects system
  - Audio system integration
  - Lighting and fog systems
  - 3D model integration
  - UI/UX design
  - Code documentation
- **3D Artist**: Created/adapted witch 3D model
- **Audio Designer**: Created/selected creature sounds and background music
- **Content Writer**: Researched and wrote creature descriptions
- **Tester**: Quality assurance and user experience testing


## Educational Content

This project serves as an educational tool about Filipino mythology:

1. **Visual Learning**: Each creature is displayed as artwork with detailed descriptions
2. **Audio Learning**: Individual creature sounds provide auditory context
3. **Interactive Learning**: Educational rap song explains all creatures
4. **Immersive Experience**: VR environment enhances engagement and retention

## Technical Details

### Performance Optimizations
- Asset preloading with timeout handling
- Efficient fog calculations (500ms intervals)
- RequestAnimationFrame for smooth animations
- Light decay and distance limits
- Optimized texture loading

### Browser Compatibility
- Requires WebGL support
- Must run on HTTP/HTTPS (not file://)
- CORS handling for local assets
- Autoplay policy handling for audio

### Known Limitations
- Audio autoplay may require user interaction in some browsers
- Performance may vary on lower-end devices
- VR mode requires compatible headset and browser

##  License

This project is created for educational purposes. All assets (images, audio, 3D models) are used with appropriate permissions or are original works.

## Acknowledgments

- A-Frame community for the excellent WebVR framework
- Filipino folklore and mythology sources
- All contributors to open-source libraries used

## Contact

For questions, issues, or contributions, please open an issue on the GitHub repository.

---

**Project Status**:  Complete and Ready for Deployment

**Last Updated**: December 2025

**Screenshots**
The screenshots are in the image folder named screenshot 2025.