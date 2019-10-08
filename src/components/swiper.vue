<template>
    <div class="box">
        <swiper class="swiper"
            :autoplay="true"
            :circular="true"
            current=0
            :indicator-dots="true"
        >
        <!-- 照片页列表 -->
            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="../../static/photo/1.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="../../static/photo/2.jpg" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="../../static/photo/3.jpeg" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="../../static/photo/4.jpg" class="slide-image"/>
            </swiper-item>
        </swiper>
    </div>
</template>


<script>
export default {
  name: 'GoodSwiper'
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
</style>
