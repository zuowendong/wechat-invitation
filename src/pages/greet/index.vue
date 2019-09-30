<template>
    <div class="greet">
        <image class="head" src="https://666f-forguo-0979a1-1251886253.tcb.qcloud.la/wxapp/wedding/static/imgs/heart-animation.gif"/>
        <scroll-view scroll-y class="box">
            <!-- 发送祝福用户列表 -->
            <div class="item" v-for="(item, index) in userList" :key="index">
                <!-- 用户头像 -->
                <image :src="item.user.avatarUrl"/>
                <!-- 用户名 -->
                <p>{{item.user.nickName}}</p>
            </div>
        </scroll-view>
        <p class="count">已收到{{userList.length}}位好友送来的祝福</p>
        <div class="bottom">
            <button class="left" lang="zh_CN" open-type="getUserInfo" @getuserinfo="sendGreet">送上祝福</button>
            <button class="right" open-type="share">分享喜悦</button>
        </div>
    </div>
</template>

<script>
import tools from 'common/js/h_tools'
import cloud from '@/service/cloud'
export default {
  name: 'Greet',
  data () {
    return {
      userList: [],
      openId: '',
      userInfo: ''
    }
  },
  onLoad () {
    const that = this
    that.getUserList()
  },
  methods: {
    // 发送祝福按钮事件
    sendGreet (e) {
      const that = this
      if (e.target.errMsg === 'getUserInfo:ok') {
        that.userInfo = e.target.userInfo
        that.getOpenId()
      }
    },

    // 添加用户信息
    addUser () {
      const that = this
      const db = wx.cloud.database()
      const user = db.collection('usergreet')
      user.add({
        data: {
          user: that.userInfo
        }
      }).then(res => {
        let user = {
          user: that.userInfo
        }
        that.userList = that.userList.concat(user)
        tools.showToast('感谢您的祝福~')
      })
    },

    // 获取祝福用户的openID
    getOpenId () {
      const that = this
      wx.cloud.callFunction({
        name: 'login',
        data: {}
      }).then(res => {
        that.openId = res.result.event.userInfo.openId
        that.getIsExist()
      })
    },

    // 已发送过祝福的用户避免二次记录祝福信息
    getIsExist () {
      const that = this
      const db = wx.cloud.database()
      const user = db.collection('usergreet')
      user.where({
        _openid: that.openId
      }).get().then(res => {
        if (res.data.length === 0) {
          that.addUser()
        } else {
          tools.showToast('您的祝福已经收到啦~')
        }
      })
    },

    // 获取云数据库中存储的用户列表
    getUserList () {
      const that = this
      wx.showNavigationBarLoading()
      cloud.get('usergreet').then((res) => {
        if (res.errMsg === 'collection.get:ok') {
          that.userList = res.data
          wx.hideNavigationBarLoading()
        }
      })
    }
  },

  // 分享按钮事件
  onShareAppMessage (res) {
    return {
      title: '自定义分享内容',
      path: '/pages/index/main',
      imageUrl: 'https://img-blog.csdnimg.cn/20190918091410914.gif'
    }
  }
}
</script>

<style lang="stylus" scoped>
.greet
    width 100%
    height 100%
    .head
        height 150rpx
        width 200rpx
        margin 0 auto
    .box
        height 700rpx
        width 690rpx
        margin-left 30rpx
        border-radius 16rpx
        box-shadow 0 0 10rpx rgba(0, 0, 0, 0.1)
        display flex
        justify-content flex-start
        align-items flex-start
        flex-wrap wrap
        .item
            width 120rpx
            display flex
            flex-direction column
            justify-content flex-start
            align-items center
            padding 25rpx
            float left
            image
                width 100rpx
                height 100rpx
                border-radius 50rpx
            p
                height 50rpx
                line-height 50rpx
                font-size 24rpx
                color #444
                width 100rpx
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                text-align center
    .bottom
        height 140rpx
        position fixed
        bottom 0
        left 0
        background rgba(255, 255, 255, 0.5)
        display flex
        justify-content center
        align-items center
        width 100%
        .left
            height 80rpx
            line-height 80rpx
            font-size 28rpx
            width 300rpx
            color #fff
            background #E62C6B
            margin-right 20rpx
        .right
            height 80rpx
            line-height 80rpx
            font-size 28rpx
            color #fff
            width 300rpx
            background #2CA6F9
    .count
        height 60rpx
        line-height 60rpx
        background rgba(255, 255, 255, 0.5)
        position fixed
        bottom 140rpx
        left 0
        font-size 28rpx
        color #444
        text-align center
        width 100%
</style>
