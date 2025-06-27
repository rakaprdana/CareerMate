import type { Answer } from "../interfaces/interface";
import type { Question } from "../interfaces/interface";
import type { HollandType } from "../types/hollandcode";

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

  answers.forEach(({ questionId, confidence }) => {
    const question = questions.find((q) => q.id === questionId);
    if (question) {
      question.types.forEach((type) => {
        scores[type as HollandType] += confidence;
      });
    }
  });
  //pembulatan
  Object.keys(scores).forEach((key) => {
    const t = key as HollandType;
    scores[t] = Math.round(scores[t] * 10) / 10;
  });

  return scores;
};
