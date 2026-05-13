import { useState } from 'react';
import type { Paper } from '../types';
import mindmapData from '../data/mindmap';

interface Props {
  onSelectPaper: (paper: Paper) => void;
  onClose: () => void;
  closing?: boolean;
}

export default function GroupListPanel({ onSelectPaper, onClose, closing = false }: Props) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const isMobile = window.innerWidth <= 640;

  const groups = mindmapData.groups ?? [];

  const papersByGroup = new Map<string, Paper[]>();
  for (const paper of mindmapData.papers) {
    if (!paper.parentGroup) continue;
    const arr = papersByGroup.get(paper.parentGroup) ?? [];
    arr.push(paper);
    papersByGroup.set(paper.parentGroup, arr);
  }

  const toggle = (groupId: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(groupId)) next.delete(groupId);
      else next.add(groupId);
      return next;
    });
  };

  return (
    <div className={`list-panel${closing ? ' list-panel--closing' : ''}`} role="dialog" aria-label="Browse groups">
      <div className="panel__drag-handle" aria-hidden="true" />
      <div className="list-panel__header">
        <span className="list-panel__title">Browse</span>
        {isMobile ? (
          <button className="list-panel__map-btn" onClick={onClose} aria-label="Go to map">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <circle cx="6.5" cy="6.5" r="2" fill="currentColor"/>
              <circle cx="1.5" cy="2"   r="1" fill="currentColor" opacity="0.5"/>
              <circle cx="11.5" cy="2"  r="1" fill="currentColor" opacity="0.5"/>
              <circle cx="1.5" cy="11"  r="1" fill="currentColor" opacity="0.5"/>
              <circle cx="11.5" cy="11" r="1" fill="currentColor" opacity="0.5"/>
              <line x1="1.5" y1="2"  x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
              <line x1="11.5" y1="2" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
              <line x1="1.5" y1="11" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
              <line x1="11.5" y1="11" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            </svg>
            Map
          </button>
        ) : (
          <button className="list-panel__close" onClick={onClose} aria-label="Close">×</button>
        )}
      </div>

      <div className="list-panel__body">
        {groups.map(group => {
          const papers = papersByGroup.get(group.id) ?? [];
          const isOpen = expanded.has(group.id);

          return (
            <div key={group.id} className="list-group">
              <button className="list-group__header" onClick={() => toggle(group.id)}>
                <span className="list-group__dot" style={{ background: group.color }} />
                <span className="list-group__name" style={{ color: group.color }}>{group.label}</span>
                <span className="list-group__count">{papers.length}</span>
                <span className={`list-group__chevron${isOpen ? ' list-group__chevron--open' : ''}`}>›</span>
              </button>

              <div className={`list-group__papers${isOpen ? ' list-group__papers--open' : ''}`}>
                <div className="list-group__papers-inner">
                  {papers.map(paper => (
                    <button key={paper.id} className="list-paper" onClick={() => onSelectPaper(paper)}>
                      <span className="list-paper__title">{paper.title}</span>
                      <span className="list-paper__meta">{paper.authors[0]} · {paper.year}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
