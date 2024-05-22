<template lang="">
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="검색어 입력" @input="search($event.target.value)" />
    <div
      class="post-header"
      v-for="(follower, index) in followers"
      :key="index"
    >
      <div
        class="profile"
        :style="`background-image: url(${follower.image})`"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  name: "MyPage-a",

  setup() {
    let followers = ref([]);
    let followersOriginal = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        followers.value = a.data;
        followersOriginal.value = [...a.data];
      });
    });

    function search(searchWord) {
      let newFollowers = followersOriginal.value.filter((follower) => {
        return follower.name.indexOf(searchWord) != -1;
      });

      followers.value = [...newFollowers];
    }

    return { followers, search };
  },
  data() {
    return {};
  },
};
</script>
<style></style>
