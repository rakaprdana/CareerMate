import React, { useState } from "react";
import { NavigationButtons } from "./components/elements/navbar";
import { QuestionPage } from "./components/pages/QuestionPage";
import { ResultPage } from "./components/pages/ResultPage";
import { questions } from "./data/question";
import { calculateScores } from "./utils/calculate";

const QUESTIONS_PER_PAGE = 5;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const startIdx = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(
    startIdx,
    startIdx + QUESTIONS_PER_PAGE
  );

  const handleAnswer = (id: number, agree: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: agree }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const userAnswers = Object.entries(answers).map(([id, agree]) => ({
    questionId: parseInt(id),
    agree: agree === true || agree === false,
  }));

  const scores = calculateScores(userAnswers, questions);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Tes Holland Code (RIASEC)</h1>

      {showResults ? (
        <ResultPage scores={scores} />
      ) : (
        <>
          <QuestionPage
            questions={currentQuestions}
            answers={answers}
            onAnswer={handleAnswer}
          />

          <NavigationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={() => setCurrentPage((p) => p + 1)}
            onPrev={() => setCurrentPage((p) => p - 1)}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default App;
