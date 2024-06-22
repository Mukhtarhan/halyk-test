<template>
    <div class="item">
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="#eee" />
        </svg>
    </div>
</template>

<script setup>

defineProps({
    currency: {
        type: Object,
        default: () => { }
    }
})

</script>

<style scoped>
.item {
    padding: 20px 40px;
    border-radius: 20px;
    width: 45%;
    background-color: aliceblue;
}
</style>