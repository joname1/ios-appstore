<template>
  <div id="app">
    <router-view></router-view>
    <tabnav></tabnav>
  </div>
</template>

<script>
import tabnav from '@/components/common/tabnav'
export default {
  name: 'app',
  components: {
  	tabnav
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

</style>
