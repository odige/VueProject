<template>
    <div id="comment">
        <div class="container col-8">
            <div class="row commenthead">
                <h1 class="col-6">玩家评论</h1>
                <h1 class="col-6 text-end"><button type="button" class="btn btn-primary col-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        +
                    </button></h1>
            </div>
            <hr style="color: white;" />
            <div class="row">
                <div class="my-2" v-for="item, index in usercomment" :key="item" :class="col[index % 6]">
                    <div class="card box">
                        <div class="card-header">
                            {{ item.name }}&nbsp;&nbsp;{{ item.id }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ item.evaluate }}</h5>
                            <p class="card-text my-5 px-2">{{ item.comment }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-center my-5">
                    <button type="button" class="btn btn-primary col-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        评论
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- model -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-secondary">
                    <h5 class="modal-title" id="exampleModalLabel">留下你的评论</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body border-secondary">
                    <div class="row">
                        <div class="form-check col-5 offset-2 my-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="evaluateid" value="0">
                            <label class="form-check-label text-white" for="flexRadioDefault1">
                                不推荐
                            </label>
                        </div>
                        <div class="form-check col-5 my-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="evaluateid" value="1">
                            <label class="form-check-label text-white" for="flexRadioDefault2">
                                推荐
                            </label>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style="color: #5aa9d6;">你的评论</label>
                            <textarea class="form-control border-secondary" id="exampleFormControlTextarea1" rows="3" 
                            style="background-color: #14283f;color: #8c8b8a;" v-model="comment">
                            </textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-secondary">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="Submit">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComMent',
    data() {
        return {
            username: "AVA",
            userid: "#7777",
            evaluateid:null,
            comment:"",
            usercomment: [{
                name: "AkA",
                id: "#2077",
                evaluateid: 0,
                evaluate: "",
                comment: "好家伙, 这动态效果三分钟给我早餐都要吐出来"
            }, {
                name: "MYY",
                id: "#0756",
                evaluateid: 1,
                evaluate: "",
                comment: "已经玩了一个小时了，西部杀吸血鬼，打得是真爽啊"
            }, {
                name: "lila",
                id: "#2666",
                evaluateid: 1,
                evaluate: "",
                comment: "西部范海辛猎魔，DOOM的断肢血浆爆裂+融合了蒸汽朋克的大镖客再混点战神的动作，打击感不错，连招很帅，还可以多人联机，玩起来很舒服。"
            }, {
                name: "mike",
                id: "#9090",
                evaluateid: 1,
                evaluate: "",
                comment: "我不明白，为什么boss要拿列宁的形象呢，就不能整点别的?非要把列宁拉出来？"
            }, {
                name: "kiki",
                id: "#1234",
                evaluateid: 0,
                evaluate: "",
                comment: "不推荐想联网游玩的伙伴，此游戏联机不能保存进度，陪队友纯白打，这种脑残设定也能出，差评！"
            }, {
                name: "obab",
                id: "#8989",
                evaluateid: 1,
                evaluate: "",
                comment: "玩起来超级爽，，但就我没有对话声音吗，，特别模糊，就好像游戏不支持双声道一样！！！"
            }, {
                name: "kiba",
                id: "#9090",
                evaluateid: 1,
                evaluate: "",
                comment: "我曹，牛批，666"
            }, {
                name: "oobb",
                id: "#6767",
                evaluateid: 1,
                evaluate: "",
                comment: "爽"
            }, {
                name: "hifi",
                id: "#0752",
                evaluateid: 1,
                evaluate: "",
                comment: "游戏中规中矩，感觉有点像暗黑血统，欧美风的ACT，跟今年很多宣传了太多的游戏到发售候就拉胯不一样，值得一玩，不过不能锁定目标有点难受"
            }, {
                name: "babo",
                id: "#2345",
                evaluateid: 1,
                evaluate: "",
                comment: "其实想给差评，但是还是给好评了。因为这游戏让我想起了以前上学偷偷拿着psp去学校玩战神的时光，于是我就去玩战神了"
            }, {
                name: "fss",
                id: "#6674",
                evaluateid: 0,
                evaluate: "",
                comment: "线上做得什么勾八，卡成睿智，连招打完一套还有后摇，玩啥嘛，很失望"
            }, {
                name: "MDzz",
                id: "#0872",
                evaluateid: 1,
                evaluate: "",
                comment: "才玩了不到1小时，游戏感觉不错的，198也不贵。好评啦"
            }, {
                name: "avez",
                id: "#2827",
                evaluateid: 1,
                evaluate: "",
                comment: "feels like a modern ps2 game, if you miss older action games check this one out"
            }, {
                name: "maomao",
                id: "#8787",
                evaluateid: 0,
                evaluate: "",
                comment: "手柄在全屏模式下竟然无法移动，只能用键盘"
            }, {
                name: "GYZI",
                id: "#6364",
                evaluateid: 0,
                evaluate: "",
                comment: "看宣传可以可实际上玩的不太一样 、不好玩啊啊啊啊啊啊啊啊！！！！！！！！！！！ 有可能是我感觉不行吧看你们自己选择反正总体来说可以 ，可抱歉了"
            }, {
                name: "CHISA",
                id: "#8923",
                evaluateid: 1,
                evaluate: "",
                comment: "If Abraham Lincoln: Vampire Hunter was a Western"
            }, {
                name: "SAi",
                id: "#7777",
                evaluateid: 1,
                evaluate: "",
                comment: "If Gears of War, Red Dead Redemption and God of War had a threesome... This game would be the child "
            }, {
                name: "SHABI",
                id: "#6666",
                evaluateid: 0,
                evaluate: "",
                comment: "这个游戏整合了战神的打击感和埃尔登法环的魂内核，这一点我是非常认可的，但我还是要给出差评，我喜欢和吸血鬼那个。"
            }, {
                name: "MAPA",
                id: "#9027",
                evaluateid: 1,
                evaluate: "",
                comment: "This certainly a game.Grab it on sale. It's okay, but not worth a 50$ price tag."
            }, {
                name: "xxn",
                id: "#8246",
                evaluateid: 0,
                evaluate: "",
                comment: "糟糕的建模和打击手感，这东西真的是2022年的玩意儿？？？"
            },],
            col: ["col-6", "col-6", "col-8", "col-4", "col-4", "col-8"],
        }
    },
    methods: {
        refresh() {
            console.log(this.usercomment[0].evaluateid == 0)
            for (var i = 0; i < this.usercomment.length; i++) {

                if (this.usercomment[i].evaluateid == 0) {
                    this.usercomment[i].evaluate = "此用户不推荐此游戏"
                } else if (this.usercomment[i].evaluateid == 1) {
                    this.usercomment[i].evaluate = "此用户推荐此游戏"
                }
            }
        },
        Submit(){
            let newlist={
                name:this.username,
                id:this.userid,
                evaluateid:this.evaluateid,
                evaluate:"",
                comment:this.comment
            }
            this.usercomment.unshift(newlist)
            this.comment="",
            this.refresh()
        }
    },
    mounted() {
        this.refresh()
    }
}

</script>
<style scoped>
h1 {
    color: #ffffff;
}

.commenthead {
    padding-top: 100px;
}


.box {
    background-color: rgb(9, 85, 135, 0.2);
    border-radius: 20px;
}

.card-header {
    border-color: #8c8b8a;
    color: #d6d7d8;
}

p {
    color: #8c8b8a;
}

h5 {
    color: #5aa9d6;
}

.modal-content {
    background-color: #171d2d;
}
</style>