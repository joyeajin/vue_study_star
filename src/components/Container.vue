<template lang="">
  <div>
    <div v-if="step == 0">
      <Post
        :instaDatas="instaDatas[i]"
        v-for="(instaData, i) in instaDatas"
        :key="i"
        :index="i"
      />
    </div>
    <!-- <Post :instaDatas="instaDatas" v-if="step == 0" /> -->

    <div
      :class="selectedFilter"
      class="upload-image"
      v-if="step == 1"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="filters" v-if="step == 1">
      <FilterBox
        v-for="filter in filters"
        :key="filter"
        :imageUrl="imageUrl"
        :filter="filter"
      >
        <span>
          {{ filter }}
        </span>
      </FilterBox>
    </div>

    <!-- 글작성페이지 -->
    <div
      :class="selectedFilter"
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

    <div v-if="step == 3">
      <MyPage :one="1" />
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";

export default {
  name: "Container-a",
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      selectedFilter: "",
    };
  },
  mounted() {
    this.emitter.on("clickFilterBox", (a) => {
      this.selectedFilter = a;
    });
  },
  components: {
    Post: Post,
    FilterBox: FilterBox,
    MyPage: MyPage,
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
