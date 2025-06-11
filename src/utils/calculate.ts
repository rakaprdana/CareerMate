import type { Question } from "../interfaces/interface";
import type { HollandType } from "../types/hollandcode";

export interface Answer {
  questionId: number;
  agree: boolean;
}

export const calculateScores = (
  answers: Answer[],
  questions: Question[]
): Record<HollandType, number> => {
  const scores: Record<HollandType, number> = {
    Realistic: 0,
    Investigative: 0,
    Artistic: 0,
    Social: 0,
    Enterprising: 0,
    Conventional: 0,
  };

  answers.forEach((answer) => {
    if (answer.agree) {
      const question = questions.find((q) => q.id === answer.questionId);
      if (question) {
        question.types.forEach((type) => {
          scores[type as HollandType] += 1;
        });
      }
    }
  });

  return scores;
};
