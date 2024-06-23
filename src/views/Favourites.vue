<template>
  <div>
    <h1>Избранное</h1>
    <CurrencyList :currencies="store.favourites" />
  </div>
</template>

<script setup>
import CurrencyList from "../components/CurrencyList.vue";
import { useCurrencyStore } from "../store/index";

const store = useCurrencyStore();
</script>

<style scoped></style>
