<template>
	<div align="center">
		<h1 style="color:#3D76D7">게시판 등록</h1>
			<v-main>
				<v-container>
					<div align="center">
						<kbutton :togglable="'primary'" style="margin:30px">전체</kbutton>
						<kbutton :togglable="'primary'" style="margin:30px">문의사항</kbutton>
						<kbutton :togglable="'primary'" style="margin:30px">공지사항</kbutton>
						<kbutton :togglable="'primary'" style="margin:30px">자료실</kbutton>
						<kbutton :togglable="'primary'" style="margin:30px">커뮤니티</kbutton>
					</div>
				</v-container>
			</v-main>
    </div>       
</template>

<script>

import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
        'kbutton': Button
    },
     methods: {
}};

</script>

<style scoped>

</style>