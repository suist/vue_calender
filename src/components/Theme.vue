<template>
<div class="main-container">
<div class="lp-promotion">
  <div class="promotion" style="background-image: url(&quot;https://launchpack.co.kr/static/img/img_banner_beta.png&quot;); background-size: ; background-repeat: no-repeat; background-position-x: 50%; background-color: white; width: 100%; height: 100%; position: absolute; top: 0px; left: 0px;">
  </div>
  </div>

  <div class="lp-card-nav">
      
         <ul>
            <li class="lp-menu"><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li style="float:right"><a class="active" href="#about">About</a></li>
        </ul>
      
  </div>

</div>
</template>

<script>
export default {

}
</script>

<style>


* {
    box-sizing: border-box;
}

div{
    display: block
}

.lp-promotion{
    height: 250px;
    border-bottom: 1px solid #e6e6e6;
    overflow: hidden;
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

.lp-menu{
    cursor: pointer;
    padding: 12px;
    color: #606060;
    border-bottom: 2px solid transparent;
}

</style>