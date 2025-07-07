import React, { useState } from "react";
import { QuestionPage } from "../pages/QuestionPage";
import { ResultPage } from "../pages/ResultPage";
import { calculateScores } from "../../utils/calculate";
import type { Answer } from "../../interfaces/interface";
import { NavTop } from "../elements/navbar/navtop";
import { useQuestions } from "../api/hooks/useQuestion";
import { ProgressIndicator } from "../elements/progress-indicator";
import { QuestionNavigation } from "../elements/navbar/question-nav";

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
    console.log("handleAnswer called:", questionId, confidence);
    setAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== questionId);
      return [...filtered, { questionId, confidence }];
    });
  };

  const isPageAnswered = (): boolean =>
    currentQuestions.every((q) => answers.some((a) => a.questionId === q.id));

  const handleNext = () => {
    if (!isPageAnswered()) {
      alert("Mohon jawab semua pertanyaan di halaman ini sebelum lanjut.");
      return;
    }
    setCurrentPage((p) => p + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinish = () => {
    if (loading) {
      alert("Pertanyaan masih dimuat.");
      return;
    }

    const isAllAnswered = questions.every((q) =>
      answers.some((a) => a.questionId === q.id)
    );

    if (!isAllAnswered) {
      alert("Mohon jawab semua pertanyaan terlebih dahulu.");
      return;
    }

    setShowResult(true);
  };

  const validQuestionIds = new Set(questions.map((q) => q.id));
  const validAnswers = answers.filter((a) =>
    validQuestionIds.has(a.questionId)
  );
  const scores = showResult ? calculateScores(validAnswers, questions) : null;
  // console.log(scores);

  return (
    <>
      <NavTop />
      <div className="flex flex-col items-center p-4 pt-32">
        {loading ? (
          <p>Loading pertanyaan...</p>
        ) : !showResult ? (
          <>
            <ProgressIndicator
              answeredCount={answers.length}
              totalCount={questions.length}
            />

            <QuestionPage
              questions={currentQuestions}
              answers={answers}
              onAnswer={handleAnswer}
            />

            <QuestionNavigation
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={handleNext}
              onPrev={() => setCurrentPage((p) => p - 1)}
              onSubmit={handleFinish}
            />
          </>
        ) : (
          scores && <ResultPage scores={scores} />
        )}
      </div>
    </>
  );
};
