import { useEffect } from 'react';
import type { Paper } from '../types';
import { getTagColor } from '../utils/tagColors';

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

  return (
    <div className="info-panel" role="dialog" aria-label="Paper details">
      <button className="info-panel__close" onClick={onClose} aria-label="Close">
        ×
      </button>

      {/* Identity block — year, title, authors are one tightly-grouped unit */}
      <div className="info-panel__header">
        <div className="info-panel__year">{paper.year}</div>
        <h2 className="info-panel__title">{paper.title}</h2>
        <div className="info-panel__authors">{paper.authors.join(', ')}</div>
      </div>

      {/* Tags sit in their own row, separated by the header's bottom border */}
      {paper.tags && paper.tags.length > 0 && (
        <div className="info-panel__tags">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className="info-panel__tag"
              style={{ backgroundColor: getTagColor(tag) }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Abstract as a labelled section */}
      <div className="info-panel__section">
        <div className="info-panel__section-label">Abstract</div>
        <p className="info-panel__abstract">{paper.abstract}</p>
      </div>

      {/* Footer link pushed to bottom */}
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
