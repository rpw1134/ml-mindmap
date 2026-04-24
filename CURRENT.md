# Current State

## What This Is
An interactive knowledge graph for ML research papers. Visitors pan/zoom and click nodes to read details. The **author** (you) adds papers by editing `src/data/mindmap.ts` directly — no UI for adding papers.

## Tech Stack
- React 19 + TypeScript + Vite
- `@xyflow/react` (React Flow v12) — graph canvas
- No state library — all data is static, loaded from a file

---

## File Map

```
src/
  types.ts                   TypeScript interfaces for all data shapes
  data/
    mindmap.ts               ← THE file you edit to add papers/connections
  components/
    MindMap.tsx              React Flow canvas — converts mindmap.ts data → nodes/edges
    PaperNode.tsx            Paper card on the canvas (title, authors, year)
    GroupNode.tsx            Colored dashed-border cluster region
    InfoPanel.tsx            Slide-in detail panel (opens on node click)
  utils/
    tagColors.ts             (Currently unused in UI — kept for potential future use)
  App.tsx                    Root layout: header bar + full-viewport canvas
  App.css                    All component styles
  index.css                  Global reset + CSS variables (dark theme)
```

---

## Data Model (`src/types.ts`)

```typescript
Paper {
  id: string                 // unique slug, e.g. "attention-is-all-you-need"
  arxivId?: string           // e.g. "1706.03762"
  title, authors[], abstract, year, url?
  tags?: string[]            // shown in InfoPanel as neutral pills
  parentGroup?: string       // group id — drives node border color + InfoPanel stripe
  position: { x, y }        // canvas position (top-left of node)
}

PaperEdge {
  id, source, target         // paper ids
  label?: string             // optional edge label rendered inline
  relationship?: string      // one-line summary shown in tooltip on edge hover
}

Group {
  id, label, color           // color is hex, used for border + node accent
  position: { x, y }
  size: { width, height }    // bounding box — remember: right edge = x + width
}
```

---

## Current Papers & Groups

| Group | Color | Papers |
|---|---|---|
| Transformers | `#7c3aed` | Attention Is All You Need, BERT |
| Embeddings | `#0ea5e9` | Word2Vec |
| Autoencoders | `#10b981` | VAE, VQ-VAE |
| RNNs | `#ef4444` | MDRNN, Pixel RNN |
| Music Generation | `#f59e0b` | FIGARO |
| *(ungrouped)* | slate | GPT-3 |

### Edge connections
- Attention → BERT, Attention → GPT-3
- Word2Vec → BERT
- VAE → VQ-VAE → FIGARO
- MDRNN → Pixel RNN → VQ-VAE

### Canvas layout (approximate x zones)
- x 140–780: Transformers (top) + Embeddings/GPT-3 (bottom)
- x 790–1030: RNNs (tall group, two papers stacked vertically)
- x 940–1430: Autoencoders (top row)
- x 1440–1680: Music Generation (bottom row)

---

## Key Mechanics

### Adding a Paper
Add to the `papers` array in `src/data/mindmap.ts`. Set `parentGroup` to a group id if the paper belongs to one.

### Bounding Box Rule
Group size must account for node width (160px) and padding:
```
group.size.width  = (rightmost paper x + 160 + 20) - group.position.x
group.size.height = (bottommost paper y + ~80 + 20) - group.position.y
```

### Group Color Flow
`Group.color` → `groupColorMap` in MindMap.tsx → `accentColor` in paper node data → `--node-accent` CSS variable on `.paper-node` → border tint + hover glow. The InfoPanel reads the color directly from `mindmapData.groups` via `parentGroup` id.

### Edge Hover Tooltip
`PaperEdge.relationship` (optional string) is shown in a floating tooltip when hovering an edge. Implemented via `onEdgeMouseEnter/Move/Leave` in MindMap.tsx. The tooltip is a `position: fixed` div — no canvas coordinate math needed.

### Edge Styling (three levels)
- Default: `#64748b` stroke, 1.5px
- Hover: `#94a3b8`, 2px (CSS override on `.react-flow__edge:hover`)
- Selected (click): `#f1f5f9`, 2.5px (CSS override on `.react-flow__edge.selected`)

### Click Handling
React Flow's `onNodeClick` (in MindMap.tsx) handles all node clicks. Sets `selectedPaper` state → InfoPanel renders. Closes on Escape or `×` button.

---

## InfoPanel Design
- **3px left stripe** = group color (single color anchor)
- **Meta row** = `[GROUP · year]` above the title
- **Title** = hero element (20px bold)
- **Authors** below title, muted
- **Tags** = neutral pills (no color — color is only for group association)
- **Abstract** = labeled section
- **ArXiv link** = pinned footer

---

## What's Not Built Yet (Potential Next Steps)
- Search / filter nodes by tag or group
- A legend showing what each group color means
- Keyboard navigation between nodes
- Mobile / touch support
- Any kind of editing UI (intentionally out of scope for now)
