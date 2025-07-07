import { useEffect, useState } from "react";
import type { Question } from "../../../interfaces/interface";
import { getQuestion } from "../api";

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getQuestion();
        setQuestions(result);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { questions, loading };
}
