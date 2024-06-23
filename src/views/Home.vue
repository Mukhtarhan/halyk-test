<template>
  <div class="home">
    <h2>Посмотреть курсы валют по дате</h2>
    <div class="home-filter">
      <div>
        <input type="date" v-model="date" />
        <button type="submit" @click="applyDate">Применить</button>
      </div>
      <div class="search-block">
        <input
          type="text"
          placeholder="Найти по имени или коду"
          v-model="onInput"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          viewBox="0 0 50 50"
          class="search"
        >
          <path
            fill="#87CEEB"
            d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
          ></path>
        </svg>
      </div>
    </div>
    <h3>Курс на {{ date }}</h3>
    <CurrencyList :filter="onInput" :currencies="store.currencies" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CurrencyList from "../components/CurrencyList.vue";
import { useCurrencyStore } from "../store/index";

const store = useCurrencyStore();
const date = ref("");
const onInput = ref("");

const setTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  date.value = `${year}-${month}-${day}`;
};

const applyDate = async () => {
  const [year, month, day] = date.value.split("-");
  const formattedDate = `${day}.${month}.${year}`;
  store.fetchCurrencies(formattedDate);
  console.log(store.currencies);
};

onMounted(() => {
  setTodayDate();
  applyDate();
});
</script>

<style scoped>
.home-filter {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.search {
  cursor: pointer;
}

h3 {
  margin-top: 20px;
  color: rgb(165, 165, 165);
}
.search:hover {
  opacity: 0.6;
}

.search-block {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

input[type="date"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #87ceeb;
  border-radius: 5px;
  background-color: #e0f7fa;
  color: #000;
  font-weight: 700;
}

input[type="date"]:focus {
  outline: none;
  border-color: #00bfff;
  box-shadow: 0 0 5px rgba(0, 191, 255, 0.5);
}

input[type="date"]::placeholder {
  color: #87ceeb;
  opacity: 0.7;
}

button[type="submit"] {
  padding: 12px 25px;
  margin-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #87ceeb;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  opacity: 0.8;
}

button[type="submit"]:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 191, 255, 0.5);
}

input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  box-shadow: 0 0 5px rgba(0, 191, 255, 0.5);
}

input[type="text"]::placeholder {
  color: #00bfff;
  opacity: 0.7;
}

input[type="text"]:focus {
  outline: none;
  border-color: #00bfff;
}
</style>
