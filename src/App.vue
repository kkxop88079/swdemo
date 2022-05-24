<script setup>
import { provide, ref } from 'vue'

import viewHeader from './components/view-header.vue'
import viewBanner from './components/view-banner/index.vue'
import viewReserve from './components/view-reserve.vue'
import viewAward from './components/view-award.vue'
import viewPrecautions from './components/view-precautions.vue'
import viewFooter from './components/view-footer/index.vue'
import viewNumber from './components/view-number/index.vue'

import { getMemberInfo } from './api'

const info = ref({})
provide('info', info)

const init = async () => {
  try {
    const res = await getMemberInfo()
    info.value = res.Data
  } catch (err) {
    console.log('err', err)
  }
}
provide('init', init)

init()

init

</script>

<template>
  <router-view />
</template>
