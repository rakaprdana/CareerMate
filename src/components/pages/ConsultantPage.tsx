import React, { useState } from "react";
import { QuestionPage } from "../pages/QuestionPage";
import { ResultPage } from "../pages/ResultPage";
import { calculateScores } from "../../utils/calculate";
import type { Answer } from "../../interfaces/interface";
import { questions } from "../../data/question";
import { NavigationButtons } from "../elements/navbar/navbottom";

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

  const handleAnswer = (questionId: number, confidence: number) => {
    setAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== questionId);
      return [...filtered, { questionId, confidence }];
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
  const handleNext = () => {
    setCurrentPage((p) => p + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="p-4 m-4">
      {!showResult ? (
        <>
          <QuestionPage
            questions={currentQuestions}
            answers={answers}
            onAnswer={handleAnswer}
          />
          <NavigationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNext}
            onPrev={() => setCurrentPage((p) => p - 1)}
            onSubmit={handleFinish}
          />
        </>
      ) : (
        <ResultPage scores={scores} />
      )}
    </div>
  );
};
