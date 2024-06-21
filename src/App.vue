<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <h4>안녕 {{ 내이름 }}</h4>
  <h5>나이는 {{ age }}</h5>
  <button @click="$store.commit('changeName')">이름바꾸기 버튼</button>
  <button @click="addAge(10)">나이바꾸기 버튼</button> -->

  <Container
    @writeContent="writeContent = $event"
    :instaDatas="instaDatas"
    :step="step"
    :imageUrl="imageUrl"
  />

  <button @click="more" v-if="step == 0">더보기(methods로 만듦)</button>
  <button @click="$store.dispatch('getMore')" v-if="step == 0">
    더보기(store로 만듦)
  </button>

  <div class="footer" v-if="step == 0">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->
</template>

<script>
import Container from "./components/Container.vue";
import data from "./assets/instaData.js";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      instaDatas: data,
      count: 0,
      step: 0,
      imageUrl: "",
      writeContent: "",
      selectedFilter: "",
      counter: 0,
    };
  },
  mounted() {
    this.emitter.on("clickFilterBox", (a) => {
      this.selectedFilter = a;
    });
  },
  components: {
    Container: Container,
  },
  computed: {
    ...mapState(["name", "age", "likes"]),
    ...mapState({ 내이름: "name" }),
  },
  methods: {
    ...mapMutations(["setMore", "changeLike", "addAge"]),
    publish() {
      var myData = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.imageUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.writeContent,
        filter: this.selectedFilter,
      };
      this.instaDatas.unshift(myData);
      this.step = 0;
    },
    more() {
      // console.log(this.count);
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((result) => {
          // console.log(result.data);
          this.instaDatas.push(result.data);
          this.count++;
        });
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.imageUrl = url;
      this.step++;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
