<template>
  <div>
    <Header />
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Header from "../components/Header";
import Nav from "../components/Nav";
export default {
  components: {
    Header,
    Nav
  }
};
</script>

