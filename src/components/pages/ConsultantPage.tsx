import React, { useState } from "react";
import { QuestionPage } from "../pages/QuestionPage";
import { ResultPage } from "../pages/ResultPage";
import { calculateScores } from "../../utils/calculate";
import type { Answer } from "../../interfaces/interface";
import { NavigationButtons } from "../elements/navbar/navbottom";
import { NavTop } from "../elements/navbar/navtop";
import { useQuestions } from "../api/hooks/useQuestion";

const QUESTIONS_PER_PAGE = 5;

export const ConsultantPage: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const { questions, loading } = useQuestions();

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

  const handleNext = () => {
    setCurrentPage((p) => p + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scores = calculateScores(answers, questions);

  return (
    <>
      <NavTop />
      <div className="flex flex-col items-center p-4 pt-32">
        {loading ? (
          <p>Loading pertanyaan...</p>
        ) : !showResult ? (
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
    </>
  );
};
