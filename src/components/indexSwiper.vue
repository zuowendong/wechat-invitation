<template>
    <div class="box">
        <swiper class="swiper"
            :autoplay="true"
            :circular="true"
            current=0
            :vertical="true"
        >
            <swiper-item class="item">
                <!-- 首页照片 -->
                <img mode="aspectFill" lazy-load="true" src="../../static/photo/5.jpg" class="slide-image"/>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'IndexSwiper'
}
</script>
<style lang="stylus" scoped>
.box
    position relative
    height 100%
    .swiper
        height 100%
        width 100%
        .item
            width 100%
            height 100%
            display flex
            justify-content center
            align-items: center
            .slide-image
                min-height 100%
                min-width 100%
</style>
