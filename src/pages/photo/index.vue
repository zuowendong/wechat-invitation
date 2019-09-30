<template>
    <!-- 图片轮播组件 -->
    <div class="photo">
        <h-swiper></h-swiper>
    </div>
</template>
<script>
import HSwiper from '../../components/swiper'
export default {
  name: 'Photo',
  components: {
    HSwiper
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
.photo
    height 100%
</style>
