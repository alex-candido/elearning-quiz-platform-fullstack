import { api } from "@/lib/api";

const getAllQuestions= async (): Promise<QuestionData[]> => {
  const response = await api.get("/api/questions/");

  return response.data;
};

const getAllQuestionsAction = {
  getAllQuestions,
}

export default getAllQuestionsAction;
