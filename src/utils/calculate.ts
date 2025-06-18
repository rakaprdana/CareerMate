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

  answers.forEach(({ questionId, agree }) => {
    if (agree) {
      const question = questions.find((q) => q.id === questionId);
      if (question) {
        question.types.forEach((type) => {
          scores[type as HollandType]++;
        });
      }
    }
  });

  console.log("Answers:", answers);
  return scores;
};
