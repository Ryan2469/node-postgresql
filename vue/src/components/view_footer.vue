<template>
	<div align="center">
		<div class="AddWrap">
			<form>
				<table class="tbAdd">
          <colgroup>
            <col width="15%" />
            <col width="*" />
          </colgroup>
		  <text class="text">댓글 0</text>
          <tr align="center">
            <td><textarea v-model="cont" ref="cont" placeholder="아산정신병원
041-548-9851"></textarea></td>
          </tr>
				</table>
			</form>
		</div>
		<div class="btnWrap" align="right" >
			<a href="/onorder_view" @click="fnAddProc" class="btnAdd btn">댓글달기</a>
		</div>	
	</div>
</template>

<script>

</script>

<style scoped>
table{width:97%; border-collapse:collapse;}
a{text-decoration:none;}
.btn{padding:10px; background:#34445c; color:#fff;}
.tbAdd{border-top:1px solid #F8F8F9;}
.tbAdd td{padding:10px 10px; box-sizing:border-box;}
.tbAdd td textarea{width:95%; min-height:150px; padding:10px; box-sizing:border-box; border-color:#E7E7E7;}
.tbAdd th 
.btnWrap{text-align:center; margin:20px 0 0 0;}
.btnWrap a{margin:0px 80px}
.btnAdd {background:#3D76D7;}
.text{margin:0 60px;}
</style>


