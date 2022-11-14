<template>
  <div class="fixed-top head">
    <div class="container">
      <div class="row">
        <img src="" alt="" class="col-2">
        <ul class="nav col-8 ">
          <li class="nav-item nav flex-column justify-content-center">
            <a class="nav-link text-light" aria-current="page" href="#">商店</a>
          </li>
          <li class="nav-item nav flex-column justify-content-center">
            <a class="nav-link text-light" href="#">社群</a>
          </li>
          <li class="nav-item nav flex-column justify-content-center">
            <a class="nav-link text-light" href="#">关于</a>
          </li>
          <li class="nav-item nav flex-column justify-content-center">
            <a class="nav-link text-light" href="#">客服中心</a>
          </li>
        </ul>
        <ul class="nav col-1 offset-1">
          <li class="nav-item nav flex-column justify-content-center">
            <a class="nav-link text-light" href="#">账户</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <HelloWorld />
  <div class="text-center foot">
      <img src="" alt="">
      <p>@梁友欢/林泽铨/李西东/邬昆佑</p>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
.foot>p{
  color: #8b8b8b;
}
</style>
