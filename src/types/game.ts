export interface Game {
  title: string;
  description: string;
  imageUrl: string;
  releaseYear: number;
  matchPercentage: number;
}

export interface RefineOption {
  question: string;
  options: string[];
}