import { createRouter, createWebHistory } from 'vue-router'
import Home3 from '../components/Home2.vue'
import gameinfo from '../components/view-gameinfo/index.vue'
import game10 from '../components/view-gameinfo/game10.vue'
import game11 from '../components/view-gameinfo/game11.vue'
import game12 from '../components/view-gameinfo/game12.vue'
import game13 from '../components/view-gameinfo/game13.vue'
import game14 from '../components/view-gameinfo/game14.vue'
import game15 from '../components/view-gameinfo/game15.vue'
import game16 from '../components/view-gameinfo/game16.vue'
import game17 from '../components/view-gameinfo/game17.vue'
import game18 from '../components/view-gameinfo/game18.vue'
import game19 from '../components/view-gameinfo/game19.vue'
import game20 from '../components/view-gameinfo/game20.vue'
import game21 from '../components/view-gameinfo/game21.vue'
import game22 from '../components/view-gameinfo/game22.vue'
import game23 from '../components/view-gameinfo/game23.vue'
import game24 from '../components/view-gameinfo/game24.vue'
import game25 from '../components/view-gameinfo/game25.vue'
import game26 from '../components/view-gameinfo/game26.vue'
import game27 from '../components/view-gameinfo/game27.vue'
import game28 from '../components/view-gameinfo/game28.vue'
import game29 from '../components/view-gameinfo/game29.vue'
import game30 from '../components/view-gameinfo/game30.vue'
import game31 from '../components/view-gameinfo/game31.vue'
import game32 from '../components/view-gameinfo/game32.vue'
import game33 from '../components/view-gameinfo/game33.vue'
import game34 from '../components/view-gameinfo/game34.vue'
import game35 from '../components/view-gameinfo/game35.vue'
import game36 from '../components/view-gameinfo/game36.vue'
import game37 from '../components/view-gameinfo/game37.vue'
import game38 from '../components/view-gameinfo/game38.vue'
import game39 from '../components/view-gameinfo/game39.vue'
import game40 from '../components/view-gameinfo/game40.vue'
import game41 from '../components/view-gameinfo/game41.vue'
import game42 from '../components/view-gameinfo/game42.vue'
import game43 from '../components/view-gameinfo/game43.vue'
import game44 from '../components/view-gameinfo/game44.vue'
import game45 from '../components/view-gameinfo/game45.vue'
import game46 from '../components/view-gameinfo/game46.vue'
import game47 from '../components/view-gameinfo/game47.vue'
import game48 from '../components/view-gameinfo/game48.vue'
import game49 from '../components/view-gameinfo/game49.vue'


const routes = [
    { path: '/gameinfo/',
    // path: '/gameinfo/:id',
      name: 'Gameinfo' ,
      component: gameinfo,
    //   component: () => import('../components/view-gameinfo/index.vue') ,
    },
    {
        path:'/',
        name: 'Home',
        component: Home3,
    },
    //遊戲詳情
    { path: '/game10/',
      name: 'Game10' ,
      component: game10,
    },
    { path: '/game11/',
      name: 'Game11' ,
      component: game11,
    },
    { path: '/game12/',
      name: 'Game12' ,
      component: game12,
    },
    { path: '/game13/',
      name: 'Game13' ,
      component: game13,
    },
    { path: '/game14/',
      name: 'Game14' ,
      component: game14,
    },
    { path: '/game15/',
      name: 'Game15' ,
      component: game15,
    },
    { path: '/game16/',
      name: 'Game16' ,
      component: game16,
    },
    { path: '/game17/',
      name: 'Game17' ,
      component: game17,
    },
    { path: '/game18/',
      name: 'Game18' ,
      component: game18,
    },
    { path: '/game19/',
      name: 'Game19' ,
      component: game19,
    },
    { path: '/game20/',
      name: 'Game20' ,
      component: game20,
    },
    { path: '/game21/',
      name: 'Game21' ,
      component: game21,
    },
    { path: '/game22/',
      name: 'Game22' ,
      component: game22,
    },
    { path: '/game23/',
      name: 'Game23' ,
      component: game23,
    },
    { path: '/game24/',
      name: 'Game24' ,
      component: game24,
    },
    { path: '/game25/',
      name: 'Game25' ,
      component: game25,
    },
    { path: '/game26/',
      name: 'Game26' ,
      component: game26,
    },
    { path: '/game27/',
      name: 'Game27' ,
      component: game27,
    },
    { path: '/game28/',
      name: 'Game28' ,
      component: game28,
    },
    { path: '/game29/',
      name: 'Game29' ,
      component: game29,
    },
    { path: '/game30/',
      name: 'Game30' ,
      component: game30,
    },
    { path: '/game31/',
      name: 'Game31' ,
      component: game31,
    },
    { path: '/game32/',
    name: 'Game32' ,
    component: game32,
    },
    { path: '/game33/',
    name: 'Game33' ,
    component: game33,
    },
    { path: '/game34/',
      name: 'Game34' ,
      component: game34,
    },
    { path: '/game35/',
    name: 'Game35' ,
    component: game35,
    },
    { path: '/game36/',
    name: 'Game36' ,
    component: game36,
    },
    { path: '/game37/',
    name: 'Game37' ,
    component: game37,
    },
    { path: '/game38/',
    name: 'Game38' ,
    component: game38,
    },
    // 捕魚機
    { path: '/game39/',
    name: 'Game39' ,
    component: game39,
    },
    { path: '/game40/',
    name: 'Game40' ,
    component: game40,
    },
    { path: '/game41/',
    name: 'Game41' ,
    component: game41,
    },
    { path: '/game42/',
    name: 'Game42' ,
    component: game42,
    },
    { path: '/game43/',
    name: 'Game43' ,
    component: game43,
    },
    { path: '/game44/',
    name: 'Game44' ,
    component: game44,
    },
    // 排行榜
    { path: '/game45/',
    name: 'Game45' ,
    component: game45,
    },
    { path: '/game46/',
    name: 'Game46' ,
    component: game46,
    },
    { path: '/game47/',
    name: 'Game47' ,
    component: game47,
    },
    { path: '/game48/',
    name: 'Game48' ,
    component: game48,
    },
    { path: '/game49/',
    name: 'Game49' ,
    component: game49,
    },

]




export default createRouter({
    history: createWebHistory('/demo/'), 
    // buil加上 /跟目錄'/demo/'
    routes,
})