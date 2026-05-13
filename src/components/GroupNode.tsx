import { memo } from 'react';
import type { Group } from '../types';

function GroupNode({ data }: { data: Group }) {
  return (
    <div
      className="group-node"
      style={{
        borderColor: `${data.color}88`,
        backgroundColor: `${data.color}12`,
        width: data.size.width,
        height: data.size.height,
      }}
    >
      <div className="group-node__label" style={{ color: data.color }}>
        <span className="group-node__dot" style={{ backgroundColor: data.color }} />
        {data.label}
      </div>
    </div>
  );
}

export default memo(GroupNode);
