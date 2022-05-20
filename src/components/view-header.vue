<script setup>
import viewNumber from '../components/view-number/index.vue'

// Import Swiper styles


</script>


<template>
  <div class=" overflow-hidden">
    <div class="h-[70vh] relative">
        <div class="absolute bg-gradient-to-b from-black h-24 z-10">
            <div class="flex w-screen items-center mt-6 mb-4">
                <div class="w-4/5">
                    <img src="../assets/logo.png" alt="" class="w-12 ml-3">
                </div>
                <div class="w-1/5 flex mr-4">
               
                </div>
            </div>
            <div class="flex w-3/4 text-white justify-between m-auto font-medium">
                <div>最新上架</div>
                <div>特色遊戲</div>
                <div class="flex items-center">
                    <p class="mr-1">遊戲類別</p>
                    <img src="../assets/arrow.png" alt="" class="w-3 mr-3">
                </div>
            </div>
        </div>
        <div class="absolute bg-gradient-to-t from-black h-auto bottom-0 w-screen pl-2">
            <div class="flex w-screen items-center mt-6 mb-10 flex-col">
                <div class="w-full">
                    <h1 class="text-white md:text-xl text-5xl font-bold m-0 leading-tight mr-0 tracking-tighter">HUGEWIN88</h1>
                </div>
                <div class="flex flex-row w-full tracking-tighter">
                    <div class="text-white  text-2xl font-bold m-0 leading-none md:leading-none mr-1">RELEASE YEAR</div>
                    <div class="text-white  text-2xl font-bold m-0 leading-none md:leading-none">2022</div>
                </div>
            </div>
            <div class="flex text-white justify-center m-auto mb-6 flex-col items-center w-4/5">
                <div class="mb-4 text-lg">經典 • 3D風格 • 熱門排行</div>
                <div class="flex items-center justify-between w-full font-normal text-sm">
                    <div class="flex flex-col items-center justify-center">
                        <div><img src="../assets/add.png" alt="" class="w-5"></div>
                        <div>加入</div>
                    </div>
                    <div class="flex flex-row px-4 py-2 bg-[#D42F26] items-center rounded-md">
                        <img src="../assets/play.png" alt="" class="w-4  mr-1">
                        <div>立即遊玩</div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div><img src="../assets/info.png" alt="" class="w-6"></div>
                        <div>資訊</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <video src="../assets/background.mp4"  autoplay muted loop playsinline type="video/mp4"
            class="object-cover w-full h-[70vh] -z-10" ></video>
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
