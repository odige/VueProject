<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" :src="poster[0]" alt="">
        </div>
        <div class="carousel-item">
          <img :src="poster[1]" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img :src="poster[2]" class="d-block w-100" alt="">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container">
      <h1 class="text-light">游戏</h1>
      <div class="row">
        <div class="card col-3" v-for="item in game" :key="item" @click="to">
          <img :src="item.game" class="card-img-top" alt="">
          <div class="card-img-overlay">
            <img :src="item.text" class="card-img-top" alt="">
          </div>
          <div class="card-body">
            <h4 class="card-text text-center text-light stretched-link">{{item.name}} </h4>
            <p class="card-text type">{{item.type}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { _push } from "@/scripts/page";
export default {
  name: 'HelloWorld',
  data(){
    return{
      poster:[require("../img/poster1.png"),require("../img/poster2.png"),require("../img/poster3.png")],
      game:[{
        game:require("../img/game1.png"),
        text:require("../img/text1.png"),
        name:"《暗黑破坏神：不朽》",
        type:"动作角色扮演游戏"
      },{
        game:require("../img/game2.png"),
        text:require("../img/text2.png"),
        name:"《魔兽世界》",
        type:"大型多人在线角色扮演游戏"
      },{
        game:require("../img/game3.png"),
        text:require("../img/text3.png"),
        name:"《魔兽世界》怀旧服",
        type:"大型多人在线角色扮演游戏"
      },{
        game:require("../img/game4.png"),
        text:require("../img/text4.png"),
        name:"《守望先锋》",
        type:"团队动作游戏"
      },{
        game:require("../img/game5.png"),
        text:require("../img/text5.png"),
        name:"《炉石传说》",
        type:"策略类卡牌游戏"
      },{
        game:require("../img/game6.png"),
        text:require("../img/text6.png"),
        name:"《星际争霸：重制版》",
        type:"即时战略游戏"
      },{
        game:require("../img/game7.png"),
        text:require("../img/text7.png"),
        name:"《星际争霸II》",
        type:"即时战略游戏"
      },{
        game:require("../img/game8.png"),
        text:require("../img/text8.png"),
        name:"《暗黑破坏神III》",
        type:"动作角色扮演游戏"
      },{
        game:require("../img/game9.png"),
        text:require("../img/text9.png"),
        name:"《魔兽争霸III》",
        type:"即时战略游戏"
      },{
        game:require("../img/game10.png"),
        text:require("../img/text10.png"),
        name:"《风暴英雄》",
        type:"多人在线战术竞技游戏"
      }],
    }
  },
  methods:{
    to:()=>{
      _push(window, "game")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


h1 {
  margin: 50px;
}
h4{
  font-weight:bold
}

.type{
  color: #8697ab;
}
.card{
  padding: 0;
  background-color: #171d2d;
  border-style:none;
  width: 18rem;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 70px;
}
p{
  font-weight:bolder
}
</style>
