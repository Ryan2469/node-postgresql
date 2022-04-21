<template>
	<div align="center">
		<div class="AddWrap">
			<form>
				<table class="tbAdd">
          <colgroup>
            <col width="15%" />
            <col width="*" />
          </colgroup>
          <tr align="center">
            <th style="color:#39445C">제목</th>
            <td><input type="text" v-model="subject" ref="subject" /></td>
          </tr>
          <tr align="center">
            <th style="color:#39445C">내용</th>
            <td><textarea v-model="cont" ref="cont"></textarea></td>
          </tr>
				</table>
			</form>
		</div>

		<div>
			<Toolbar>
				<ToolbarItem>
					<ButtonGroup>
					<Button :icon="'bold'" :title="'Bold'" :togglable="true" />
					<Button :icon="'italic'" :title="'Italic'" :togglable="true" />
					<Button :icon="'underline'" :title="'Underline'" :togglable="true" />
					</ButtonGroup>
				</ToolbarItem>
			<ToolbarItem>
			<ButtonGroup>
				<Button
					:icon="'align-left'"
					:title="'Align Left'"
					:togglable="true"
				/>
				<Button
					:icon="'align-center'"
					:title="'Align Center'"
					:togglable="true"
				/>
				<Button
					:icon="'align-right'"
					:title="'Align Right'"
					:togglable="true"
				/>
				<Button
					:icon="'align-justify'"
					:title="'Align Justify'"
					:togglable="true"
				/>
			</ButtonGroup>
			</ToolbarItem>
			<ToolbarSpacer />
			<ToolbarItem>
				<SplitButton :text="'Insert'" :items="splitItems"> </SplitButton>
			</ToolbarItem>
			<ToolbarSeparator />
			<ToolbarItem>
				<Button :icon="'cut'" :title="'Cut'"> Cut </Button>
			</ToolbarItem>
			<ToolbarItem>
				<Button :icon="'copy'" :title="'Copy'"> Copy </Button>
			</ToolbarItem>
			<ToolbarItem>
				<DropDownButton :text="'Paste'" :icon="'paste'" :items="ddItems">
				</DropDownButton>
			</ToolbarItem>
			</Toolbar>
		</div>
		<div align="left" style="margin:10px;">
			<span style="padding-right:10px; color:#3D76D7;">공개범위 :</span>
			<chiplist
			:rounded="'full'"
			:default-data-items="fruits"
			:selection="'multiple'">
			</chiplist>
		</div>
		<div class="btnWrap" style="margin:30px">
			<a href="/" @click="fnList" class="btn">목록</a>
			<a href="/" @click="fnAddProc" class="btnAdd btn">등록</a>
		</div>	
	</div>
</template>

<script>
import {
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  ToolbarSpacer,
  Button,
  ButtonGroup,
  DropDownButton,
  SplitButton,
} from "@progress/kendo-vue-buttons";

import { ChipList } from '@progress/kendo-vue-buttons';

const fruits = [
    {
        text: '전체공개',
        value: 'berry',
        disabled: true
    },
    {
        text: 'A회원공개',
        value: 'apple',
        disabled: true
    },
    {
        text: 'B회원공개',
        value: 'strawberry',
        disabled: true
    }
];

export default {
  components: {
		Toolbar,
		ToolbarItem,
		Button,
 		ButtonGroup,
		ToolbarSeparator,
		ToolbarSpacer,
		DropDownButton,
		SplitButton,
		'chiplist': ChipList,
    },
	data: function () {
    return {
	  fruits: fruits,
      ddItems: [
        { icon: "text", text: "Plain Text" },
        { icon: "html", text: "HTML" },
      ],
      splitItems: [
        { icon: "image", text: "Image" },
        { icon: "table", text: "Table" },
      ],
	  };
	},
	
     methods: {
    movetoboard1(){
      window.location.href='/board/1/?page=1'	// 페이지 이동시 params로 게시판 구분, query로 페이지 구분
    },
    movetoboard2(){
      window.location.href='/board/2/?page=1'
    },
    movetoboard3(){
      window.location.href='/board/3/?page=1'
    },
}};

</script>

<style scoped>
h1{color:#43b984;}
table{width:100%; border-collapse:collapse;}
.wrap{width:100%;}
.container{width:800px; margin:0 auto;}
a{text-decoration:none;}
.btn{padding:10px; background:#34445c; color:#fff;}
.tbAdd{border-top:1px solid #888;}
.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
.tbAdd td{padding:10px 10px; box-sizing:border-box;}
.tbAdd td input{width:95%; min-height:30px; box-sizing:border-box; padding:0 10px;}
.tbAdd td textarea{width:95%; min-height:300px; padding:10px; box-sizing:border-box;}
.tbAdd th 
.btnWrap{text-align:center; margin:20px 0 0 0;}
.btnWrap a{margin:0 10px;}
.btnAdd {background:#3D76D7;}
.btnDelete{background:#f00;}
.tr_margin{margin:20px;}
</style>