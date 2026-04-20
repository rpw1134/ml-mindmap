# ML Mindmap — Project Plan

## What This Is
An interactive, educational knowledge graph for ML research papers. The **author** (you) edits a TypeScript data file to add papers and connections. **Visitors** explore the graph by panning, zooming, and clicking nodes to read abstracts.

No backend. No database. No UI for adding papers — the data file *is* the editing interface.

---

## How React Flow Works

[React Flow](https://reactflow.dev) (`@xyflow/react`) is the graph/canvas library. Key concepts:

### Nodes
Every item on the canvas is a **node**. A node has:
- `id` — unique string
- `type` — maps to a custom React component (e.g. `"paper"` → `<PaperNode />`)
- `position: { x, y }` — where it sits on the canvas
- `data` — arbitrary object passed as props to the component

We have two node types:
- `paper` — a research paper card
- `group` — a colored cluster/background region

### Edges
**Edges** connect nodes. An edge has:
- `id`, `source` (node id), `target` (node id)
- Optional `label` — rendered as text along the edge line

React Flow handles rendering the SVG lines automatically. If a `label` is present, it renders it mid-edge.

### Canvas
React Flow renders everything inside a `<ReactFlow>` component that handles pan/zoom, drag, and hit detection. We pass it arrays of nodes and edges. Since this is a read-only viewer, we set `nodesDraggable={false}` and `nodesConnectable={false}`.

Built-in UI helpers: `<MiniMap />`, `<Controls />` (zoom buttons), `<Background />` (dot grid).

---

## Data Architecture

Everything lives in one file: `src/data/mindmap.ts`. This is the file you edit to add papers.

```
mindmap.ts  →  MindMap.tsx (converts to React Flow format)  →  Canvas renders
```

The conversion is straightforward:
- Each `Paper` → a React Flow node with `type: "paper"`
- Each `PaperEdge` → a React Flow edge
- Each `Group` → a React Flow node with `type: "group"`, positioned behind papers

---

## File Structure

```
src/
  types.ts                    TypeScript interfaces for all data shapes
  data/
    mindmap.ts                ← THE file you edit to add papers / connections
  components/
    MindMap.tsx               React Flow canvas — converts data → nodes/edges
    PaperNode.tsx             Paper card component (compact view on canvas)
    GroupNode.tsx             Colored background cluster component
    InfoPanel.tsx             Side panel shown when clicking a paper (full abstract)
  App.tsx                     Root layout
  App.css / index.css         Dark theme styles
```

---

## Data Model (`src/types.ts`)

```typescript
interface Paper {
  id: string;            // unique slug, e.g. "attention-is-all-you-need"
  arxivId?: string;      // e.g. "1706.03762" — used to build the arXiv link
  title: string;
  authors: string[];
  abstract: string;
  year: number;
  url?: string;          // overrides the default https://arxiv.org/abs/{arxivId}
  tags?: string[];       // topic tags, e.g. ["attention", "transformer"]
  position: { x: number; y: number };  // canvas position — you control the layout
}

interface PaperEdge {
  id: string;
  source: string;        // paper id
  target: string;        // paper id
  label?: string;        // optional — e.g. "cites", "builds on". Just uncomment to add.
}

interface Group {
  id: string;
  label: string;         // displayed at top of the group region
  color: string;         // hex color for border + background tint
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface MindmapData {
  papers: Paper[];
  edges: PaperEdge[];
  groups?: Group[];
}
```

---

## Editing the Data File

To add a paper, add an entry to `src/data/mindmap.ts`:

```typescript
{
  id: "bert",
  arxivId: "1810.04805",
  title: "BERT: Pre-training of Deep Bidirectional Transformers",
  authors: ["Devlin", "Chang", "Lee", "Toutanova"],
  abstract: "We introduce BERT...",
  year: 2018,
  tags: ["pretraining", "transformer", "nlp"],
  position: { x: 400, y: 100 },
}
```

To connect two papers:
```typescript
// In the edges array:
{ id: "e-attention-bert", source: "attention-is-all-you-need", target: "bert" }

// With an optional label:
{ id: "e-attention-bert", source: "attention-is-all-you-need", target: "bert", label: "inspired" }
```

To create a topic group (background region):
```typescript
{
  id: "g-transformers",
  label: "Transformers",
  color: "#7c3aed",
  position: { x: -20, y: -20 },
  size: { width: 600, height: 400 },
}
```
Position papers within the group's bounding box to visually place them inside it.

---

## Visitor Interactions
- **Pan** — click and drag on the canvas background
- **Zoom** — scroll wheel or pinch; zoom buttons in bottom-left
- **Click a paper** → InfoPanel slides in from the right with full abstract + arXiv link
- **MiniMap** — overview of the full graph in corner

---

## Implementation Steps

1. `npm install @xyflow/react`
2. Write `src/types.ts` (interfaces above)
3. Write `src/data/mindmap.ts` with 2-3 seed papers + 1 edge + 1 group
4. Write `src/components/PaperNode.tsx` — compact card, click handler
5. Write `src/components/GroupNode.tsx` — colored background region
6. Write `src/components/InfoPanel.tsx` — slide-in detail panel
7. Write `src/components/MindMap.tsx` — React Flow canvas, data conversion
8. Update `src/App.tsx` — full-viewport layout
9. Style with dark theme

---

## Edge Labels — Future-Ready
The `PaperEdge.label` field is optional from day one. React Flow renders edge labels automatically when present. To add a label to any edge, just add `label: "cites"` to its entry in `mindmap.ts`. No component changes needed.

---

## Verification Checklist
- [ ] `npm run dev` — canvas loads with seed papers
- [ ] Pan/zoom works
- [ ] Click a paper → InfoPanel opens with abstract + arXiv link
- [ ] Click away / press Escape → InfoPanel closes
- [ ] Group region visible behind papers
- [ ] `npm run build` — no TypeScript errors
- [ ] Works as a static site (no server required)
