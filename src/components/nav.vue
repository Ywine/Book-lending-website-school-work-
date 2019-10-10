<template>
    <div class="nav">
        <b-navbar toggleable="lg" type="dark" variant="info" nav-fixed-top style="width: 100%">
            <b-navbar-brand href="#">BookLending</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="index" class="navMsg">首页</b-nav-item>
                    <b-nav-item to="bookType" class="navMsg">图书</b-nav-item>
                    <b-nav-item to="find" class="navMsg">发现</b-nav-item>
                    <b-nav-item :to="path" class="navMsg" @click="goMy()">我的</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-b-modal.modal-1 v-if="show" @click="registrationSuccess = false">注册</b-nav-item>
                    <b-nav-item v-b-modal.modal-2 v-if="show">登录</b-nav-item>
                    <b-nav-item v-if="!show" class="headImg"><img :src="userMsg.headImg" alt="" style="width: 13%;border-radius: 100%;margin-right: 20px;"><p style="margin: 0px;" @click="esc()">退出</p></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar><!--导航-->
        <b-modal id="modal-1" title="注册账号"  hide-footer>
            <b-alert :show="dismissCountDown" dismissible variant="danger" @dismissed="dismissCountDown=0" fade>
                <p style="margin: 0px">{{errMsg}}</p>
            </b-alert><!--警告框-->
            <h3 v-if="registrationSuccess">注册成功</h3>
            <p  v-if="registrationSuccess" style="color: #17a2b8;cursor:pointer " @click="goLogin()">去登录</p>
            <b-input-group size="lg" v-if="!registrationSuccess">
                <p style="margin-bottom: 5px">账号:</p>
                <b-form-input class="w-100" style="border-radius: 10px;margin-bottom: 20px" v-model="id"></b-form-input>
                <p style="margin-bottom: 5px">密码:</p>
                <b-form-input type="password" class="w-100" style="border-radius: 10px;margin-bottom: 20px" v-model="password"></b-form-input>
                <b-button variant="info" class="w-100" @click="registered()">注册</b-button>
            </b-input-group>
        </b-modal>
        <b-modal id="modal-2" title="登录账号"  hide-footer>
            <b-alert :show="dismissCountDown" dismissible variant="danger" @dismissed="dismissCountDown=0" fade>
                <p>{{errMsg}}</p>
            </b-alert><!--警告框-->
            <b-input-group size="lg">
                <p style="margin-bottom: 5px">账号:</p>
                <b-form-input class="w-100" style="border-radius: 10px;margin-bottom: 20px" v-model="id"></b-form-input>
                <p style="margin-bottom: 5px">密码:</p>
                <b-form-input type="password" class="w-100" style="border-radius: 10px;margin-bottom: 20px" v-model="password"></b-form-input>
                <b-button variant="info" class="w-100" @click="login()">登录</b-button>
            </b-input-group>
        </b-modal>

    </div>
</template>

<script>
    export default {
        name: "nav",
        data(){
            return {
                id:'',
                password:'',
                dismissSecs: 1,
                dismissCountDown: 0,
                errMsg:'',
                userMsg:{},
                show:true,
                registrationSuccess:false,
                path:'index'
            }
        },
        methods:{
            login:function () {//登录验证
                //console.log(this.id,this.password)

                let user = {id:this.id,password:this.password}
                this.$store.commit('login', user)//判断是否真确
                let loginMsg = this.$store.getters.loginMsg//获取返回信息
                if(loginMsg.loginStatus != '成功'){
                    this.errMsg = loginMsg.loginStatus//错误信息
                    this.dismissCountDown = this.dismissSecs//弹出警告框
                } else{
                    this.path = "my"
                    this.show = false
                    this.userMsg = loginMsg.loginUser
                    this.id = ''
                    this.password = ''
                    this.$bvModal.hide('modal-2')
                }
            },
            registered:function () {//注册
                let user = {id:this.id,password:this.password}
                this.$store.commit('registeredStatus', user)//注册
                let registeredStatusMsg = this.$store.getters.registeredStatusMsg//获取返回信息
                if(registeredStatusMsg != '注册成功'){
                    this.errMsg = registeredStatusMsg//错误信息
                    this.dismissCountDown = this.dismissSecs//弹出警告框
                } else{
                    this.registrationSuccess = true
                    this.id = ''
                    this.password = ''
                }
            },
            esc:function(){
                let path = this.$route.path
                if(path == "/my"){
                    this.$router.push({ path:'/index'})
                }
                this.show = true
                this.$store.commit('esc')
            },

            goLogin:function () {
                this.$bvModal.hide('modal-1')
                this.$bvModal.show('modal-2')
            },
            goMy:function () {
                let msg = this.$store.getters.loginMsg.loginStatus
                if(msg != "成功"){
                    this.path = "index"
                    this.$bvModal.show('modal-2')
                }else{
                    this.path = "my"
                }
            }
        }
    }
</script>

<style scoped>
.navMsg{

}
.headImg a{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    Padding: 0px;
}
.navMsg a{
    display: flex;
    justify-content: center;
    align-items: center;
}
.navMsg p{
    margin: 0px;
    margin-left: 10px;
}
</style>
