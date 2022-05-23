<template class="">
  <div class="overflow-x-hidden">info 2</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
</script>