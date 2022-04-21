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
            <td>
              <input type="text" v-model="subject" ref="subject" placeholder="지나가다 강동원을봤어요" />
            </td>
          </tr>
          <div class="title_below_content">
            <span style="width:50%;">
              <text>짱구</text>
              <text style="padding:5px"></text>
              <text>2022.04.20</text>
            </span>
            <span class="content_buttons" align="right">
              <button class="buttons_change">수정</button>
              <text style="padding:5px"></text>
              <button class="buttons_delete">삭제</button>
            </span>  
          </div>
          <tr class="tr_content" align="center">
            <td ><textarea v-model="cont" ref="cont" placeholder="오늘 길을걷다가엄청큰 유리창이있길래 딱봤더니 강동원이 있었습니다. 그래서 강동원이다 하고 싸인받으려고 갔는데 강동원인줄알았던 그모습이 제가 비춰진거였더군요.. 그래서 허탈하게 집으로돌아와서 거울을보는데 또강동원이 안에있습니다. 어쩌면좋을까요.."></textarea></td>
          </tr>
				</table>
			</form>
		</div>	
	</div>
</template>

<script>

</script>

<style scoped>
table{width:97%; border-collapse:collapse;}
.tbAdd{border-top:1px solid #DEDDDD;}
.tr_content{border-top:1px solid #DEDDDD; border-bottom :1px solid #DEDDDD; padding:5px 0;}
.tbAdd td{padding:10px 10px; box-sizing:border-box;}
.tbAdd td input{width:95%; min-height:45px; padding:0 10px; border:none; background-color:#F8F8F9;}
.tbAdd td textarea{width:95%; min-height:500px; padding:10px; box-sizing:border-box; border-color:#E7E7E7;}
.title_below_content{width:93%; margin:0 auto; display:flex;}
.content_buttons{width:50%;}
.buttons_change{background:#3D76D7; color:#fff;}
.buttons_delete{background:#EC162B; color:#fff;}
</style>

