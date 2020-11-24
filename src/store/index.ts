import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/RootStore";
import { questionsViewState } from "@/views/QuestionsView/store";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  plugins: [createPersistedState()],
  state: {
    version: "0.1.0"
  },
  modules: {
    questionsViewState
  }
};

export default new Vuex.Store<RootState>(store);
