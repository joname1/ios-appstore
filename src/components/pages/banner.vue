<template>
  <div>
    <swiper loop auto :list="banner_list" @on-index-change="banner_onIndexChange"></swiper>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
const baseList = [{
  url: 'javascript:;',
  img: "static/images/11ea70b248424710.jpg",
  title: '付费游戏免费玩第1期'
},{
  url: 'javascript:;',
  img: 'static/images/22fc9ad744b4f15af9c.jpg',
  title: '周末游品位第1期'
},{
  url: 'javascript:;',
  img: 'static/images/33dcf368373e7b48c29ddd.jpg',
  title: '生存游戏大合集'
}]


const urlList = baseList.map((item, index) => ({
  url: item.url,
  img: item.img,
  title: `${item.title}`
}))

export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  },
  ready () {
  },
  methods: {
    banner_onIndexChange (index) {
      this.banner_index = index
    }
  },
  data () {
    return {
      banner_list: urlList
    }
  }
}
</script>

<style scoped>

</style>