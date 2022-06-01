<template>
  <div class="h-auto bg-black overflow-x-hidden bg-infoBG bg-repeat-y bg-cover">
    <div class="bg-gradient-to-b from-black h-24 z-10 mb-10">
      <div class="flex w-screen items-center pt-6 mb-4">
          <div class="w-4/5">
             <router-link :to="{ name: 'Home',  }">
                <img :src="logo" class="w-12 ml-3">
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
    
    <div >
      <div class="w-4/5 m-auto h-[364px] mb-10">
        <iframe src="https://6e619f18.hugewin302.com/games/a23c6d8a" frameborder="no" class="object-cover w-full h-full border-2 border-yellow-500 m-auto"></iframe>
      </div>
    </div>
  </div>
  <div class="h-auto bg-black">
    <div class="w-4/5 m-auto h-auto py-10">
      <div class="w-full bg-slate-800 h-12 flex items-center text-slate-500 mb-4">
        <div class="flex-1 text-center">遊戲名稱{{ $route.params.username }} </div>
        <div class="flex-1 text-center text-slate-50">泰溼控</div>
      </div>
      <div class="w-full bg-slate-900 h-12 flex items-center text-slate-500 mb-4">
        <div class="flex-1 text-center">遊戲類型</div>
        <div class="flex-1 text-center text-slate-50">SLOT</div>
      </div>
      <div class="w-full bg-slate-800 h-auto flex items-center text-slate-500 mb-4 py-4">
        <div class="flex-1 text-center">支援</div>
        <div class="flex-1 text-center text-slate-50" >
          <div class="flex flex-row p-2 flex-wrap">
            <div class="" v-for="item of list_new" :key="item.id">
              <img :src="item.img" class="w-7 mx-2 my-2"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="h-screen bg-slate-500">
    <img src="../../assets/gamebanner.png" alt="">
  </div> -->
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)



</script>

<script>
import { ref } from 'vue'
const list_new = ref([
    { id: 1, img: bnd, alt: '1' },
    { id: 2, img: cad, alt: '2' },
    { id: 3, img: cny, alt: '3' },
    { id: 4, img: eur, alt: '4' },
    { id: 5, img: gbp, alt: '5' },
    { id: 6, img: hkd, alt: '6' },
    { id: 7, img: idr, alt: '7' },
    { id: 8, img: inr, alt: '8' },
    { id: 9, img: jpy, alt: '9' },
    { id: 10, img: khr, alt: '10' },
    { id: 11, img: krw, alt: '11' },
    { id: 12, img: lak, alt: '12' },
    { id: 13, img: mmh, alt: '13' },
    { id: 14, img: myr, alt: '14' },
    { id: 15, img: php, alt: '15' },
    { id: 16, img: sgd, alt: '16' },
    { id: 17, img: thb, alt: '17' },
    { id: 18, img: usd, alt: '18' },
    { id: 19, img: vnd, alt: '19' },
])
import logo from '../../assets/logo.png'
import bnd from './images/bnd.png'
import cad from './images/cad.png'
import cny from './images/cny.png'
import eur from './images/eur.png'
import gbp from './images/gbp.png'
import hkd from './images/hkd.png'
import idr from './images/idr.png'
import inr from './images/inr.png'
import jpy from './images/jpy.png'
import khr from './images/khr.png'
import krw from './images/krw.png'
import lak from './images/lak.png'
import mmh from './images/mmh.png'
import myr from './images/myr.png'
import php from './images/php.png'
import sgd from './images/sgd.png'
import thb from './images/thb.png'
import usd from './images/usd.png'
import vnd from './images/vnd.png'








</script>
