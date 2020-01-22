<template>
<div class="header-container flex">
    <div class="container flex header">
        <div id="logo">
           <img src="https://launchpack.co.kr/static/img/logo@3x.fb49d82.png" alt="" class="unselect">
        </div>

        <ul class="flex table">
            <router-link to="/theme" class="table-cell" activeClass="active" tag="li">서비스안내</router-link>
            <router-link to="/theme" class="table-cell" activeClass="active" tag="li">테마</router-link>
            <router-link to="/theme" class="table-cell" activeClass="active" tag="li">맞춤 제작 신청</router-link>
            <router-link to="/theme" class="table-cell" activeClass="active" tag="li">고객센터</router-link>
            <router-link to="/theme" class="table-cell" activeClass="active" tag="li">로그인</router-link>
                   
       
            
        </ul>
    </div>
</div>


</template>

<script>


</script>

<style>

body {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
}

.header-container{
        background-color: #393e46;
    -ms-flex-align: center;
    align-items: center;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    -ms-flex-pack: center;
    justify-content: center;

}

.flex{
    display: -ms-flexbox;
    display: flex;
}
.header {
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: -ms-flexbox;
    display: flex;
    top:0;
    left:0;
    overflow: hidden;
    width:100%;
}
.container{
    
}

.header #logo {
    width: 160px;
    height: 100%;
  

}

.header #logo img {
    
    width: 145px;
    margin-left: 10px;
    height: 34px;
    margin-top: 17px;
}

.table{
    display: inline-block;
    width: 100%;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.table-cell {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    height: 65px;
       
}


li{
  
  color:rgb(195, 196, 199);
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

li:hover {
  color:white;
   cursor: pointer;
}
a:active {
     font-weight: bold;
}
</style>