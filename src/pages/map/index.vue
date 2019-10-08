<template>
    <div class="map">
        <img mode="aspectFit" class="head-img" src="../../../static/images/t1.png"/>
        <!-- 地图中心点位置 -->
        <map class="content" id="map" longitude="121.29" latitude="31.14" :markers="markers" scale="18" @tap="toNav">
        </map>
        <div class="call">
            <div class="left" @tap="linkHe">
                <img src="../../../static/images/he.png"/>
                <span>呼叫新郎</span>
            </div>
            <div class="right" @tap="linkShe">
                <img src="../../../static/images/she.png"/>
                <span>呼叫新娘</span>
            </div>
        </div>
        <img class="footer" src="../../../static/images/grren-flower-line.png"/>
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
        longitude: 121.29,
        latitude: 31.14,
        width: 50,
        height: 50
      }]
    }
  },

  methods: {
    // 地图中心位置经纬度及缩放设置
    toNav () {
      wx.openLocation({
        latitude: 31.14,
        longitude: 121.29,
        scale: 6
      })
    },

    linkHe () {
      wx.makePhoneCall({
        phoneNumber: '12345678910'
      })
    },

    linkShe () {
      wx.makePhoneCall({
        phoneNumber: '12345678910'
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
