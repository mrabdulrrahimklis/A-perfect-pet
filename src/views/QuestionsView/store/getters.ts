import { GetterTree } from "vuex";
import { QuestionViewState } from "@/views/QuestionsView/types";
import { RootState } from "@/store/RootStore";

export const getters: GetterTree<QuestionViewState, RootState> = {
  getAnswersOne(state): string | null {
    return state.answerOne;
  },
  getAnswersTwo(state): string | null {
    return state.answerTwo;
  },
  getAnswersThree(state): string | null {
    return state.answerThree;
  },
  getNumberOfQuestion(state): number | null {
    return state.currentQuestion;
  }
};
