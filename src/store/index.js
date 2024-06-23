import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

export const useCurrencyStore = defineStore("currencyStore", () => {
  const favourites = ref([]);
  const currencies = ref([]);

  onMounted(() => {
    favourites.value = JSON.parse(localStorage.getItem("favourites")) || [];
  });

  const addToFavourites = (currency) => {
    if (!favourites.value.some((fav) => fav.title === currency.title)) {
      favourites.value.push(currency);
      localStorage.setItem("favourites", JSON.stringify(favourites.value));
    }
  };

  const fetchCurrencies = async (date) => {
    try {
      const response = await axios.get(
        `https://nationalbank.kz/rss/get_rates.cfm?fdate=${date}`
      );
      const parser = new XMLParser();
      const result = parser.parse(response.data);
      currencies.value = result.rates.item.map((item) => ({
        fullname: item.fullname,
        title: item.title,
        description: item.description,
        flag: getFlag(item.title),
      }));
    } catch (error) {
      console.error("Failed to fetch and parse data:", error);
    }
  };

  const getFlag = (title) => {
    const flagMap = {
      USD: "us.png",
      AUD: "aus.png",
      AZN: "azr.png",
      AMD: "arm.png",
      BYN: "blr.png",
      BRL: "bzr.png",
      IRR: "irn.png",
      HUF: "hng.png",
      CNY: "cn.png",
      KGS: "kyr.png",
    };
    return flagMap[title] || "";
  };

  const removeFromFavourites = (currency) => {
    favourites.value = favourites.value.filter(
      (fav) => fav.title !== currency.title
    );
    localStorage.setItem("favourites", JSON.stringify(favourites.value));
  };

  return {
    addToFavourites,
    removeFromFavourites,
    favourites,
    fetchCurrencies,
    currencies,
  };
});
