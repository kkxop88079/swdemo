<script setup>
import viewNumber from '../components/view-number/index.vue'

// Import Swiper styles


</script>


<template>
  <div>
    <div class="w-full h-[1000px] bg-backimg bg-black bg-no-repeat bg-cover relative bg-center">
      <div class="flex justify-center  absolute top-2/3 left-1/2 -translate-x-1/2 flex-wrap items-center -mt-24">
        <a href="" class="mb-6">
          <img src="../assets/m2_btn1.png" alt="">
        </a>
        <img src="../assets/m2_word01.png" alt="">
      </div>
      <!--底下三角形-->
      <div class="absolute bottom-0 bg-repeat-x bg-topimg w-full h-10"></div>
    </div>

    <div class="bg-whiteimg w-full h-[1000px] flex -mt-24">
      <div class="w-2/3 mx-auto">
        <!--swiper box-->
        <swiper
          :slides-per-view="5"
          :space-between="20"
          class="mySwiper"
          >
          <swiper-slide>
            <img src="../assets/m2_img101.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/m2_img102.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/m2_img103.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/m2_img104.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/m2_img105.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/m2_img106.png" alt="">
          </swiper-slide>
          <swiper-slide >
            <img src="../assets/m2_img101.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/m2_img102.png" alt="">
          </swiper-slide>
          <swiper-slide >
            <img src="../assets/m2_img103.png" alt="">
          </swiper-slide>
        </swiper>
        <!--衝刺進度-->
        <div class="flex justify-center pt-10 flex-col items-center">
          <!--圖片-->
          <div class="mb-8">
            <img src="../assets/m2_word02.png" alt="" >
          </div>
          <!--數字-->
          <viewNumber></viewNumber>
          <!--欄位區域-->
          <div class="mt-10 text-center">
            <form class="w-full max-w-lg">
              <div class="mb-2">只要輸入您的手機號碼就可以輕輕鬆鬆預約！</div>
              <div class="flex flex-wrap -mx-3 mb-6 justify-between">
                <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>台灣+886</option>
                      <option>台灣+886</option>
                      <option>台灣+886</option>
                    </select>
                </div>
                <div class="w-full md:w-3/5 px-3">
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <!--欄位文字-->
                  <div class="mb-2">有邀請碼嗎？（限定GPG新會員輸入）</div>
                  <!--欄位區域-->
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
                  <!--欄位文字-->
                  <div class="flex items-start mb-6">
                    <div class="flex items-center h-5 ">
                      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-full bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">同意【隱私權宣告】及個人資料蒐集使用及接收獎勵簡訊</label>
                  </div>
                </div>
              </div>
            </form>
            <div class="mb-8">
               <img src="../assets/m2_btn2.png" alt=""  class="w-2/3 m-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black w-full h-52 -mt-24 ">
      <div class="bg-repeat-x bg-bottomimg w-full h-20 absolute"></div>
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
