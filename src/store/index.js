import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { currencies } from "../services/db";
export const useCurrencyStore = defineStore("currencyStore", () => {
  const favourites = ref([]);

  function addToFavourites(currency) {
    favourites.value.push(currency);
    localStorage.setItem("favourites", JSON.stringify(favourites.value));
  }
  onMounted(() => {
    favourites.value = JSON.parse(localStorage.getItem("favourites")) || [];
    console.log(favourites.value);
  });
  function removeFromFavourites(currency) {
    favourites.value = favourites.value.filter(
      (fav) => fav.title !== currency.title
    );
    localStorage.setItem("favourites", JSON.stringify(favourites.value));
  }
  return { addToFavourites, removeFromFavourites, favourites };
});
