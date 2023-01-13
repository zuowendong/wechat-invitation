<template>
	<view class="main">
		<view class="pageContainer">
			<HomeView v-if="currentTab === 'home'" />
			<AddressView v-if="currentTab === 'address'" />
			<MessageView v-if="currentTab === 'message'" />
		</view>
		<u-tabbar
			:value="currentTab"
			@change="(name) => (currentTab = name)"
			:fixed="true"
			:placeholder="true"
			:safeAreaInsetBottom="true"
			activeColor="#007AFF"
			inactiveColor="#999"
			:border="false"
		>
			<u-tabbar-item name="home" text="主页">
				<image class="tabIcon" slot="active-icon" src="../../static/assets/images/home_active.png"></image>
				<image class="tabIcon" slot="inactive-icon" src="../../static/assets/images/home.png"></image>
			</u-tabbar-item>
			<u-tabbar-item name="address" text="地址">
				<image class="tabIcon" slot="active-icon" src="../../static/assets/images/address_active.png"></image>
				<image class="tabIcon" slot="inactive-icon" src="../../static/assets/images/address.png"></image>
			</u-tabbar-item>
			<u-tabbar-item name="message" text="留言">
				<image class="tabIcon" slot="active-icon" src="../../static/assets/images/message_active.png"></image>
				<image class="tabIcon" slot="inactive-icon" src="../../static/assets/images/message.png"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
import HomeView from "../home/index.vue";
import AddressView from "../address/index.vue";
import MessageView from "../message/index.vue";

export default {
	name: "MainView",
	components: {
		HomeView,
		AddressView,
		MessageView,
	},
	data() {
		return {
			currentTab: "home",
		};
	},
	async mounted() {},
	created() {
		this.playAudio();
	},
	methods: {
		playAudio() {
			const innerAudioContext = uni.createInnerAudioContext();
			innerAudioContext.autoplay = true;
			innerAudioContext.loop = true;
			innerAudioContext.src = "http://47.106.9.107/static/blindfaith.mp3";
			innerAudioContext.onPlay(() => {
				console.log("开始播放");
			});
			innerAudioContext.onError((res) => {
				console.log(res.errMsg);
				console.log(res.errCode);
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.main {
	height: 100vh;
	width: 100vw;
	background-color: #f5f8fe;
}
.pageContainer {
	width: 100%;
	height: calc(100% - 84px);
}
.tabIcon {
	width: 50rpx;
	height: 50rpx;
}
</style>
