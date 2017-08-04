<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/">
        <img slot="icon" src="static/images/feature.png">
        <img slot="icon-active" src="static/images/feature_focus.png">
        <span slot="label">精品推荐</span>
      </tabbar-item>
      <tabbar-item link="/top">
        <img slot="icon" src="static/images/top.png">
        <img slot="icon-active" src="static/images/top_focus.png">
        <span slot="label">排行榜</span>
      </tabbar-item>
      <tabbar-item show-dot link="/game">
        <img slot="icon" src="static/images/game.png">
        <img slot="icon-active" src="static/images/game_focus.png">
        <span slot="label">游戏</span>
      </tabbar-item>
      <tabbar-item badge="3" link="/soft">
        <img slot="icon" src="static/images/soft.png">
        <img slot="icon-active" src="static/images/soft_focus.png">
        <span slot="label">软件</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
<style scoped>
  .weui-tabbar{position: fixed;}
</style>