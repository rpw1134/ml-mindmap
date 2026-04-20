const TAG_COLORS = [
  '#7c3aed', // violet
  '#0ea5e9', // sky
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ef4444', // red
  '#ec4899', // pink
  '#6366f1', // indigo
];

const cache = new Map<string, string>();
let index = 0;

export function getTagColor(tag: string): string {
  if (!cache.has(tag)) {
    cache.set(tag, TAG_COLORS[index % TAG_COLORS.length]);
    index++;
  }
  return cache.get(tag)!;
}
