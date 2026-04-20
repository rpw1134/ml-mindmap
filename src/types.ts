export interface Paper {
  id: string;
  arxivId?: string;
  title: string;
  authors: string[];
  abstract: string;
  year: number;
  url?: string;
  tags?: string[];
  position: { x: number; y: number };
}

export interface PaperEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface Group {
  id: string;
  label: string;
  color: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface MindmapData {
  papers: Paper[];
  edges: PaperEdge[];
  groups?: Group[];
}
