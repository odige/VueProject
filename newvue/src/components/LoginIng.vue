<template>
  <div id="login">
    <div class="container nav flex-column justify-content-center loginbox">
      <div class="row">
        <img src="../img/logo.png" class="col-2 offset-5">
        <div class="col-4 offset-4">
          <div class="input-group mb-4" v-if="pd1">
            <input type="email" class="form-control input" placeholder="电子邮件或账户" aria-label="Username"
              aria-describedby="basic-addon1" v-model="email">
          </div>
          <div class="input-group mb-4" v-if="!pd1">
            <input type="email" class="form-control is-invalid input" placeholder="电子邮件或账户" aria-label="Username"
              aria-describedby="basic-addon1" v-model="email">
          </div>
        </div>
        <div class="col-4 offset-4">
          <div class="input-group mb-4" v-if="pd2">
            <input type="password" class="form-control input" placeholder="密码" aria-label="Username"
              aria-describedby="basic-addon1" v-model="pw">
          </div>
          <div class="input-group mb-4" v-if="!pd2">
            <input type="password" class="form-control is-invalid input" placeholder="密码" aria-label="Username"
              aria-describedby="basic-addon1" v-model="pw">
          </div>
        </div>
        <div class="col-4 offset-4 mg">
          <button class="btn btn-primary col-12" @click="login">登入</button>
        </div>

        <div class="position-relative col-4 offset-4 mg">
          <div class="progress" style="height: 1px;">
            <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button type="button" class="position-absolute top-0 start-50 translate-middle "
            style="height:2rem; color: #dadadb; background-color:#15171e; border: none;">若没有账户</button>
        </div>

        <div class="col-2 offset-5">
          <button class="col-12 newu">建立免费的账户</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { _push } from "@/scripts/page";
export default {
  name: 'LoginIng',
  data() {
    return {
      email: '123456789@qq.com',
      pw: '123456',
      pd1: true,
      pd2: true
    }
  },
  methods: {
    login: function() {
      if (this.email === "123456789@qq.com") {
        if (this.pw === '123456') {
          _push(window, "home")
        } else {
          this.pd2 = false
        }
      } else {
        this.pd1 = false
      }
    }
  }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");

#login {
  background-color: #15171e;
  
}

img {
  margin-bottom: 50px;
}

hr {
  color: #3f4147;
  border: 1px solid
}

.loginbox {
  height: 100vh;
}

.progress {
  --bs-progress-bg: #3f4147;
}

.input {
  background-color: #15171e;
  border-color: #6b6c70;
  color: #ffffff;
}

.input-group-text {
  background-color: #15171e;
  border: none;
  color: #0074e0;
}

.input:hover {
  border-color: #dadadb;
  color: #ffffff;
}

.input:focus {
  background-color: #15171e;
  box-shadow: none;
  border-color: #148eff;
  color: #ffffff;
}

.mg {
  margin-top: 25px;
  margin-bottom: 25px;
}

.newu {
  margin-top: 25px;
  background-color: #15171e;
  border: none;
  color: #148cff;
  font-weight: bold;
}

.newu:hover {

  color: #47a6ff;
}
</style>