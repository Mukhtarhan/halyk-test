<template>
  <div class="list">
    <CurrencyItem
      v-for="currency in filteredCurrencies"
      :key="currency"
      :currency="currency"
    />
  </div>
  <div class="bottom" v-if="currencies.length > 0">
    <div class="switch">
      <span class="btn" @click="previousPage">{{ left }} </span>
      <span>{{ currentPage }}</span>
      <span class="btn" @click="nextPage">{{ right }} </span>
    </div>
    <select class="select" v-model="itemsPerPage">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  </div>
  <div v-else>
    <h3>Здесь пусто</h3>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
import CurrencyItem from "./CurrencyItem.vue";

const left = "<";
const right = ">";
const currentPage = ref(1);
const itemsPerPage = ref(10);

const props = defineProps({
  filter: {
    type: String,
    default: "",
  },
  currencies: {
    type: Array,
    default: () => [],
  },
});

const totalPages = computed(() =>
  Math.ceil(props.currencies.length / itemsPerPage.value)
);

const filteredCurrencies = computed(() => {
  let filtered = props.currencies;
  if (props.filter) {
    filtered = filtered.filter(
      (currency) =>
        currency.fullname.toLowerCase().includes(props.filter.toLowerCase()) ||
        currency.title.toLowerCase().includes(props.filter.toLowerCase())
    );
  }
  return filtered.slice(
    (currentPage.value - 1) * itemsPerPage.value,
    currentPage.value * itemsPerPage.value
  );
});

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}
</script>

<style scoped>
.bottom {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
.list {
  display: grid;
  margin-top: 10px;
  grid-template-columns: auto auto;
  gap: 20px;
}
.switch {
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  span {
    color: skyblue;
    font-weight: 700;
    font-size: 24px;
  }
  .btn {
    cursor: pointer;
  }
  .btn:hover {
    opacity: 0.6;
  }
}
.select {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  color: black;
}

.select:focus {
  outline: none;
}
</style>
