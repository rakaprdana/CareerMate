// import { useEffect, useState } from "react";
// import { getQuestion } from "../api";
// import type { Question } from "../../../interfaces/interface";

import { useEffect, useState } from "react";
import type { Question } from "../../../interfaces/interface";
import { getQuestion } from "../api";

/*export function usePaginatedQuestions() {
  const [questions, setQuestion] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getQuestion(currentPage);
        setQuestion(response.questions);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return {
    questions,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setCurrentPage,
  };
}*/

export function GetQuestion() {
  const [question, setQuestion] = useState<Question[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setQuestion(await getQuestion());
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    fetchData();
  }, []);
  return question;
}
