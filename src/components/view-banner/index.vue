<template>
<div class=" overflow-hidden">
  <div class="h-auto pt-6 pb-6 bg-black">
    <div class="w-full bg-black h-auto">
      <!----->
    <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">最新上架測試連結</div>
        <swiper 
            :slidesPerView="4"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            class="mySwiper w-full h-auto"
        >
            <swiper-slide v-for="item of list_new" :key="item.id">
              <router-link :to="{ name: 'Gameinfo', params: { id: item.id } }">
                <img :src="item.url" :alt="item.alt">
              </router-link>
            </swiper-slide>

        </swiper>
      </div>


      <!------>
      <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">最新上架</div>
        <swiper 
            :slidesPerView="4"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            class="mySwiper w-full h-auto"
        >
            <swiper-slide><img src="../../assets/01.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/02.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/03.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/04.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/05.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/06.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/07.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/08.png" alt=""></swiper-slide>
        </swiper>
      </div>

      <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">特色遊戲</div>
        <swiper 
            :slidesPerView="4"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            class="mySwiper w-full h-auto"
        >
            <swiper-slide><img src="../../assets/08.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/07.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/06.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/05.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/04.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/03.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/02.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/01.png" alt=""></swiper-slide>
        </swiper>
      </div>

      <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">推薦遊戲</div>
        <swiper 
            :slidesPerView="3"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"

            class="mySwiper w-full h-auto"
        >
            <swiper-slide><img src="../../assets/s-1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/s-2.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/s-3.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/s-4.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/s-5.png" alt=""></swiper-slide>
        </swiper>
      </div>

      <div class="ml-2 font-medium mb-6">
        <div class="text-white mb-2">熱門排行</div>
        <swiper 
            :slidesPerView="3"
            :spaceBetween="6"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"

            class="mySwiper w-full h-auto"
        >
            <swiper-slide><img src="../../assets/r-1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/r-2.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/r-3.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/r-4.png" alt=""></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</div>
  

</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  

  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
  };
</script>

<script setup>
    import { ref } from 'vue'
    const list_new = ref([
        { id: 1, url: './assets/01.png', alt: '1'},
        { id: 2, url: './assets/02.png', alt: '2' },
        { id: 3, url: './assets/03.png', alt: '3' },
        { id: 4, url: './assets/04.png', alt: '4' },
        { id: 5, url: './assets/05.png', alt: '5' },
        { id: 6, url: './assets/06.png', alt: '6' },
        { id: 7, url: './assets/07.png', alt: '7' },
        { id: 8, url: './assets/08.png', alt: '8' },
    ])
</script>