<template>
  <div>
      <ViewHeader></viewHeader>
      <ViewBanner></ViewBanner>
      <ViewFooter></ViewFooter>
  </div>
</template>

<script>
import ViewHeader from './view-header.vue';
import ViewBanner from './view-banner/index.vue';
import ViewFooter from './view-footer/index.vue';
export default {
    components: { ViewHeader, ViewBanner, ViewFooter },
}
</script>

