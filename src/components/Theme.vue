<template>
<div class="main-container">
<div class="lp-promotion">
  <div class="promotion" style="background-image: url(&quot;https://launchpack.co.kr/static/img/img_banner_beta.png&quot;); background-size: ; background-repeat: no-repeat; background-position-x: 50%; background-color: white; width: 100%; height: 80%;">
  </div>
  </div>

  <div >
         <ul class="lp-card-nav">
            <li>Home</li>
            <li>News</li>
            <li>Contact</li>
            
        </ul>
        <Themes/>
  </div>

</div>
</template>

<script>
import Themes from './Theme/Themes'
export default {

    components:{
        Themes

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

.promotion{
    margin-top:70px;
}

.lp-promotion{
    height: 300px;
    border-bottom: 1px solid #e6e6e6;
    
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;

}

.lp-card-nav{
    width: 100%;
    height: 49px;
    background-color: #fff;
    
}
.selected-menu{
    color: #000;
    font-weight: 700;
    border-bottom: 3px solid #f60;
}

.lp-menu{
    cursor: pointer;
    padding: 12px;
    color: #606060;
    border-bottom: 2px solid transparent;
}

ul{
    display: inline-block;
    
     list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
 display: block;
  width: 60px;
  cursor: pointer;
    padding: 12px;
    color: #606060;
    border-bottom: 2px solid transparent;
}

li:hover {
  color:white;
   cursor: pointer;
}
</style>