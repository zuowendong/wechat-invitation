<template>
	<view class="addressMain">
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 100vh" :latitude="latitude" :longitude="longitude" :markers="covers"> </map>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "AddressView",
	data() {
		return {
			id: 112358,
			title: "map",
			latitude: 33.59429877878443,
			longitude: 119.04794271163944,
			covers: [
				{
					latitude: 33.59459816328205,
					longitude: 119.04829944543842,
					iconPath: "../../static/assets/images/local.png",
					width: 30,
					height: 30,
				},
			],
		};
	},
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
