import Vue from 'vue'
import VueRouter from 'vue-router'
import { navigationData } from '@/data/navigation'
import Game from '@/modules/content/game/Game.vue'
import Rules from '@/modules/content/rules/Rules.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: navigationData.game.path,
    component: Game
  },
  {
    path: navigationData.rules.path,
    component: Rules
  }
]

const router = new VueRouter({
  routes
})

export default router