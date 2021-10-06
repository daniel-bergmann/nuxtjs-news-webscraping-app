<template>
  <header>
    <h1>
      <nuxt-link to="/">News</nuxt-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-start;
}
</style>
