import MindMap from './components/MindMap';
import mindmapData from './data/mindmap';
import './App.css';

export default function App() {
  const paperCount = mindmapData.papers.length;
  const edgeCount = mindmapData.edges.length;
  const groupCount = (mindmapData.groups ?? []).length;

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__brand">
          <svg className="app__logo" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="2.5" fill="currentColor"/>
            <circle cx="3"  cy="4"  r="1.4" fill="currentColor" opacity="0.45"/>
            <circle cx="17" cy="4"  r="1.4" fill="currentColor" opacity="0.45"/>
            <circle cx="3"  cy="16" r="1.4" fill="currentColor" opacity="0.45"/>
            <circle cx="17" cy="16" r="1.4" fill="currentColor" opacity="0.45"/>
            <line x1="3"  y1="4"  x2="10" y2="10" stroke="currentColor" strokeWidth="0.9" opacity="0.35"/>
            <line x1="17" y1="4"  x2="10" y2="10" stroke="currentColor" strokeWidth="0.9" opacity="0.35"/>
            <line x1="3"  y1="16" x2="10" y2="10" stroke="currentColor" strokeWidth="0.9" opacity="0.35"/>
            <line x1="17" y1="16" x2="10" y2="10" stroke="currentColor" strokeWidth="0.9" opacity="0.35"/>
          </svg>
          <span className="app__title">ML Mindmap</span>
        </div>

        <div className="app__stats">
          <span className="app__stat">{paperCount} papers</span>
          <span className="app__stat-sep">·</span>
          <span className="app__stat">{edgeCount} connections</span>
          <span className="app__stat-sep">·</span>
          <span className="app__stat">{groupCount} groups</span>
        </div>
      </header>

      <main className="app__canvas">
        <MindMap />
      </main>
    </div>
  );
}
