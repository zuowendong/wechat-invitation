<template>
	<view class="messageMain">
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

		<view class="msgBox">
			<u-popup :show="show" :round="6" mode="bottom" @close="close" @open="open">
				<view class="formContent">
					<u-form labelPosition="top" :model="formData">
						<u-form-item>
							<u--textarea v-model="formData.message" placeholder="在这里输入你的祝福"></u--textarea>
						</u-form-item>
					</u-form>
					<u-button type="primary" text="提交" customStyle="margin-top: 50rpx" @click="handleSubmit"></u-button>
					<u-button type="error" text="重置" customStyle="margin-top: 10rpx" @click="handleReset"></u-button>
				</view>
			</u-popup>
			<u-button type="primary" text="留言" @click="show = true"></u-button>
		</view>

		<u-notify ref="uNotify"></u-notify>
	</view>
</template>

<script>
export default {
	name: "MessageView",
	data() {
		return {
			formData: { message: "" },
			msgList: [
				{
					url: "https://cdn.uviewui.com/uview/album/1.jpg",
					msg: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
				},
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
				{
					url: "https://cdn.uviewui.com/uview/album/1.jpg",
					msg: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
				},
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
				{ url: "https://cdn.uviewui.com/uview/album/1.jpg", msg: "测试" },
			],
			show: false,
		};
	},
	methods: {
		handleSubmit() {
			if (!this.formData.message) {
				this.$refs.uNotify.show({
					message: "请输入留言",
					type: "warning",
					color: "#ffffff",
					bgColor: "",
					fontSize: 15,
					duration: 3000,
					safeAreaInsetTop: false,
				});
				return;
			}
			this.msgList.push({
				url: "https://cdn.uviewui.com/uview/album/1.jpg",
				msg: this.formData.message,
			});
			this.show = false;
			this.handleReset();
		},
		handleReset() {
			this.formData.message = "";
		},

		open() {
			// console.log('open');
		},
		close() {
			this.show = false;
			this.handleReset();
		},
	},
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
