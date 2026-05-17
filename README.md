PROJECT TITLE:
PROJECT DYING LIGHT
PROJECT TYPE:
Narrative investigation game / atmospheric VN hybrid
TECH STACK:
Next.js (App Router)
TypeScript
TailwindCSS
Phaser.js for gameplay scenes
React for UI overlays
CORE CONCEPT:
PROJECT DYING LIGHT is a narrative-focused investigation game set during the collapse of a military-medical institution known as the GSMC.
The player explores environments, interacts with personnel, uncovers classified archives, and pieces together conflicting records surrounding the collapse of the Stratocracy.
The game heavily focuses on:
institutional decay
bureaucracy
hidden truth
unreliable records
authority and legitimacy
memory persistence
archives as weapons
The atmosphere should feel:
oppressive
clinical
procedural
melancholic
isolated
bureaucratic
GAME STRUCTURE:
The game is divided into “Days”.
Each day contains:
Exploration segment
Character interactions
Archive/file discovery
Minigame/event
Story progression
GAMEPLAY STRUCTURE:
The player explores rooms by moving the cursor and clicking interactable entities.
INTERACTABLES INCLUDE:
characters
folders
terminals
archive files
office objects
doors
classified records
Gameplay flow resembles:
room investigation
dialogue exploration
archive navigation
environmental storytelling
CORE SYSTEMS:
CHARACTER SYSTEM
Characters exist physically inside scenes.
Characters:
are clickable
can react differently depending on flags
have trust states
unlock deeper dialogue over time
may remember previous loops (NG+)
Example:
Jackie Jackson initially blocks archive access.
Later loops reveal he already knows the player has seen the files before.
DIALOGUE SYSTEM
JSON-driven dialogue structure.
Features:
branching choices
conditional dialogue
hidden dialogue
trust-based responses
progression-based responses
INTERACTION SYSTEM
Objects in scenes can:
glow on hover
unlock conditionally
trigger hidden events
reveal archive fragments
SAVE / FLAG SYSTEM
Centralized progression tracking.
Example flags:
completed_day5
ng_plus
opened_oam_archive
trust_jackie
discovered_aurora_log
Flags influence:
dialogue
endings
interactables
hidden scenes
NG+ SYSTEM
Critical hidden mechanic.
After completion:
hidden folders become accessible
some dialogue changes
certain characters react differently
archives reveal additional context
hidden truths become available
NG+ should feel unsettling rather than celebratory.
ARCHIVE SYSTEM
The player can open and read:
reports
OAM documents
operation logs
classified files
medical records
internal communications
The UI should resemble:
military administration software
archive terminals
classified institutional systems
LORE SUMMARY:
THE GSMC
The GSMC is a large military-medical organization operating under the Stratocracy.
Officially:
humanitarian
neutral
procedural
In reality:
deeply political
bureaucratically fragmented
increasingly isolated during collapse
Despite the collapse of surrounding authority, the GSMC continues operating through procedure, paperwork, and institutional inertia.
THE STRATOCRATIC COLLAPSE
The Stratocracy collapses after internal fragmentation, disappearances of leadership, factional fighting, and military breakdown.
As command structures disappear:
battalion leaders take control
archives become fragmented
legitimacy becomes unclear
information becomes weaponized
THE UNIVERSITY OF NOVIS BELLUM (UNB)
UNB becomes the central GSMC stronghold.
The university is transformed into:
medical hub
archive center
emergency headquarters
defensive position
The atmosphere should feel overcrowded, exhausted, and procedural.
THE OAM
The Office of Administration & Management (OAM) becomes increasingly important during the collapse.
OAM controls:
archives
records
authority documentation
continuity systems
Over time, OAM evolves from administration into a hidden power structure.
The phrase:
“Paper is a weapon.”
is central to the game’s themes.
KEY CHARACTERS:
JACKIE JACKSON
Current Chief Surgeon operating from UNB.
Traits:
procedural
exhausted
increasingly paranoid
emotionally restrained
deeply tied to OAM archives
He gradually shifts from frontline leadership toward bureaucratic control.
AURORA SALUS
Former authority figure whose disappearance becomes central to the narrative.
Her absence affects:
legitimacy
morale
command structure
hidden archive investigations
GAME FEEL:
The game should feel:
slow
atmospheric
interaction-heavy
mystery-driven
emotionally restrained
The player should feel like they are uncovering something they were never supposed to access.
FIRST PROTOTYPE GOAL:
One playable room:
UNB office
Jackie present
one interactable OAM folder
one dialogue sequence
one hidden archive file
one save flag
PROJECT STRUCTURE:
src/
├── app/
├── components/
├── game/
│ ├── scenes/
│ ├── systems/
│ ├── characters/
│ ├── interactables/
│ └── ui/
├── dialogue/
├── data/
├── hooks/
├── lib/
└── styles/
IMPORTANT TECHNICAL NOTES:
Phaser runs client-side only.
React handles overlays/UI.
Dialogue should remain fully data-driven.
Save system should be modular from the beginning.
All systems should support NG+ conditions early in development.
INSPIRATION REFERENCES
PRIMARY GAMEPLAY / INTERACTION REFERENCE:
Post Shift 2
Use as reference for:
room interaction flow
environmental clicking
grounded scene interaction
atmospheric pacing
interactable object handling
cursor-based navigation
investigation-style progression
The game should feel like:
“the player is physically present inside a room uncovering information.”
SECONDARY ATMOSPHERIC REFERENCES:
Signalis
VA-11 Hall-A
Use as reference for:
oppressive atmosphere
restrained dialogue
subtle emotional presentation
slow pacing
environmental storytelling
psychological tension
loneliness and institutional decay
VISUAL / UI REFERENCES:
military archive systems
classified document interfaces
terminal software
bureaucratic management systems
CRT monitor aesthetics
dark procedural UI
Avoid:
fantasy UI
bright modern interfaces
exaggerated anime visual tropes
overly energetic menus
excessive visual clutter
CHARACTER PRESENTATION:
Characters should feel:
tired
procedural
emotionally restrained
overworked
institutionalized
Dialogue should often feel:
indirect
controlled
professional
subtly suspicious
MOVEMENT / INTERACTION DESIGN:
Scenes are mostly static environments.
Gameplay consists of:
hovering objects
clicking interactables
opening files
speaking to characters
inspecting environments
navigating archives
Interaction density is more important than movement complexity.
ARCHIVE DESIGN:
Files and records are extremely important.
Archives should feel:
authentic
procedural
classified
partially fragmented
inconsistently preserved
Some records:
contradict each other
contain missing information
become altered in NG+
reveal hidden metadata later
NG+ FEELING:
NG+ should feel:
unsettling
wrong
recursive
partially remembered
The player should gradually realize:
the archives are not static,
and some characters may remember previous loops.
OVERALL EXPERIENCE GOAL:
The player experience should feel like:
investigating institutional collapse
navigating buried truth
reading things they should not have access to
uncovering hidden continuity systems
slowly realizing the archives themselves are manipulating perceptio