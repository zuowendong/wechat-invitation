<template>
	<view class="messageMain">
		<view class="formContent">
			<u-form labelPosition="top" :model="formData" :rules="rules">
				<u-form-item label="留言" prop="message" borderBottom>
					<u--textarea placeholder="在这里输入你的祝福" v-model="formData.message"></u--textarea>
				</u-form-item>
			</u-form>
			<u-button type="primary" text="提交" customStyle="margin-top: 50rpx" @click="handleSubmit"></u-button>
			<u-button type="error" text="重置" customStyle="margin-top: 10rpx" @click="handleReset"></u-button>
		</view>

		<view class="listWrapper">
			<view v-for="(item, index) in msgList" :key="index" class="listItem">
				<u-avatar
					slot="icon"
					shape="square"
					size="35"
					:src="item.url"
					customStyle="margin: -3px 10px -3px 0"
				></u-avatar>
				<view class="text">{{ item.msg }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "MessageView",
	data() {
		return {
			formData: {},
			rules: {},
			msgList: [
				{
					url: "https://cdn.uviewui.com/uview/album/1.jpg",
					msg: "111111111111111111111111111111111111111111111111111111111111111111111111111111",
				},
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "222222" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "333333" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "444444" },
			],
		};
	},
	methods: {
		handleSubmit() {},
		handleReset() {},
	},
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
