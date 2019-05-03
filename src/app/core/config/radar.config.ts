export interface RadarConfig {
  svg_id: string;
  width: number;
  height: number;
  colors: RadarColor;
  title: string;
  quadrants: RadarQuadrants[];
  rings: RadarRing[];
  print_layout: boolean;
  entries?: RadarEntries[];
}

interface RadarQuadrants {
  name: string;
}

interface RadarRing {
  name: string;
  color: string;
}

interface RadarColor {
  background: string;
  grid: string;
  inactive: string;
  text: string;
}

export interface RadarEntries {
  label: string;
  quadrant: number;
  ring: number;
  moved: number;
  link?: string;
  active?: boolean;
}

export const QUADRANTS = [
  { name: 'platforms', index: 0 },
  { name: 'Infrastructure', index: 1 },
  { name: 'languages and frameworks', index: 2 },
  { name: 'tool', index: 3 }
];

export const RINGS = [
  { name: 'adopt', index: 0 },
  { name: 'trial', index: 1 },
  { name: 'assess', index: 2 },
  { name: 'hold', index: 3 }
];

export const radarConfig: RadarConfig = {
  svg_id: 'radar',
  width: 1380,
  height: 800,
  colors: {
    background: '#fff',
    grid: '#bbb',
    inactive: '#ddd',
    text: '#555'
  },
  title: 'My Radar',
  quadrants: [
    { name: 'platforms' },
    { name: 'Infrastructure' },
    { name: 'languages and frameworks' },
    { name: 'tool' }
  ],
  rings: [
    { name: 'ADOPT', color: '#93c47d' },
    { name: 'TRIAL', color: '#93d2c2' },
    { name: 'ASSESS', color: '#fbdb84' },
    { name: 'HOLD', color: '#efafa9' }
  ],
  print_layout: true
};
