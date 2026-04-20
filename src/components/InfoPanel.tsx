import { useEffect } from 'react';
import type { Paper } from '../types';
import mindmapData from '../data/mindmap';

interface InfoPanelProps {
  paper: Paper | null;
  onClose: () => void;
}

export default function InfoPanel({ paper, onClose }: InfoPanelProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!paper) return null;

  const arXivUrl = paper.url ?? (paper.arxivId ? `https://arxiv.org/abs/${paper.arxivId}` : null);
  const parentGroup = paper.parentGroup
    ? (mindmapData.groups ?? []).find((g) => g.id === paper.parentGroup)
    : null;

  return (
    <div
      className="info-panel"
      style={{ '--panel-accent': parentGroup?.color ?? 'var(--border)' } as React.CSSProperties}
      role="dialog"
      aria-label="Paper details"
    >
      <button className="info-panel__close" onClick={onClose} aria-label="Close">
        ×
      </button>

      <div className="info-panel__header">
        {/* Compact metadata line: group (colored) · year (neutral) */}
        <div className="info-panel__meta-row">
          {parentGroup && (
            <span className="info-panel__group">{parentGroup.label}</span>
          )}
          <span className="info-panel__year">{paper.year}</span>
        </div>

        {/* Title is the hero */}
        <h2 className="info-panel__title">{paper.title}</h2>
        <div className="info-panel__authors">{paper.authors.join(', ')}</div>
      </div>

      {paper.tags && paper.tags.length > 0 && (
        <div className="info-panel__tags">
          {paper.tags.map((tag) => (
            <span key={tag} className="info-panel__tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="info-panel__section">
        <div className="info-panel__section-label">Abstract</div>
        <p className="info-panel__abstract">{paper.abstract}</p>
      </div>

      {arXivUrl && (
        <div className="info-panel__footer">
          <a
            className="info-panel__link"
            href={arXivUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on arXiv →
          </a>
        </div>
      )}
    </div>
  );
}
