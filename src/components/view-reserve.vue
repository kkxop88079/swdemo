<script setup>
import { ref } from 'vue'

const list = ref([

])
</script>

<template lang="pug">
.reserve__wrap
  .reserve__container
    .reserve__title 事前預約
    .reserve__list
      .reserve__item(
        v-for="(item, index) of list"
        :key="index"
      ) {{ item }}
</template>