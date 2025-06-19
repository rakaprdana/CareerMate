import React from "react";
import type { Question, Answer } from "../../interfaces/interface";

interface Props {
  questions: Question[];
  answers: Answer[];
  onAnswer: (questionId: number, confidence: number) => void;
}

export const QuestionPage: React.FC<Props> = ({
  questions,
  answers,
  onAnswer,
}) => {
  const choices = [
    { label: "Tidak Tahu", value: 0 },
    { label: "Tidak Yakin", value: 0.2 },
    { label: "Mungkin", value: 0.4 },
    { label: "Yakin", value: 0.6 },
    { label: "Cukup Yakin", value: 0.8 },
    { label: "Sangat Yakin", value: 1 },
  ];

  return (
    <main className="flex flex-col items-center space-y-6 px-4 md:px-8">
      {questions.map((q) => {
        const currentAnswer = answers.find((a) => a.questionId === q.id);

        return (
          <div
            key={q.id}
            className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center justify-between gap-4 p-6 border border-borderColor rounded-2xl bg-foreBackground w-full max-w-5xl shadow-sm"
          >
            {/* Pertanyaan */}
            <p className=" text-base md:text-lg font-medium text-textBold w-full md:w-1/3 min-w-0 break-words">
              {q.text}
            </p>

            {/* Pilihan Jawaban */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full md:w-[60%]">
              {choices.map((choice) => {
                const selected = currentAnswer?.confidence === choice.value;
                return (
                  <label
                    key={choice.value}
                    className={` flex items-center justify-center  cursor-pointer rounded-xl border px-2 py-2 text-center font-medium transition w-full
                ${
                  selected
                    ? "bg-selected text-white border-selected"
                    : "bg-white text-textMedium border-borderColor hover:bg-background"
                }`}
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={choice.value}
                      className="hidden "
                      checked={selected}
                      onChange={() => onAnswer(q.id, choice.value)}
                    />
                    {choice.label}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};
