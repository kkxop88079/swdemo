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
]




export default createRouter({
    history: createWebHistory('/demo/'), 
    // buil加上 /跟目錄'/demo/'
    routes,
})