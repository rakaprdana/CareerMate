import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

// export const getQuestion = async (page: number) => {
//   const response = await axios.get(`${API}/question?page=${page}&limit=5`);
//   return {
//     questions: response.data.question,
//     totalPages: response.data.pages,
//     currentPage: response.data.page,
//   };
// };

export const getQuestion = async () => {
  const response = await axios.get(`${API}/question`);
  return response.data.question;
};
