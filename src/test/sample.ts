import { questions } from "../data/question";
import { calculateScores } from "../utils/calculate";

const testAnswers1 = [
  { questionId: 1, agree: true }, // Realistic
  { questionId: 2, agree: false },
  { questionId: 6, agree: true }, // Investigative
  { questionId: 11, agree: false },
  { questionId: 16, agree: true }, // Social
];

const testAnswers2 = [
  { questionId: 11, agree: true }, // Artistic
  { questionId: 12, agree: true }, // Artistic
  { questionId: 21, agree: true }, // Enterprising
  { questionId: 22, agree: true }, // Enterprising
  { questionId: 26, agree: false },
];

const testAnswers3 = [
  { questionId: 26, agree: true }, // Conventional
  { questionId: 27, agree: true }, // Conventional
  { questionId: 28, agree: true }, // Conventional
  { questionId: 3, agree: true }, // Realistic
  { questionId: 7, agree: true }, // Investigative
];

console.log("Result 1:", calculateScores(testAnswers1, questions));
console.log("Result 2:", calculateScores(testAnswers2, questions));
console.log("Result 3:", calculateScores(testAnswers3, questions));
