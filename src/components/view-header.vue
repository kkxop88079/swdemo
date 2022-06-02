<script setup>
import { ref } from 'vue'


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
                <a href="#new"><div>最新上架</div></a>
                <a href="#feature"><div>特色遊戲</div></a>
                <div class="flex items-center">
                    <p class="mr-1">遊戲類別</p>
                    <img src="../assets/arrow.png" alt="" class="w-3 mr-3">
                </div>
            </div>
        </div>
        <div class="absolute bg-gradient-to-t from-black h-auto bottom-0 w-screen pl-2 z-10">
            <div class="flex w-screen items-center mt-6 mb-10 flex-col">
                <div class="w-full">
                    <h1 class="text-white md:text-xl text-7xl m-0 leading-none mr-0 font-anton">HUGEWIN88</h1>
                </div>
                <div class="flex flex-row w-full tracking-tighter">
                    <div class="text-white  text-4xl  m-0 leading-none md:leading-none mr-1 font-anton">RELEASE YEAR</div>
                    <div class="text-white  text-4xl  m-0 leading-none md:leading-none font-anton">2022</div>
                </div>
            </div>
            <div class="flex text-white justify-center m-auto mb-6 flex-col items-center w-4/5 z-20">
                <div class="mb-4 text-lg">經典 • 3D風格 • 熱門排行</div>
                <div class="flex items-center justify-center w-full font-normal text-sm">
                    
                    <router-link :to="{ name: 'Game15', }">
                        <div class="flex flex-row px-4 py-2 bg-[#D42F26] items-center rounded-md">
                            <img src="../assets/play.png" alt="" class="w-4  mr-1">
                            <div>立即遊玩</div>
                        </div>
                    </router-link>
                    
                </div>
            </div>
        </div>
        <div class="z-0">
            <video src="../assets/background.mp4"  autoplay muted loop playsinline type="video/mp4"
            class="object-cover w-full h-[70vh] -z-10" ></video>
        </div>
    </div>

    
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>

