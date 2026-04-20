import { memo } from 'react';
import type { Group } from '../types';

function GroupNode({ data }: { data: Group }) {
  return (
    <div
      className="group-node"
      style={{
        borderColor: data.color,
        backgroundColor: `${data.color}18`, // ~10% opacity tint
        width: data.size.width,
        height: data.size.height,
      }}
    >
      <div className="group-node__label" style={{ color: data.color }}>
        {data.label}
      </div>
    </div>
  );
}

export default memo(GroupNode);
