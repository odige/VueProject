<template>
    <div id="game">
        <img src="../img/head.jpg" style="height: 100vh;width:100%;">
        <div class="card-img-overlay nav flex-column justify-content-center" style="height: 100vh;">
            <div class="col-3 mx-auto mb-4">
                <img src="../img/head2.png" class="card-img-top ">
            </div>
            <h1 class="mx-auto text-white my-3">一个值得为之奋斗的未来</h1>
            <button class="col-1 mx-auto down mt-5 text-white" style="font-weight: bolder;">下载游戏</button>
        </div>
    </div>
    <div class="row box" style="background-color:#cfdced;">
        <div class="col-5 my-auto offset-1">
            <h1 class="mb-5">全新时代来临</h1>
            <h5 class="col-10">
                《守望先锋》“归来”是一款设定在光明未来的免费团队动作游戏，每场对战都是一次5v5的终极乱斗。扮演能时间跳跃的自由斗士、节奏随身的战场DJ，以及其他30多位独一无二的英雄，在全球各地大显身手。</h5>
        </div>
        <div class="col-5 my-auto">
            <img src="../img/xuan1.jpg" class="card-img-top ">
        </div>
    </div>
    <div class="row box" style="background-color:#30356f;">
        <div class="col-5 my-auto offset-1">
            <img src="../img/xuan2.jpg" class="card-img-top ">
        </div>
        <div class="col-5 my-auto offset-1">
            <h1 class="mb-5 text-white">第1赛季现已上线</h1>
            <h5 class="col-10 text-white">
                在《守望先锋》“归来”中，总有持续不断的新体验。每隔九周，定期推出内容更新，为大家带来更多探索内容，以及前所未有的奖励。在第1赛季中，扮演淘气的雾子加入战斗，解锁超过80种新个性化物品。解锁高级战令，立即开始体验吧！
            </h5>
        </div>
    </div>
    <div class="row news" style="background-color:#cfdced;">
        <h1 class="text-center my-5">新闻</h1>
        <div class="col-10 mx-auto row mb-5">
            <div class="card col-3 my-2" v-for="item in news" :key="item">
                <img :src="item.img" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-white stretched-link">{{ item.title }}</h5>
                    <p class="card-text mt-3" style="color:#a5a5a6">{{ item.time }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <img src="../img/foot.jpg" style="height: 100vh;width:100%;">
        <div class="card-img-overlay p-0">
            <img src="../img/foot1.png" class="card-img-top " style="height: 100vh;width:100%;">
        </div>
        <div class="card-img-overlay nav flex-column justify-content-center" style="height: 100vh;">
            <h1 class="text-white col-6 text-center mx-auto mb-5">这个未来值得为之奋战。加入我们！</h1>
            <button class="col-1 mx-auto down mt-5 text-white" style="font-weight: bolder;">下载游戏</button>
        </div>
    </div>

</template>
<script>

export default {
    name: "GameView",
    data() {
        return {
            news: [{
                img: require("../img/news1.jpg"),
                title: "和《守望先锋》团队一同解析赛博恶灵源氏神话皮肤",
                time: "2022-11-10"
            }, {
                img: require("../img/news2.jpg"),
                title: "英雄故事：拉玛刹",
                time: "2022-11-05"
            }, {
                img: require("../img/news3.jpg"),
                title: "《守望先锋》“归来”雾子动画短片 中文配音幕后花絮",
                time: "2022-11-02"
            }, {
                img: require("../img/news4.jpg"),
                title: "与我们共赴暗影——《守望先锋》“归来”万圣夜惊魂再临！",
                time: "2022-10-25"
            }, {
                img: require("../img/news5.jpg"),
                title: "万圣夜惊魂：阿德勒斯布鲁恩领主桌上的文书",
                time: "2022-10-21"
            }, {
                img: require("../img/news6.jpg"),
                title: "双倍经验活动本周末开启 10月26日登录免费领皮肤和吊坠",
                time: "2022-10-19"
            }, {
                img: require("../img/news7.jpg"),
                title: "开发者博文：上线之后的游戏、地图与竞技更新",
                time: "2022-10-14"
            }, {
                img: require("../img/news8.jpg"),
                title: "《守望先锋》“归来”近期问题说明、道歉补偿与后续活动公告",
                time: "2022-10-12"
            }]
        }
    }
}
</script>
<style scoped>
h1 {
    font-weight: bolder;
    font-size: 64px;
}

.down {
    height: 80px;
    background-color: rgb(217, 91, 20, 0.9);
    border: none;
}
.down:hover{
    background-color: rgb(217, 91, 20);
}

.box {
    height: 550px;
}

.card-body {
    background-color: #1c2034;
}

.card {
    --bs-card-bg: none;
    --bs-card-border-color: none
}

.card-title {
    height: 80px;
}
</style>