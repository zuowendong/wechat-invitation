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
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/1.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/7.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/9.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/10.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/11.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/14.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/17.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/21.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/23.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/25.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/29.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/31.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/36.png" class="slide-image"/>
            </swiper-item>

            <swiper-item class="item">
                <img mode="aspectFill" lazy-load="true" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/photo/4.png" class="slide-image"/>
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
            .slide-image
                min-height 100%
                min-width 100%
</style>
