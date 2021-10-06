<template>
  <div>
    <div class="contianer">
      <Article
        v-for="d in data"
        :key="d.title"
        :title="d.title"
        :img="d.pic"
        :link="d.link"
      />
    </div>
  </div>
</template>

<script>
import Article from "../components/Article";

export default {
  components: {
    Article
  },
  data() {
    return {
      data: []
    };
  },
  async created() {
    try {
      const res = await fetch("/api/nytglobal");
      const data = await res.json();
      let content = data.nytOutput;
      this.data = content;
    } catch {
      console.log("Try again m8...");
    }
  }
};
</script>

<style lang="scss" scoped></style>
