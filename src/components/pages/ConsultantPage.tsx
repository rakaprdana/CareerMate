import React, { useState } from "react";
import { QuestionPage } from "../pages/QuestionPage";
import { ResultPage } from "../pages/ResultPage";
import { calculateScores } from "../../utils/calculate";
import type { Answer } from "../../interfaces/interface";
import { questions } from "../../data/question"; // Pastikan kamu punya data soal
import { NavigationButtons } from "../elements/navbar";

const QUESTIONS_PER_PAGE = 5;

export const ConsultantPage: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const startIdx = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(
    startIdx,
    startIdx + QUESTIONS_PER_PAGE
  );

  const handleAnswer = (questionId: number, agree: boolean) => {
    setAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== questionId);
      return [...filtered, { questionId, agree }];
    });
  };

  const handleFinish = () => {
    if (answers.length === questions.length) {
      setShowResult(true);
    } else {
      alert("Mohon jawab semua pertanyaan terlebih dahulu.");
    }
  };

  const scores = calculateScores(answers, questions);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {!showResult ? (
        <>
          <NavigationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={() => setCurrentPage((p) => p + 1)}
            onPrev={() => setCurrentPage((p) => p - 1)}
            onSubmit={handleFinish}
          />
          <QuestionPage
            questions={currentQuestions}
            answers={answers}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <ResultPage scores={scores} />
      )}
    </div>
  );
};
