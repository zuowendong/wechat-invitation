<template>
	<view class="main">
		<view class="infoWrapper">
			<view class="text1">左文东 & 刘夜莲</view>
			<view class="text2">2023/07/08</view>
			<view class="text2">癸卯年五月二十一</view>
			<view class="text3">淮安市神旺大酒店</view>
			<view class="text3">江苏省淮安市清江浦区翔宇大道156号</view>
		</view>
		<!-- <u-swiper height="100%" :list="list1"></u-swiper> -->
	</view>
</template>

<script>
export default {
	name: "HomeView",
	data() {
		return {
			list1: [
				"https://s2.loli.net/2023/01/13/r5vYPMua1Fipynx.jpg",
				"https://cdn.uviewui.com/uview/swiper/swiper2.png",
				"https://cdn.uviewui.com/uview/swiper/swiper3.png",
			],
		};
	},
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
