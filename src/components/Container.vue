<template lang="">
  <div>
    <!-- <Post
      :instaDatas="instaDatas[i]"
      v-for="(instaData, i) in instaDatas"
      :key="i"
    /> -->
    <Post :instaDatas="instaDatas" />
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
  },
};
</script>
<style lang=""></style>
