<template>
  <div style="margin:5px;">
    <div class="tbAdd">
      <colgroup>
          <col width="10%" />
          <col width="*" />
      </colgroup>
      <tr align="center">
          <td>
            <input type="text" v-model="subject" ref="subject" placeholder="제목을 입력해주세요" />
          </td>
      </tr>
      <div>
            <dropdownlist
              :style="{ width: '100%' }" 
              :data-items='sports'
              :default-item="'공지사항'"
            >
            </dropdownlist>
          </div>
    </div>
    <Editor
      :tools="tools"
      :content-style="{
        height: '600px',
      }"
      :default-content="content"
    />
    <div>
      <input style="border"
        ref="imageUploader"
        type="file"
        @change="uploadImageFile($event.target)"
      >
      <!-- <form method="post" enctype="multipart/form-data">
		    <input type="file" name="upload[]" multiple>
	    </form> -->
    </div>
    <div align="left" style="margin:10px;">
			<span style="padding-right:10px; color:#3D76D7;">공개범위 :</span>
			<chiplist
			:rounded="'full'"
			:default-data-items="fruits"
			:selection="'multiple'">
			</chiplist>
  	</div>
	  <div class="btnWrap" style="margin:30px" align="center">
			<a href="/" @click="fnList" class="btn">목록</a>
			<a href="/" @click="fnAddProc" class="btnAdd btn">등록</a>
	  </div>	
	</div>
</template>

<script>
import { Editor } from "@progress/kendo-vue-editor";
import content from "./content-overview";

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

import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    Editor,
    'chiplist': ChipList,
    'dropdownlist': DropDownList,
  },
  data() {
    return {
      fruits: fruits,
      tools: [
        ["Bold", "Italic", "Underline", "Strikethrough"],
        ["Subscript", "Superscript"],
        ["AlignLeft", "AlignCenter", "AlignRight", "AlignJustify"],
        ["Indent", "Outdent"],
        ["OrderedList", "UnorderedList"],
        "FontSize",
        "FontName",
        "FormatBlock",
        ["Undo", "Redo"],
        ["Link", "Unlink", "InsertImage", "ViewHtml"],
        ["InsertTable"],
        ["AddRowBefore", "AddRowAfter", "AddColumnBefore", "AddColumnAfter"],
        ["DeleteRow", "DeleteColumn", "DeleteTable"],
        ["MergeCells", "SplitCell"],
      ],
      content: content,

      sports: [ '문의사항', '게시판'],
    };
  },
  methods: {
    imageDelete1() { 
        this.clearImage() 
     }
  }
};
</script>

<style scoped>
.btn{padding:10px; background:#34445c; color:#fff;}
.btnWrap{text-align:center; margin:20px 0 0 0;}
.btnWrap a{margin:0 10px;}
.btnAdd {background:#3D76D7;}
.tbAdd{border-top:1px solid #DEDDDD;}
.tbAdd td{border-bottom:1px solid #DEDDDD; padding:5px 0;}
.tbAdd td{padding:10px 10px; box-sizing:border-box;}
.tbAdd td input{width:95%; min-height:30px; padding:0 10px; border:none; background-color:#F8F8F9;}
.tbAdd td textarea{width:95%; min-height:500px; padding:10px; box-sizing:border-box; border-color:#E7E7E7;}
</style>