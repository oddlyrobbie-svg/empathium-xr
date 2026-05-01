# Boundary Rule: Memory and Intelligence Separation

Empathium XR enforces a strict separation between the Memory Layer and the Intelligence Layer.

---

## Memory Layer (Sovereign)

Location:
- Hetzner (EU)
- Qdrant (vector database)

Responsibilities:
- Store retrieval memory
- Maintain user-controlled context
- Persist only explicitly approved data

Includes:
- blog-derived vectors
- pattern clusters
- consented knowledge structures
- Guardian-relevant context

Control:
- Fully owned and governed by Empathium infrastructure
- No external system has implicit write access

---

## Intelligence Layer (Stateless by Default)

Provider:
- Azure OpenAI (Sweden Central)

Capabilities:
- reasoning
- embeddings
- classification
- summarization
- interpretation

Constraints:
- Processes input context only
- Does not persist data unless explicitly instructed
- Does not maintain hidden memory

---

## Data Flow (Default Path)

1. Retrieve context from Memory Layer (Qdrant / Hetzner)
2. Send context + user input to Intelligence Layer
3. Generate response
4. Return response to client
5. Persist only if explicitly approved by Empathium logic

---

## Persistence Rule

No data is stored unless:

- explicitly triggered by Empathium backend logic
- aligned with user consent and system principles
- written to the Memory Layer (not the Intelligence Layer)

---

## Prohibited Patterns

- Silent memory creation inside AI provider
- Implicit long-term storage by external services
- Hidden state accumulation outside Empathium control
- Coupling retrieval memory to AI provider infrastructure

---

## Principle

Persistent memory belongs to Empathium’s sovereign infrastructure.

The Intelligence Layer may interpret memory, but must not:
- own it
- expand it autonomously
- retain it beyond the request lifecycle
