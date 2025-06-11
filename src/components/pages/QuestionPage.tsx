import type { QuestionProps } from "../../interfaces/interface";

export const QuestionPage: React.FC<QuestionProps> = ({
  questions,
  answers,
  onAnswer,
}) => {
  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <div key={q.id} className="p-4 border rounded-xl">
          <p className="mb-2">{q.text}</p>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name={`q-${q.id}`}
                checked={answers[q.id] === true}
                onChange={() => onAnswer(q.id, true)}
              />{" "}
              Setuju
            </label>
            <label>
              <input
                type="radio"
                name={`q-${q.id}`}
                checked={answers[q.id] === false}
                onChange={() => onAnswer(q.id, false)}
              />{" "}
              Tidak Setuju
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
