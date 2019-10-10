<template>
    <div>
        <div class="sort w-75">
            <b-input-group class="mt-3">
                <template>
                    <b-input-group-text @click="sort(sortMsg)"><img src="../assets/sort.png" alt=""></b-input-group-text>
                </template>
                <b-form-input v-model="sortMsg" @keyup.enter="sort(sortMsg)" placeholder="请输入关键字/书名/书号/作者"></b-form-input>
            </b-input-group>
        </div>
        <div style="display: flex;flex-wrap: wrap;width: 90%;margin: 0 auto;margin-bottom: 50px">
            <h4 v-show="show" style="margin: 0 auto">没有找到相关信息</h4>
            <b-col @click="showModal(item.number)" sm="12" xl="4" md="6" v-for="item in sortbook" :key="item.number" style="display: flex;margin-top: 15px;padding-left: 10%">
                <div style="width: 30% " class="arrow"><img :src="item.img" alt="" class="imgs"></div>
                <div style="margin-left: 20px" class="arrow">
                    <h4>{{item.name}}</h4>
                    <p style="margin: 4px">{{item.type}}类</p>
                    <p style="margin: 4px">书号：{{item.number}}</p>
                    <p style="margin: 4px">作者：{{item.Author}}</p>
                    <p style="margin: 4px">剩余：{{item.remaining}}</p>
                </div>
            </b-col>
        </div>
        <b-modal ref="my-modal" hide-footer title="图书信息">
            <b-alert :show="dismissCountDown" dismissible :variant="msg[1]" @dismissed="dismissCountDown=0" fade>
                <p style="margin: 0px">{{msg[0]}}</p>
            </b-alert><!--警告框-->
            <b-col  sm="12"   style="display: flex;margin-top: 15px;flex-wrap: wrap">
                <b-col cols="12" sm="4" xl="5" style="margin-bottom: 20px"><img :src="bookMsg[0].img" alt="" class="imgs"></b-col>
                <b-col cols="12" sm="8" xl="7">
                    <h4>{{bookMsg[0].name}}</h4>
                    <p style="margin: 4px">{{bookMsg[0].type}}类</p>
                    <p style="margin: 4px">书号：{{bookMsg[0].number}}</p>
                    <p style="margin: 4px">作者：{{bookMsg[0].Author}}</p>
                    <p style="margin: 4px">剩余：{{bookMsg[0].remaining}}</p>
                    <p style="margin: 4px">简介：{{bookMsg[0].Introduction}}</p>
                </b-col>
                <b-input-group style="margin: 0px 16px;display: -webkit-box;">

                    <b-form-input type="number" min="1.00" style="border-radius: 0.25rem;" v-model="day"></b-form-input>

                    <b-input-group-append>
                        <p style="    margin: 0px;width: 74px;height: calc(2.5em + 0.75rem + 8px);color: #070707;position: absolute;right: 98px;z-index: 10;text-align: center;line-height: calc(2.5em + 0.75rem + 8px);">天</p>
                        <b-button variant="info" block  @click="lendBook()">借用书籍</b-button>
                    </b-input-group-append>
                </b-input-group>

            </b-col>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "find",
        data(){
            return {
                sortMsg:'',//搜索字符串
                sortbook:[],//搜索结果
                show:false,
                bookMsg:[{img:'',name:'',type:'',number:'',Author:'',remaining:''}],
                msg:[],
                dismissSecs: 1,
                dismissCountDown: 0,
                day:1
            }
        },
        methods:{
            sort:function (msg) {
                this.sortbook = this.allbook.filter( bookmsg => {
                    return  bookmsg.number == msg || bookmsg.Author == msg || bookmsg.name.indexOf(msg) != -1
                })
                if(this.sortbook.length == 0){
                    this.show = true
                }
                else{
                    this.show = false
                }
            },
            showModal:function (id) {
                this.bookMsg = this.allbook.filter( bookmsg => {
                    return  bookmsg.number == id
                })
                this.$refs['my-modal'].show()
            },
            lendBook:function () {
                let loginUserMsg = this.$store.getters.loginMsg
                if (loginUserMsg.loginStatus == '未登录'){
                    this.msg[0] = '请先登录'
                    this.msg[1] = 'danger'
                    this.dismissCountDown = this.dismissSecs//弹出警告框
                }else{
                    var s = true
                    loginUserMsg.loginUser.lend.forEach(item => {
                            if(item.bookId == this.bookMsg[0].number){
                                this.msg[0] = '你已借用此书籍'
                                this.msg[1] = 'warning'
                                this.dismissCountDown = this.dismissSecs//弹出警告框
                                s = false
                                return
                            }
                     })
                    console.log(s)
                    if(s){
                        this.msg[0] = '借用成功'
                        this.msg[1] = 'success'
                        this.dismissCountDown = this.dismissSecs//弹出警告框
                        let lendBook = {bookId:this.bookMsg[0].number,startTime:new Date,day:this.day}
                        this.$store.commit('lendBook',lendBook)
                    }
                }
            }
        },
        computed: {
            allbook: function () {  //通过方法访问
                return this.$store.getters.allBook;
            }
        },
    }
</script>

<style scoped>
    img{
        width: 100%;
    }
    .imgs{
        box-shadow: 0px 0px 5px 0px;
        border-radius: 10px;
    }
    .sort{
        margin: 75px auto 17px auto;
    }
    .input-group-text{
        border: 0px;
        position: absolute;
        z-index: 10;
        right: 22px;
        width: 3.5em;
        height: calc(2.5em + 0.75rem + 8px);

    }
    .input-group > .form-control{
        width: 100%;
    }
    .form-control{
        height: calc(2.5em + 0.75rem + 8px);
        border-radius: 2.25rem;
        padding-right: calc(3.5em + 25px);
        padding-left: 25px;
    }
    .input-group > .form-control:not(:last-child),.input-group > .form-control:not(:first-child){
        border-radius: 2.25rem;
    }
    .arrow{
        cursor:pointer
    }
</style>
