import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { Paper } from '../types';

// Tag colors — cycles through these for distinct visual separation
const TAG_COLORS = [
  '#7c3aed', // violet
  '#0ea5e9', // sky
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ef4444', // red
  '#ec4899', // pink
  '#6366f1', // indigo
];

const tagColorCache = new Map<string, string>();
let tagColorIndex = 0;

function getTagColor(tag: string): string {
  if (!tagColorCache.has(tag)) {
    tagColorCache.set(tag, TAG_COLORS[tagColorIndex % TAG_COLORS.length]);
    tagColorIndex++;
  }
  return tagColorCache.get(tag)!;
}

type PaperNodeData = Paper & { onSelect: (paper: Paper) => void };

function PaperNode({ data }: { data: PaperNodeData }) {
  const displayAuthors =
    data.authors.length > 2
      ? `${data.authors[0]}, ${data.authors[1]}, et al.`
      : data.authors.join(', ');

  return (
    <div
      className="paper-node"
      onClick={() => data.onSelect(data)}
      title="Click for details"
    >
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="paper-node__title">{data.title}</div>
      <div className="paper-node__meta">
        {displayAuthors} · {data.year}
      </div>

      {data.tags && data.tags.length > 0 && (
        <div className="paper-node__tags">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="paper-node__tag"
              style={{ backgroundColor: getTagColor(tag) }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(PaperNode);
