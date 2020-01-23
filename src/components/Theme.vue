<template>
<div class="main-container">
<div class="lp-promotion">
  <div class="promotion" style="background-image: url(&quot;https://launchpack.co.kr/static/img/img_banner_beta.png&quot;); background-size: ; background-repeat: no-repeat; background-position-x: 50%; background-color: white; width: 100%; height: 80%;">
  </div>
  </div>

  <div class="lp-card-menu-title">
         <ul class="container flex">
            <li class="lp-menu unselect" @click="selected = 1" :class="{selected:selected == 1}">전체 테마</li>
            <li class="lp-menu unselect" @click="selected = 2" :class="{selected:selected == 2}">로컬 전화연결 테마</li>
            <li class="lp-menu unselect" @click="selected = 3" :class="{selected:selected == 3}">매장방문 예약 테마</li>
            
        </ul>
        <div v-if="selected==1">
        <Themes/>
        </div>
        <div v-if="selected==2">
        <Theme2/>
        </div>
        <div v-if="selected==3">
        <Theme3/>
        </div>

  </div>

</div>
</template>

<script>
import Themes from './Theme/Themes';
import Theme2 from './Theme/Theme2';
import Theme3 from './Theme/Theme3';

export default {
    data: function(){
        return {selected: 1}
 },

    components:{
        Themes,
        Theme2,
        Theme3
        

    }



}
</script>

<style scoped>


* {
    box-sizing: border-box;
}

div{
    display: block
}
.flex {
    display: -ms-flexbox;
    display: flex;
}

.promotion{
    margin-top:70px;
}

.lp-promotion{
    height: 320px;
    border-bottom: 2px solid #bdb9b9;
    
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;

}

.lp-card-menu-title {
    width: 100%;
    height: 49px;
    background-color: #fff;
}






.lp-menu{
    cursor: pointer;
    padding: 12px;
    color: #606060;
    border-bottom: 2px solid transparent;
}

.selected{
    color: #000;
    font-weight: 700;
    border-bottom: 3px solid #f60;
}

li{
    list-style-type:none;
}

li:hover {
  color:rgb(71, 66, 66);
  font-weight: bold;
   cursor: pointer;
}
</style>