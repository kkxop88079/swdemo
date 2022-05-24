<template>
  <div class="h-[100vh] relative bg-black overflow-x-hidden">
    <div class="bg-infoBG bg-no-repeat bg-cover h-[650px] z-0 text-white absolute top-0 w-screen"></div>
    <div class="absolute bg-gradient-to-b from-black h-24 z-10 top-0">
      <div class="flex w-screen items-center mt-6 mb-4">
          <div class="w-4/5">
             <router-link :to="{ name: 'Home',  }">
                <img src="../../assets/logo.png" class="w-12 ml-3">
              </router-link>
              <!-- <img src="../assets/logo.png" alt="" class="w-12 ml-3"> -->
          </div>
          <div class="w-1/5 flex mr-4">
          </div>
      </div>
      <div class="flex w-3/4 text-white justify-between m-auto font-medium">
          <div>最新上架</div>
          <div>特色遊戲</div>
          <div class="flex items-center">
              <p class="mr-1">遊戲類別</p>
              <img src="../../assets/arrow.png" alt="" class="w-3 mr-3">
          </div>
      </div>
    </div>
    <div class="absolute bg-gradient-to-t from-black h-auto bottom-0 w-screen pl-2">
      
      <div class="flex text-white justify-center m-auto mb-6 flex-col items-center w-4/5">
          <div class="flex items-center w-full font-normal text-sm justify-center">
              <div class="flex flex-col items-center justify-center">
                  <div class="animate-bounce">
                    <img src="../../assets/arrow.png" alt="" class="w-5 mb-3">
                  </div>
                  <div>查看更多</div>
              </div>
          </div>
      </div>
    </div>
    
    <div class="absolute top-1/2 -translate-y-1/2">
      <div class="w-3/4 m-auto">
          <img src="../../assets/gamelogo.png" alt="">
      </div>
      <div class="w-full h-52">
        <iframe src="https://6e619f18.hugewin302.com/games/97c6d30e" frameborder="0" class="object-cover w-full h-full"></iframe>
      </div>
    </div>
  </div>
  <div class="h-screen bg-slate-500">
    <img src="../../assets/gamebanner.png" alt="">
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
</script>
