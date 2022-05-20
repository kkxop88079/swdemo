<script>
export default {
  name: 'viewBanner',
}
</script>

<script setup>
import { inject, ref } from 'vue'

const info = inject('info')
const init = inject('init')
const input = ref('')
const action = () => {
  if (!input.value) return false

  console.log(input.value)

  const taeget = input.value
  localStorage.setItem('userToken', input.value)
  init()
}

</script>

<template lang="pug">
.banner__wrap
  .banner__container banner
  .info__container
    .info__title 會員資料區塊
    .info__text {{ info }}
    .info__content
      input.info__input(
        v-model="input"
        :class="tw([\
          'border',\
          'p-1',\
          'mr-3',\
          'rounded-sm',\
        ])"
      )
      button.info__button(
        :class="tw([\
          'bg-gradient-to-r',\
          'from-green-300',\
          'to-blue-500',\
          'py-1',\
          'px-3',\
          'rounded-sm',\
        ])"
        @click="action"
      ) 帶入TOKEN
</template>