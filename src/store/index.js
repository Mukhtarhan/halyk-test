import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useCurrencyStore = defineStore("currencyStore", () => {
  const favourites = ref([]);

  onMounted(() => {
    favourites.value = JSON.parse(localStorage.getItem("favourites")) || [];
  });

  function addToFavourites(currency) {
    if (!favourites.value.some((fav) => fav.title === currency.title)) {
      favourites.value.push(currency);
      localStorage.setItem("favourites", JSON.stringify(favourites.value));
    }
  }

  function removeFromFavourites(currency) {
    favourites.value = favourites.value.filter(
      (fav) => fav.title !== currency.title
    );
    localStorage.setItem("favourites", JSON.stringify(favourites.value));
  }

  return { addToFavourites, removeFromFavourites, favourites };
});
