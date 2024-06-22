<template>
  <Header />
  <main class="container">
    <router-view />
  </main>
</template>
<script setup>
import Header from './components/Header.vue'
</script>
<style scoped>
.container {
  padding: 20px 40px;
}
</style>
