import { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  type Edge,
  type EdgeMouseHandler,
} from '@xyflow/react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyNode = any;
import '@xyflow/react/dist/style.css';

import type { Paper } from '../types';
import mindmapData from '../data/mindmap';
import PaperNode from './PaperNode';
import GroupNode from './GroupNode';
import InfoPanel from './InfoPanel';
import GroupListPanel from './GroupListPanel';

const nodeTypes = {
  paper: PaperNode,
  group: GroupNode,
};

interface EdgeTooltip {
  text: string;
  x: number;
  y: number;
}

const PANEL_ANIM_MS = 200;

export default function MindMap() {
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);
  const [paperFromList, setPaperFromList] = useState(false);
  const [listOpen, setListOpen] = useState(() => window.innerWidth <= 640);
  const [edgeTooltip, setEdgeTooltip] = useState<EdgeTooltip | null>(null);
  const [listClosing, setListClosing] = useState(false);
  const [paperClosing, setPaperClosing] = useState(false);

  const handleNodeClick = useCallback((_event: React.MouseEvent, node: AnyNode) => {
    if (node.type === 'paper') {
      setSelectedPaper(node.data as Paper);
      setPaperFromList(false);
    }
  }, []);

  const handleSelectFromList = useCallback((paper: Paper) => {
    setSelectedPaper(paper);
    setPaperFromList(true);
  }, []);

  const startClosingPaper = useCallback((closeListToo = false) => {
    setPaperClosing(true);
    setTimeout(() => {
      setSelectedPaper(null);
      setPaperFromList(false);
      setPaperClosing(false);
      if (closeListToo) setListOpen(false);
    }, PANEL_ANIM_MS);
  }, []);

  const startClosingList = useCallback(() => {
    setListClosing(true);
    setTimeout(() => {
      setListOpen(false);
      setListClosing(false);
    }, PANEL_ANIM_MS);
  }, []);

  const handlePaperClose = useCallback(() => {
    startClosingPaper(false);
  }, [startClosingPaper]);

  const handleListClose = useCallback(() => {
    startClosingList();
  }, [startClosingList]);

  const handlePaneClick = useCallback(() => {
    if (selectedPaper) startClosingPaper(true);
    else if (listOpen) startClosingList();
  }, [selectedPaper, listOpen, startClosingPaper, startClosingList]);

  const edgeRelationshipMap = useMemo(
    () => new Map(mindmapData.edges.filter(e => e.relationship).map(e => [e.id, e.relationship!])),
    [],
  );

  const handleEdgeMouseEnter: EdgeMouseHandler = useCallback(
    (event, edge) => {
      const text = edgeRelationshipMap.get(edge.id);
      if (!text) return;
      setEdgeTooltip({ text, x: event.clientX, y: event.clientY });
    },
    [edgeRelationshipMap],
  );

  const handleEdgeMouseMove: EdgeMouseHandler = useCallback(
    (event) => {
      setEdgeTooltip(prev => prev ? { ...prev, x: event.clientX, y: event.clientY } : null);
    },
    [],
  );

  const handleEdgeMouseLeave: EdgeMouseHandler = useCallback(() => {
    setEdgeTooltip(null);
  }, []);

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

  const groupColorMap = useMemo(
    () => new Map((mindmapData.groups ?? []).map((g) => [g.id, g.color])),
    [],
  );

  const DEFAULT_NODE_COLOR = '#5a5248';

  const paperNodes: AnyNode[] = useMemo(
    () =>
      mindmapData.papers.map((p) => ({
        id: p.id,
        type: 'paper',
        position: p.position,
        data: {
          ...p,
          accentColor: p.parentGroup
            ? (groupColorMap.get(p.parentGroup) ?? DEFAULT_NODE_COLOR)
            : DEFAULT_NODE_COLOR,
        },
        draggable: false,
      })),
    [groupColorMap],
  );

  const nodes: AnyNode[] = useMemo(
    () => [...groupNodes, ...paperNodes],
    [groupNodes, paperNodes],
  );

  const edges: Edge[] = useMemo(
    () =>
      mindmapData.edges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        label: e.label,
        labelStyle: { fill: '#94a3b8', fontSize: 11 },
        labelBgStyle: { fill: '#1e293b', fillOpacity: 0.8 },
        style: { stroke: '#3d3328', strokeWidth: 1.5 },
      })),
    [],
  );

  const showHamburger = !listOpen && !selectedPaper;
  const showList = (listOpen || listClosing) && !selectedPaper && !paperClosing;

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        onEdgeMouseEnter={handleEdgeMouseEnter}
        onEdgeMouseMove={handleEdgeMouseMove}
        onEdgeMouseLeave={handleEdgeMouseLeave}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        colorMode="dark"
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#272220" />
        <Controls showInteractive={false} />
      </ReactFlow>

      {showHamburger && (
        <button
          className="hamburger"
          onClick={() => setListOpen(true)}
          aria-label="Browse groups"
        >
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
            <rect y="0"   width="15" height="1.5" rx="0.75" fill="currentColor"/>
            <rect y="4.75" width="15" height="1.5" rx="0.75" fill="currentColor"/>
            <rect y="9.5" width="15" height="1.5" rx="0.75" fill="currentColor"/>
          </svg>
        </button>
      )}

      {showList && (
        <GroupListPanel onSelectPaper={handleSelectFromList} onClose={handleListClose} closing={listClosing} />
      )}

      <InfoPanel paper={selectedPaper} onClose={handlePaperClose} showBack={paperFromList} closing={paperClosing} />

      {edgeTooltip && (
        <div
          className="edge-tooltip"
          style={{ left: edgeTooltip.x + 14, top: edgeTooltip.y - 12 }}
        >
          {edgeTooltip.text}
        </div>
      )}
    </div>
  );
}
