import Vue from 'vue'
// import FastClick from 'fastclick'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Game from '@/components/pages/game'
import Top from '@/components/pages/top'
import Soft from '@/components/pages/soft'

Vue.use(Router)

// FastClick.attach(document.body)

export default new Router({
  routes: [
    {
    	path: '/',
    	component: Home
    },{
    	path: '/game',
    	component: Game
    },{
    	path: '/top',
    	component: Top
    },{
    	path: '/soft',
    	component: Soft
    }]
})
