<template lang="">
  <div>
    <!-- <Post
      :instaDatas="instaDatas[i]"
      v-for="(instaData, i) in instaDatas"
      :key="i"
    /> -->
    <Post :instaDatas="instaDatas" v-if="step == 0" />

    <div
      class="upload-image"
      v-if="step == 1"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="filters" v-if="step == 1">
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
    </div>

    <!-- 글작성페이지 -->
    <div
      class="upload-image"
      v-if="step == 2"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="write" v-if="step == 2">
      <textarea
        @input="$emit('writeContent', $event.target.value)"
        class="write-box"
      >
write!</textarea
      >
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";

export default {
  name: "Container-a",
  components: {
    Post: Post,
  },
  props: {
    instaDatas: Array,
    step: Number,
    imageUrl: String,
  },
};
</script>
<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
