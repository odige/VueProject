<template>
    <div id="overview">
        <div class="container col-8">
            <h1>账号详情</h1>

            <div class="boxhead nav flex-column justify-content-center loginbox">
                <h5>个人信息</h5>
            </div>
            <div class="box">
                <div class="row">
                    <label class="col-2 offset-1 ">姓名</label>
                    <span class="col">{{ aname }}</span>
                </div>
                <div class="row">
                    <label class="col-2 offset-1 ">国家/地区</label>
                    <span class="col">{{ country }}</span>
                </div>
            </div>

            <div class="boxhead nav flex-column justify-content-center loginbox">
                <h5>电子邮箱</h5>
            </div>
            <div class="box">
                <div class="row">
                    <label class="col-2 offset-1 ">电子邮箱</label>
                    <span class="col-7" v-if="reg[0]">{{ email }}</span>
                    <button class="col-1 border-0 up" @click="verify(0)" v-if="reg[0]">更新↗</button>

                    <div class="col-4 nav flex-column justify-content-center loginbox" v-if="!reg[0]">
                        <input type="email" class="form-control oinput" v-model="remail">
                    </div>
                    <div class="col-1 nav flex-column justify-content-center" v-if="!reg[0]">
                        <button class="btn btn-primary" @click="on(0)">确定</button>
                    </div>
                    <div class="col-1 nav flex-column justify-content-center" v-if="!reg[0]">
                        <button class="btn btn-primary" @click="verify(0)">取消</button>
                    </div>
                </div>
            </div>

            <div class="boxhead nav flex-column justify-content-center loginbox">
                <h5>手机号码</h5>
            </div>
            <div class="box">
                <div class="row">
                    <label class="col-2 offset-1 ">手机号码</label>
                    <span class="col-7" v-if="reg[1]">{{ phone }}</span>
                    <button class="col-1 border-0 up" @click="verify(1)" v-if="reg[1]">更新↗</button>

                    <div class="col-4 nav flex-column justify-content-center loginbox" v-if="!reg[1]">
                        <input type="phone" class="form-control oinput" v-model="rphone">
                    </div>
                    <div class="col-1 nav flex-column justify-content-center" v-if="!reg[1]">
                        <button class="btn btn-primary" @click="on(1)">确定</button>
                    </div>
                    <div class="col-1 nav flex-column justify-content-center" v-if="!reg[1]">
                        <button class="btn btn-primary" @click="verify(1)">取消</button>
                    </div>
                </div>
            </div>

            <div class="boxhead nav flex-column justify-content-center loginbox">
                <h5>称昵</h5>
            </div>
            <div class="box">
                <div class="row">
                    <label class="col-2 offset-1 ">战网昵称</label>
                    <span class="col-7" v-if="reg[2]">{{ name }}</span>
                    <button class="col-1 border-0 up" @click="verify(2)" v-if="reg[2]">更新↗</button>

                    <div class="col-4 nav flex-column justify-content-center loginbox" v-if="!reg[2]">
                        <input type="name" class="form-control oinput" v-model="rname">
                    </div>
                    <div class="col-1 nav flex-column justify-content-center" v-if="!reg[2]">
                        <button class="btn btn-primary" @click="on(2)">确定</button>
                    </div>
                    <div class="col-1 nav flex-column justify-content-center" v-if="!reg[2]">
                        <button class="btn btn-primary" @click="verify(2)">取消</button>
                    </div>
                </div>
            </div>
            <div class="col-6 offset-3 exit">
                <button class="btn btn-danger col-12" @click="exit">退出登入</button>
            </div>
        </div>
    </div>
</template>

<script>
import { _push } from "@/scripts/page";
export default {
    name: 'OverView',
    data() {
        return {
            aname: 'XXX',
            country: '中国大陆',
            email: '123456789@qq.com',
            remail: '',
            phone: '884808848',
            rphone: '',
            name: 'AVA#7777',
            rname: '',
            reg: [true, true, true]
        }
    },
    methods: {
        exit:()=>{
            _push(window, "")
        },
        verify: function (num) {
            this.reg[num] = !this.reg[num]
        },
        on:function(num){
            if(num===0){
                this.email=this.remail
            }else if(num===1){
                this.phone=this.rphone
            }else{
                this.name=this.rname
            }
            this.reg[num] = !this.reg[num]
        }
    },
    mounted() {
        this.remail = this.email
        this.rphone = this.phone
        this.rname = this.name
    }
}
</script>

<style scoped>
#overview {
    height: 1200px;
    background-color: #001f4e;
}

.head {
    background-color: rgb(13, 43, 80, 0.9);
}

.boxhead {
    background-color: rgb(9, 85, 135, .11);
    height: 100px;
}

.box {
    background-color: rgb(9, 85, 135, .07);
    margin-bottom: 25px;
}

label {
    padding: 25px;
    color: #afb3bb;
}

span {
    padding: 25px;
    color: #ffffff;
}

h1 {
    padding-top: 100px;
    padding-bottom: 50px;
    color: #ffffff;
}

.up {
    background-color: rgb(9, 85, 135, 0);
    color: #00aeff;
}

.up:hover {
    color: #ffffff;
}

h5 {
    padding-left: 50px;
    color: #ffffff;
}

.oinput {
    background-color: rgb(9, 85, 135, 0);
    color: #ffffff;
}

.oinput:hover {
    border-color: #dadadb;
    color: #ffffff;
}

.oinput:focus {
    background-color: rgb(9, 85, 135, 0);
    box-shadow: none;
    border-color: #148eff;
    color: #ffffff;
}
.exit{
    margin-top: 70px;
}
</style>