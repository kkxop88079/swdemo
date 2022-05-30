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
    import img01 from '../../assets/01.png'
    import img02 from '../../assets/02.png'
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
    
</script>
<script>

</script>