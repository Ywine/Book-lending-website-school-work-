<template>
    <div class="bookType h-100">
        <b-tabs content-class="mt-3" pills card vertical justified>
            <b-tab title="全部" >
                <div style="display: flex;flex-wrap: wrap">
                    <b-col sm="12" xl="4" @click="showModal(item.number)" v-for="item in allbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% " class="arrow"><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px" class="arrow">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </b-tab>
            <b-tab title="推荐图书" active>
                <div style="display: flex;flex-wrap: wrap">
                    <b-col @click="showModal(item.number)" sm="12" xl="4" v-for="item in tjbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% " class="arrow"><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px" class="arrow">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </b-tab>
            <b-tab title="文学" >
                <div style="display: flex;flex-wrap: wrap">
                    <b-col @click="showModal(item.number)" sm="12" xl="4" v-for="item in wxbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% " class="arrow"><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px" class="arrow">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </b-tab>
            <b-tab title="历史">
                <div style="display: flex;flex-wrap: wrap">
                    <b-col @click="showModal(item.number)" sm="12" xl="4" v-for="item in lsbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% " class="arrow"><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px" class="arrow">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </b-tab>
            <b-tab title="哲学">
                <div style="display: flex;flex-wrap: wrap">
                    <b-col @click="showModal(item.number)" sm="12" xl="4" v-for="item in zxbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% " class="arrow"><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px" class="arrow">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </b-tab>
            <b-tab title="科技">
                <div style="display: flex;flex-wrap: wrap">
                    <b-col @click="showModal(item.number)" sm="12" xl="4" v-for="item in kjbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% " class="arrow"><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px" class="arrow">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </b-tab>
            <b-tab title="社会科学">
                <div style="display: flex;flex-wrap: wrap">
                    <b-col @click="showModal(item.number)" sm="12" xl="4" v-for="item in shkxbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% " class="arrow"><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px" class="arrow">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </b-tab>
            <b-tab title="艺术">
                <div style="display: flex;flex-wrap: wrap">
                    <b-col @click="showModal(item.number)" sm="12" xl="4" v-for="item in ysbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% " class="arrow"><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px" class="arrow">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </b-tab>
        </b-tabs>
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
                        <p style="    margin: 0px;width: 29px;height: calc(1.5em + 0.75rem + 8px);color: #070707;position: absolute;right: 120px;z-index: 10;text-align: center;line-height: calc(1.5em + 0.75rem);">天</p>
                        <b-button variant="info" block  @click="lendBook()">借用书籍</b-button>
                    </b-input-group-append>
                </b-input-group>

            </b-col>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "bookType",
        data(){
            return {
                bookMsg:[{img:'',name:'',type:'',number:'',Author:'',remaining:''}],
                msg:[],
                dismissSecs: 1,
                dismissCountDown: 0,
                day:1
            }
        },
        methods:{
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
            wxbook: function () {  //通过方法访问
                return this.$store.getters.wxBook;
            },
            lsbook: function () {  //通过方法访问
                return this.$store.getters.lsBook;
            },
            zxbook: function () {  //通过方法访问
                return this.$store.getters.zxBook;
            },
            kjbook: function () {  //通过方法访问
                return this.$store.getters.kjBook;
            },
            shkxbook: function () {  //通过方法访问
                return this.$store.getters.shkxBook;
            },
            ysbook: function () {  //通过方法访问
                return this.$store.getters.ysBook;
            },
            allbook: function () {  //通过方法访问
                return this.$store.getters.allBook;
            },
            tjbook: function () {  //通过方法访问
                return this.$store.getters.tjBook;
            },
        },
    }
</script>

<style scoped>
    img{
        width: 100%;
    }
    .bookType{

    }
    .arrow{
        cursor:pointer
    }
</style>
