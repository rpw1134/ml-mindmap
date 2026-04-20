import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { Paper } from '../types';

function PaperNode({ data }: { data: Paper }) {
  const displayAuthors =
    data.authors.length > 2
      ? `${data.authors[0]}, ${data.authors[1]}, et al.`
      : data.authors.join(', ');

  return (
    <div className="paper-node">
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div className="paper-node__title">{data.title}</div>
      <div className="paper-node__meta">
        {displayAuthors} · {data.year}
      </div>
    </div>
  );
}

export default memo(PaperNode);
