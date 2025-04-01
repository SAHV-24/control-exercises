export interface Exercise {
  _id: string;
  title: string;
  imageUrl: string;
  gifUrl: string;
  question: string;
  description: string;
  answer: string;
  answcod: string;
  imageport: string;
}

export interface Option {
  option: string;
  isCorrect: boolean;
  description?: string;
}
