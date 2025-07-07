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

  const questionMap = new Map<number, Question>();
  questions.forEach((q) => questionMap.set(q.id, q));

  answers.forEach(({ questionId, confidence }) => {
    const question = questionMap.get(questionId);

    if (question && Array.isArray(question.types)) {
      question.types.forEach((type) => {
        scores[type as HollandType] += confidence;
      });
    }
  });

  // Pembulatan ke 1 angka desimal
  (Object.keys(scores) as HollandType[]).forEach((key) => {
    scores[key] = Math.round(scores[key] * 10) / 10;
  });

  console.log(answers);
  return scores;
};
