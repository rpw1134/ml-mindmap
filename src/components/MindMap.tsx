import { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  type Edge,
} from '@xyflow/react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyNode = any;
import '@xyflow/react/dist/style.css';

import type { Paper } from '../types';
import mindmapData from '../data/mindmap';
import PaperNode from './PaperNode';
import GroupNode from './GroupNode';
import InfoPanel from './InfoPanel';

const nodeTypes = {
  paper: PaperNode,
  group: GroupNode,
};

export default function MindMap() {
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  const handleNodeClick = useCallback((_event: React.MouseEvent, node: AnyNode) => {
    if (node.type === 'paper') {
      setSelectedPaper(node.data as Paper);
    }
  }, []);

  const handleClose = useCallback(() => {
    setSelectedPaper(null);
  }, []);

  // Convert group data → React Flow nodes (rendered behind paper nodes)
  const groupNodes: AnyNode[] = useMemo(
    () =>
      (mindmapData.groups ?? []).map((g) => ({
        id: g.id,
        type: 'group',
        position: g.position,
        data: g,
        style: { width: g.size.width, height: g.size.height },
        zIndex: -1,
        selectable: false,
        draggable: false,
      })),
    [],
  );

  // Convert paper data → React Flow nodes
  const paperNodes: AnyNode[] = useMemo(
    () =>
      mindmapData.papers.map((p) => ({
        id: p.id,
        type: 'paper',
        position: p.position,
        data: p,
        draggable: false,
      })),
    [],
  );

  const nodes: AnyNode[] = useMemo(
    () => [...groupNodes, ...paperNodes],
    [groupNodes, paperNodes],
  );

  // Convert edge data → React Flow edges
  const edges: Edge[] = useMemo(
    () =>
      mindmapData.edges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        label: e.label,
        labelStyle: { fill: '#94a3b8', fontSize: 11 },
        labelBgStyle: { fill: '#1e293b', fillOpacity: 0.8 },
        style: { stroke: '#475569', strokeWidth: 1.5 },
      })),
    [],
  );

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        colorMode="dark"
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#334155" />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={(node) =>
            node.type === 'group' ? '#1e293b' : '#334155'
          }
          maskColor="rgba(0,0,0,0.4)"
        />
      </ReactFlow>

      <InfoPanel paper={selectedPaper} onClose={handleClose} />
    </div>
  );
}
