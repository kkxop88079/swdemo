<template>
<div class=" overflow-hidden">
  <div class="h-auto pt-6 pb-6 bg-black">
    <div class="w-full bg-black h-auto">
      <!----->
    <div class="ml-2 font-medium mb-6">
        <!-- <div class="text-white mb-2">最新上架測試連結</div> -->
          <!-- <swiper 
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

          </swiper> -->
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
            <swiper-slide>
              <router-link :to="{ name: 'Game11', }">
                <img src="../../assets/11.png" alt="魔法學園">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game12', }">
                <img src="../../assets/12.png" alt="奇門遁甲">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game13', }">
                <img src="../../assets/13.png" alt="遠古生物">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game14', }">
                <img src="../../assets/14.png" alt="加勒比奇航">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game15', }">
                <img src="../../assets/15.png" alt="巨獸金剛">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game16', }">
                <img src="../../assets/16.png" alt="掏金樂">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game17', }">
                <img src="../../assets/17.png" alt="叱咤西游">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game10', }">
                <img src="../../assets/10.png" alt="絕世神偷">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game18', }">
                <img src="../../assets/18.png" alt="神医百草传">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game19', }">
                <img src="../../assets/19.png" alt="哥布林礦坑">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game20', }">
                <img src="../../assets/20.png" alt="金福瑞獸">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game21', }">
                <img src="../../assets/21.png" alt="白蛇传">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game22', }">
                <img src="../../assets/22.png" alt="威震公堂">
              </router-link>
            </swiper-slide>
             <swiper-slide>
              <router-link :to="{ name: 'Game23', }">
                <img src="../../assets/23.png" alt="超级猴子">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game24', }">
                <img src="../../assets/24.png" alt="超级猴子">
              </router-link>
            </swiper-slide>
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
            <swiper-slide>
              <router-link :to="{ name: 'Game25', }">
                <img src="../../assets/25.png" alt="刺客密令">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game26', }">
                <img src="../../assets/26.png" alt="幸运派翠克">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game27', }">
                <img src="../../assets/27.png" alt="鱼虾蟹">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game28', }">
                <img src="../../assets/28.png" alt="古墓惊魂">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game29', }">
                <img src="../../assets/29.png" alt="EDM 迷幻">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game30', }">
                <img src="../../assets/30.png" alt="添运财神">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game31', }">
                <img src="../../assets/31.png" alt="疯狂实验室">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game32', }">
                <img src="../../assets/32.png" alt="精灵奇园">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game33', }">
                <img src="../../assets/33.png" alt="开运金狮">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game34', }">
                <img src="../../assets/34.png" alt="日轮宝殿">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game35', }">
                <img src="../../assets/35.png" alt="泰溼控">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game36', }">
                <img src="../../assets/36.png" alt="国王的秘宝">
              </router-link>
            </swiper-slide>
             <swiper-slide>
              <router-link :to="{ name: 'Game37', }">
                <img src="../../assets/37.png" alt="南极世界">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game38', }">
                <img src="../../assets/38.png" alt="斗士传奇">
              </router-link>
            </swiper-slide>
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
            <swiper-slide>
              <router-link :to="{ name: 'Game39', }">
                <img src="../../assets/s-1.png" alt="合金彈頭">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game40', }">
                <img src="../../assets/s-2.png" alt="龍王捕魚2">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game41', }">
                <img src="../../assets/s-3.png" alt="龍王捕魚">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game42', }">
                <img src="../../assets/s-4.png" alt="黃金漁場">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game43', }">
                <img src="../../assets/s-5.png" alt="多金捕魚">
              </router-link>
            </swiper-slide>
             <swiper-slide>
              <router-link :to="{ name: 'Game44', }">
                <img src="../../assets/s-6.png" alt="龙宫宝藏">
              </router-link>
            </swiper-slide>
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
            <swiper-slide>
              <router-link :to="{ name: 'Game45', }">
                <img src="../../assets/r-1.png" alt="魔豆">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game46', }">
                <img src="../../assets/r-2.png" alt="荒野大西部">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game47', }">
                <img src="../../assets/r-3.png" alt="小红帽:送餐大作战">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game48', }">
                <img src="../../assets/r-4.png" alt="大笑弥勒">
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ name: 'Game49', }">
                <img src="../../assets/r-5.png" alt="水果乐园">
              </router-link>
            </swiper-slide>
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
    import img10 from '../../assets/10.png'
    import img11 from '../../assets/11.png'
    import img12 from '../../assets/12.png'
    import img13 from '../../assets/13.png'
    import img14 from '../../assets/14.png'
    import img15 from '../../assets/15.png'
    import img16 from '../../assets/16.png'
    import img17 from '../../assets/17.png'
    import img18 from '../../assets/18.png'
    import img19 from '../../assets/19.png'
    import img20 from '../../assets/20.png'
    import img21 from '../../assets/21.png'
    import img22 from '../../assets/22.png'
    import img23 from '../../assets/23.png'
    import img24 from '../../assets/24.png'
    import img25 from '../../assets/25.png'
    import img26 from '../../assets/26.png'
    import img27 from '../../assets/27.png'
    import img28 from '../../assets/28.png'
    import img29 from '../../assets/29.png'
    import img30 from '../../assets/30.png'
    import img31 from '../../assets/31.png'
    import img32 from '../../assets/32.png'
    import img33 from '../../assets/33.png'
    import img34 from '../../assets/34.png'
    import img35 from '../../assets/35.png'
    import img36 from '../../assets/36.png'
    import img37 from '../../assets/37.png'
    import img38 from '../../assets/38.png'
    const list_new = ref([
        { id: 1, url: img11 , alt: '1'},
        { id: 2, url: img12 , alt: '2' },
        { id: 3, url: img13 , alt: '3' },
        { id: 4, url: img14 , alt: '4' },
        { id: 5, url: img15 , alt: '5' },
        { id: 6, url: img16 , alt: '6' },
        { id: 7, url: img17 , alt: '7' },
        { id: 8, url: img10 , alt: '8' },
        { id: 9, url: img18 , alt: '9' },
        { id: 9, url: img19 , alt: '9' },
        { id: 9, url: img20 , alt: '9' },
        { id: 9, url: img21 , alt: '9' },
        { id: 9, url: img22 , alt: '9' },
        { id: 9, url: img23 , alt: '9' },
        { id: 9, url: img24 , alt: '9' },
    ])
    const list_new2 = ref([
        { id: 1, url: img25 , alt: '1'},
        { id: 2, url: img26 , alt: '2' },
        { id: 3, url: img27 , alt: '3' },
        { id: 4, url: img28 , alt: '4' },
        { id: 5, url: img29 , alt: '5' },
        { id: 6, url: img30 , alt: '6' },
        { id: 7, url: img31 , alt: '7' },
        { id: 8, url: img32 , alt: '8' },
        { id: 9, url: img33 , alt: '9' },
        { id: 9, url: img34 , alt: '9' },
        { id: 9, url: img35 , alt: '9' },
        { id: 9, url: img36 , alt: '9' },
        { id: 9, url: img37 , alt: '9' },
        { id: 9, url: img38 , alt: '9' },
    ])
    
</script>
