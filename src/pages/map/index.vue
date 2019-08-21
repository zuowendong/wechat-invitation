<template>
    <div class="map">
        <img mode="aspectFit" class="head-img" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/images/t1.png"/>
        <map class="content" id="map" longitude="119.317711" latitude="33.24654" :markers="markers" scale="18" @tap="toNav">
        </map>
        <div class="call">
            <div class="left" @tap="linkHe">
                <img src="cloud://bertlearning-62870c.6265-bertlearning-62870c/images/he.png"/>
                <span>呼叫新郎</span>
            </div>
            <div class="right" @tap="linkShe">
                <img src="cloud://bertlearning-62870c.6265-bertlearning-62870c/images/she.png"/>
                <span>呼叫新娘</span>
            </div>
        </div>
        <img class="footer" src="cloud://bertlearning-62870c.6265-bertlearning-62870c/images/grren-flower-line.png"/>
        <p>苍狗又白云，身旁有了你，匆匆人生又有何惧</p>
    </div>
</template>

<script>
export default {
  name: 'Map',
  data () {
    return {
      markers: [{
        iconPath: '../../static/images/nav.png',
        id: 0,
        longitude: 119.317711,
        latitude: 33.24654,
        width: 50,
        height: 50
      }]
    }
  },

  methods: {
    toNav () {
      wx.openLocation({
        latitude: 33.24654,
        longitude: 119.317711,
        scale: 18
      })
    },

    linkHe () {
      wx.makePhoneCall({
        phoneNumber: '15150881616'
      })
    },

    linkShe () {
      wx.makePhoneCall({
        phoneNumber: '13218057256'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.map
    height 100%
    background #fff
    .head-img
      width 100%
      height 180rpx
      margin-bottom 50rpx
    .content
      width 690rpx
      margin-left 30rpx
      height 600rpx
      margin-bottom 30rpx
      border-radius 16rpx
    .call
      display flex
      justify-content space-around
      align-items center
      width 100%
      margin-bottom 20rpx
      .left, .right
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        image
          height 64rpx
          width 64rpx
        span
          height 50rpx
          line-height 50rpx
          font-size 24rpx
          color #6B4F4E
    .footer
      height 80rpx
      width 716rpx
      margin-left 17rpx
    p
      height: 60rpx;
      line-height: 60rpx;
      background: rgba(255,255,255,0.5);
      position: fixed;
      bottom: -14rpx;
      left: 0;
      font-size: 28rpx;
      color: #444;
      text-align: center;
      width: 100%;
      color #dddddd

</style>
