<template lang="">
  <!-- {{ filters }} -->
  <div
    @click="fire"
    :class="filter + ' filter-item'"
    :style="`background-image:url(${imageUrl})`"
  >
    <slot></slot>
    <!-- <button @click="fire">버튼</button> -->
  </div>
</template>

<script>
export default {
  name: "FilterBox-a",
  props: {
    imageUrl: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit("clickFilterBox", this.filter);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: blue;
  background-size: cover;
  background-position: center;
}
</style>
