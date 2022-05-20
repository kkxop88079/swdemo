<script>
export default {
  name: 'viewFooter',
}
</script>

<script setup>
import { ref } from 'vue'

const list = ref([
  '請勿長時間連續進行遊戲，避免沉迷、影響身心健康。',
  '遊戲內皆為虛擬情節，請勿任意模仿。',
  '本遊戲情節涉及棋牌益智及娛樂， 不得利用遊戲賭博、從事違反法令或其他類似行為。',
  '亦請勿進行非法遊戲幣交易。',
])
</script>

<template lang="pug">
.footer__wrap
  .footer__container
    .footer__img
    .footer__list
      .footer__item(
        v-for="(item, index) of list"
        :key="index"
      ) {{ item }}
</template>