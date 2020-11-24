import { QuestionViewState } from "@/views/QuestionsView/types";

export interface RootState {
  version: string;
  questionsViewState?: QuestionViewState;
}
