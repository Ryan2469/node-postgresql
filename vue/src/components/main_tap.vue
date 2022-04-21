<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <v-spacer></v-spacer>
      <v-app-bar-title>
        <div align="center" :style="{fontSize:'xxx-large', color:'#3D76D7'} ">게시판</div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
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
  </v-app>
</template>

<script>

import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
        'kbutton': Button
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

</style>