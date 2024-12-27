export interface MeditationType {
  id: number;
  title: string;
  image: string;
  audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
  {
    id: 1,
    title: "Mountains",
    image: "trees.webp",
    audio: "trees",
  },
  {
    id: 2,
    title: "Rivers",
    image: "river.webp",
    audio: "river",
  },
  {
    id: 3,
    title: "Sunset",
    image: "meditate-under-tree.webp",
    audio: "meditate_under_tree",
  },
  {
    id: 4,
    title: "Beaches",
    image: "beach.webp",
    audio: "beach",
  },
  {
    id: 5,
    title: "Starry Night",
    image: "yosemite-stars.webp",
    audio: "yosemite_stars",
  },
  {
    id: 6,
    title: "Waterfall",
    image: "waterfall.webp",
    audio: "waterfall",
  },
];

export const AUDIO_FILES = {
  trees: {
    uri: "https://drive.google.com/uc?export=download&id=1isu3CEMOes6V9H2vBgZmNS4OgdiHQvTE",
  },
  river: {
    uri: "https://drive.google.com/uc?export=download&id=1AKEY2H2iOEIyCJG-My6qzW6ZTqhbx93H/edit",
  },
  meditate_under_tree: {
    uri: "https://drive.google.com/uc?export=download&id=1QjyaDuhIU7evg02LJXIuPmoRfoyzAlP9",
  },
  beach: {
    uri: "https://drive.google.com/uc?export=download&id=1B2KVsrfo32hjjdr_nMiIHdgwYC6W8vGB",
  },
  yosemite_stars: {
    uri: "https://drive.google.com/uc?export=download&id=1RgRjd69h9-JAn4yA3jbUWAwyqJYWglYI",
  },
  waterfall: {
    uri: "https://drive.google.com/uc?export=download&id=1isu3CEMOes6V9H2vBgZmNS4OgdiHQvTE",
  },
};

export default AUDIO_FILES;
