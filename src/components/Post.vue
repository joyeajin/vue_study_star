<template lang="">
  <!-- <div class="post" v-for="(instaData, i) in instaDatas" :key="i">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${instaDatas[i].userImage})` }"
      ></div>
      <span class="profile-name">{{ instaDatas[i].name }}</span>
    </div>
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${instaDatas[i].postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ instaDatas[i].likes }} Likes</p>
      <p>
        <strong>{{ instaDatas[i].name }}</strong> {{ instaDatas[i].content }}
      </p>
      <p class="date">{{ instaDatas[i].date }}</p>
    </div>
  </div> -->
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${instaDatas.userImage})` }"
      ></div>
      <span class="profile-name">{{ instaDatas.name }}</span>
    </div>
    <div
      :class="instaDatas.filter"
      class="post-body"
      :style="{ backgroundImage: `url(${instaDatas.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ instaDatas.likes }} Likes</p>
      <p>
        <strong>{{ instaDatas.name }}</strong> {{ instaDatas.content }}
      </p>
      <p class="date">{{ instaDatas.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Post-a",
  props: {
    instaDatas: Object,
  },
};
</script>
<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
