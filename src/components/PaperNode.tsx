import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { Paper } from '../types';

type PaperNodeData = Paper & { accentColor: string };

function PaperNode({ data }: { data: PaperNodeData }) {
  return (
    <div
      className="paper-node"
      style={{ '--node-accent': data.accentColor } as React.CSSProperties}
    >
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div className="paper-node__title">{data.title}</div>
    </div>
  );
}

export default memo(PaperNode);
