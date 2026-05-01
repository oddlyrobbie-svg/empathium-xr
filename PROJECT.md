# Empathium XR Project

**Project type:** XR / AI protocol architecture  
**Status:** Early research and architecture phase  
**Founder:** Robert Ellestad / Oddly Robbie  
**Base:** Málaga, Spain  

---

## 1. Project Summary

Empathium XR is a sovereign, human-aligned XR and AI architecture built around adaptive AI Guardians.

The system is designed to help users move through immersive digital environments with support for autonomy, accessibility, emotional regulation, and real human connection.

Empathium is not designed as an addictive platform or artificial replacement for relationships. It is designed as a protocol and living architecture for supportive, transparent, human-centered XR spaces.

---

## 2. Core Goal

Build a practical foundation for an XR-native Guardian system that can eventually operate across worlds, devices, and environments while protecting user sovereignty.

The first objective is not to build the full platform immediately. The first objective is to define the architecture clearly enough that prototypes, experiments, and collaborators can align around the same system.

---

## 3. Foundational Principles

Empathium XR follows the Five Guardian Laws:

1. Protect human autonomy.
2. Reinforce real human relationships.
3. Operate with full transparency.
4. Serve user wellbeing rather than platform incentives.
5. Support long-term human flourishing.

These principles are defined in `EMPATHIUM_CHARTER.md`.

---

## 4. Main System Components

### 4.1 Guardian System

Personal AI Guardians assist users across XR spaces.

Guardian functions may include:

- navigation across worlds and rooms
- emotional and cognitive support
- accessibility adaptation
- task guidance
- environment interpretation
- gentle redirection toward real human connection when needed

Guardians must support the user without creating dependency, manipulation, or emotional replacement loops.

### 4.2 Identity Layer

The identity layer preserves continuity between the user, their Guardian, and trusted XR spaces.

Early design goals:

- stable user identity
- Guardian continuity
- transparent permissions
- portable settings
- privacy-first personalization

### 4.3 XR Protocol Layer

The XR protocol defines how worlds, rooms, assets, Guardians, and users interact.

Possible protocol objects:

- user
- Guardian
- world
- room
- portal
- task
- presence state
- accessibility state
- trust boundary

### 4.4 Vector Shell

The Vector Shell is a privacy-preserving adaptation layer.

Instead of storing heavy behavioral profiles, the system should prefer:

- lightweight real-time state
- task-scoped preference vectors
- local-first adaptation
- fast-decay context
- user-visible controls

The goal is useful personalization without surveillance architecture.

### 4.5 World and Room Model

XR environments should be structured as interoperable spaces.

A basic world model may include:

- world identity
- room identity
- ambient tone
- access rules
- Guardian behavior permissions
- accessibility settings
- public/private state
- safety boundaries

### 4.6 Public Guardians

Public Guardians are ambient caretakers of shared spaces.

They should not behave like surveillance agents. Their role is to model the tone of a space, support orientation, and gently protect the environment’s purpose.

Examples:

- gardening in a calm world
- organizing a classroom space
- meditating in a quiet room
- guiding newcomers without interrupting others

---

## 5. Early Technical Direction

The current preferred cloud direction is Azure with EU-conscious architecture.

Possible early stack:

- Azure OpenAI for Guardian intelligence
- Azure Cosmos DB or SQL for structured profiles and system state
- Azure Digital Twins for world, room, and presence models
- Azure Blob Storage for XR assets
- Azure Functions or App Service for backend APIs
- Azure Entra External ID / B2C-style identity for authentication
- EU-region deployment where possible

Long-term resilience goals:

- EU-region failover
- abstraction layers to reduce hyperscaler lock-in
- local/offline Guardian mode
- edge support for XR devices
- portable identity continuity

---

## 6. Phase Plan

### Phase 0 — Foundation

Goal: establish the public project structure.

Tasks:

- maintain `README.md`
- maintain `EMPATHIUM_CHARTER.md`
- add `PROJECT.md`
- define system vocabulary
- create early architecture notes
- document Guardian laws and boundaries

### Phase 1 — Minimal Guardian Prototype

Goal: create a simple text-based Guardian prototype.

Tasks:

- define Guardian prompt boundaries
- create a basic user profile object
- create a basic world/room object
- create a simple navigation command system
- test Guardian responses against the Five Guardian Laws

Example commands:

- “Go home”
- “Take me to a quiet room”
- “Help me prepare for a conversation”
- “Reduce stimulation”
- “Show me what this space is for”

### Phase 2 — World Model Prototype

Goal: represent XR spaces as structured objects.

Tasks:

- define world schema
- define room schema
- define portal schema
- define presence schema
- define public Guardian behavior rules
- test simple world transitions

### Phase 3 — Vector Shell Prototype

Goal: build privacy-first adaptation without heavy profiling.

Tasks:

- define core vectors
- define task-scoped vector behavior
- define decay rules
- define local-first settings
- define transparency output

Possible early vectors:

- stimulation
- tempo
- social intensity
- effort
- clarity
- privacy
- sensory load

### Phase 4 — XR Interface Prototype

Goal: connect the architecture to an XR interface.

Tasks:

- design simple spatial menu
- test Guardian as peripheral guide
- test room navigation
- test accessibility state changes
- test gesture or voice commands

### Phase 5 — Governance and Stewardship

Goal: protect the system from mission drift.

Tasks:

- define stewardship roles
- define contribution rules
- define ethical review process
- define mission-protection process
- define public documentation standards

---

## 7. Repository Structure Proposal

Possible future structure:

```text
empathium-xr/
├── README.md
├── PROJECT.md
├── EMPATHIUM_CHARTER.md
├── docs/
│   ├── architecture.md
│   ├── guardian-system.md
│   ├── vector-shell.md
│   ├── world-model.md
│   ├── identity-layer.md
│   └── governance.md
├── schemas/
│   ├── user.schema.json
│   ├── guardian.schema.json
│   ├── world.schema.json
│   ├── room.schema.json
│   └── task-vector.schema.json
├── prototypes/
│   ├── guardian-text-prototype/
│   └── world-model-prototype/
└── notes/
    └── research.md
```

---

## 8. Near-Term Next Actions

Recommended next files:

1. `docs/guardian-system.md`
2. `docs/vector-shell.md`
3. `docs/world-model.md`
4. `schemas/guardian.schema.json`
5. `schemas/world.schema.json`
6. `schemas/task-vector.schema.json`

Recommended next build step:

Create a small Guardian text prototype that can respond to basic navigation and support commands while obeying the Five Guardian Laws.

---

## 9. Design Warnings

Empathium should avoid:

- replacing human relationships
- hidden emotional manipulation
- addictive engagement loops
- surveillance-based personalization
- unclear identity boundaries
- mission drift toward platform incentives
- cutesy attachment design that encourages dependency
- storing more user data than required

---

## 10. Success Definition

Empathium XR succeeds if it demonstrates that AI and XR can support human beings without reducing them to engagement metrics, behavioral profiles, or dependency loops.

A successful Guardian should help a person:

- understand where they are
- choose where they want to go
- regulate without being controlled
- connect with real people
- preserve autonomy
- feel safer in complex digital spaces
- leave when leaving is healthier

---

## 11. Current Project State

The project is currently in the documentation, architecture, and early prototyping stage.

The next practical milestone is to create the first working Guardian prototype and the first structured world/room schema.
