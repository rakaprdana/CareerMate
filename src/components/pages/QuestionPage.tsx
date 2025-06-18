import React from "react";
import type { Question, Answer } from "../../interfaces/interface";

interface Props {
  questions: Question[];
  answers: Answer[];
  onAnswer: (questionId: number, agree: boolean) => void;
}

export const QuestionPage: React.FC<Props> = ({
  questions,
  answers,
  onAnswer,
}) => {
  return (
    <div className="space-y-4">
      {questions.map((q) => {
        const currentAnswer = answers.find((a) => a.questionId === q.id);
        return (
          <div key={q.id} className="p-4 border rounded-xl">
            <p className="mb-2">{q.text}</p>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  checked={currentAnswer?.agree === true}
                  onChange={() => onAnswer(q.id, true)}
                />{" "}
                Setuju
              </label>
              <label>
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  checked={currentAnswer?.agree === false}
                  onChange={() => onAnswer(q.id, false)}
                />{" "}
                Tidak Setuju
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
