<template>
  <div class="fixed-top head" v-if="!(path==='/'||path==='/error')">
    <div class="container">
      <div class="row">
        <div class="col-1  nav flex-column justify-content-center"><img src="./img/logo2.png"></div>
        <ul class="nav col-8  offset-1">
          <li class="nav-item nav flex-column justify-content-center">
            <router-link class="nav-link text-light" aria-current="page" to="/home">首页</router-link>
          </li>
          <li class="nav-item nav flex-column justify-content-center">
            <router-link class="nav-link text-light" to="/comment">社群</router-link>
          </li>
          <li class="nav-item nav flex-column justify-content-center">
            <router-link class="nav-link text-light" to="/error">关于</router-link>
          </li>
          <li class="nav-item nav flex-column justify-content-center">
            <router-link class="nav-link text-light" to="/error">客服中心</router-link>
          </li>
        </ul>
        <ul class="nav col-1 offset-1">
          <li class="nav-item nav flex-column justify-content-center">
            <router-link class="nav-link text-light" to="/overview">账户</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
  <div class="text-center foot"  v-if="!(path==='/'||path==='/error')">
      <img src="" alt="">
      <p>@梁友欢/林泽铨/李西东/邬昆佑</p>
    </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      path:'',
    }
  },
  mounted(){
    this.path = this.$route.path
  },
  watch:{
    $route(to){
      this.path = to.path
    }
  }
  
}
</script>

<style>

.head {
  background-color: rgb(37, 42, 62, 0.9);
  height: 80px;
  margin: 15px auto;
  width: 95%;
  border-radius: 15px;

}
.nav{
  height: 80px;
}
#app {
  background-color: #171d2d;
}
.foot{
  background-color:#171717 ;
}
.foot{
  height: 100px;
}
.foot>p{
  color: #8b8b8b;
}
li>a{
  border-radius: 5px;
  height: auto;
}
li>a:hover{
  background-color: rgb(48, 58, 80,0.9);
}
.stretched-link{
  cursor:pointer;
}
</style>
