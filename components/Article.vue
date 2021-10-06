<template>
  <article>
    <a target="_blank" :href="link">
      <img style="height: 300px" :src="img" alt="" />
      <h2>{{ title }}</h2>
    </a>
  </article>
</template>

<script>
export default {
  name: "Article",
  props: ["title", "link", "img"]
};
</script>

<style lang="scss" scoped>
article {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 10px;
  margin: 1rem;
  max-width: 800px;
  a {
    color: inherit;
    text-decoration: none;
    h2 {
      padding: 5px;
    }
    img {
      width: 100%;
      border-radius: 10px 10px 0px 0px;
    }
  }
}

// for large screens
@media (min-width: 768px) {
  article {
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &:hover {
      background: rgb(243, 243, 243);
      transition: ease-in 0.2s;
      img {
        transition: ease-in 0.2s;
        opacity: 0.9;
      }
    }
    a {
      display: flex;
      img {
        width: 400px;
        border-radius: 10px 0px 0px 10px;
      }
      h2 {
        width: 300px;
      }
    }
  }
}
</style>
