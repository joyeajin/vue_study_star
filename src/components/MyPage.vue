<template lang="">
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
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

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        followers.value = a.data;
      });
    });

    return { followers };
  },
  data() {
    return {};
  },
};
</script>
<style></style>
