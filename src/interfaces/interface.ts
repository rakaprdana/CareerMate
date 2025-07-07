export interface TraitsSelectorProps {
  traits: string[];
  selectedTraits: string[];
  toggleTrait: (trait: string) => void;
}

export interface CareerResultsProps {
  careers: string[];
}

export interface Rule {
  conditions: string[];
  career: string;
}

export interface Question {
  id: number;
  text: string;
  types: string[]; // ["Realistic", "Investigative"]
}

export interface Answer {
  questionId: number;
  confidence: number;
}

export interface QuestionProps {
  questions: Question[];
  answers: Record<number, boolean>;
  onAnswer: (id: number, agree: boolean) => void;
}

export interface NavProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}
