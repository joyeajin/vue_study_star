import { createStore } from "vuex";
import axios from "axios";
import instaData from "./assets/instaData";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: [30, 30, 30, 30, 30],
      clickLike: false,
      instaData: instaData,
      moreNum: 0,
    };
  },
  mutations: {
    changeName(state) {
      state.name = "park";
    },
    addAge(state, payload) {
      state.age += payload;
    },
    changeLike(state, value) {
      if (state.clickLike == false) {
        state.likes[value]++;
        state.clickLike = true;
      } else {
        state.likes[value]--;
        state.clickLike = false;
      }
    },
    setMore(state, payload) {
      state.instaData.push(payload);
      state.moreNum++;
    },
  },
  actions: {
    getMore() {
      axios
        .get(
          `https://codingapple1.github.io/vue/more${this.state.moreNum}.json`
        )
        .then((a) => {
          //   console.log(a.data);
          this.commit("setMore", a.data);
        });
    },
  },
});

export default store;
