<template>
  <div class="item">
    <div class="right">
      <img :src="currency.flag" alt="" width="70" />
      <div class="name">
        <h2>{{ currency.fullname }}</h2>
        <span class="code">{{ currency.title }}</span>
      </div>
    </div>

    <p class="desc">{{ currency.description }} KZT</p>
    <svg
      class="heart"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="36"
      @click="toggleFavourite"
    >
      <path
        :fill="isFavourite ? 'red' : '#ddd'"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  </div>
</template>

<script setup>
import { defineProps, ref, watchEffect } from "vue";
import { useCurrencyStore } from "../store/index";

const props = defineProps({
  currency: {
    type: Object,
    required: true,
  },
});

const store = useCurrencyStore();
const isFavourite = ref(store.favourites.includes(props.currency));

watchEffect(() => {
  isFavourite.value = store.favourites.some(
    (fav) => fav.title === props.currency.title
  );
  console.log(isFavourite.value);
});

function toggleFavourite() {
  if (isFavourite.value) {
    store.removeFromFavourites(props.currency);
  } else {
    store.addToFavourites(props.currency);
  }
}
</script>

<style scoped>
.item {
  padding: 20px 40px;
  border-radius: 20px;
  width: 100%;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.code {
  font-size: 20px;
  font-weight: 600;
}
.desc {
  font-size: 24px;
  font-weight: 700;
}
.right {
  display: flex;
  gap: 20px;
}
.heart {
  cursor: pointer;
}
</style>
