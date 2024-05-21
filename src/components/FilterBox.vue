<template lang="">
  <!-- {{ filters }} -->
  <div
    :class="filter + ' filter-item'"
    :style="`background-image:url(${imageUrl})`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox-a",
  props: {
    imageUrl: String,
    filter: String,
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
