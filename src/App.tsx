import MindMap from './components/MindMap';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <span className="app__title">ML Mindmap</span>
        <span className="app__subtitle">A knowledge graph of machine learning research</span>
      </header>
      <main className="app__canvas">
        <MindMap />
      </main>
    </div>
  );
}
