<template>
    <div class="my">
        <div class="userBox">
            <b-col class="user" xl="12">
                <img :src="user.headImg" alt="">
                <p style="margin: 0;margin-top: 20px">ID:{{user.id}}</p>
            </b-col>
            <h3 style="margin-top: 20px;margin-left: 32px">已借书籍</h3>
            <b-col xl="12" class="books" >
                <h2 style="margin:0 auto;margin-top: 100px;color: dimgrey" v-if="!show">无借阅书籍</h2>

                <b-col class="bookDay" sm="12" xl="4" v-for="item,index in user.lend" v-if="show">
                    <div class="wrap_01">
                        <CircleProgress
                                :id="index"
                                :width="15"
                                :radius="15"
                                :progress="last[index]/item.day*100"
                                barColor="#f34303"
                                backgroundColor="#f0f2f5"
                                :isAnimation="true"
                        ><p class="day">{{last[index]}}天</p></CircleProgress>
                        <div class="bookMsg">
                            <h5>{{myBook[index][0].name}}</h5>
                            <p>书号：{{myBook[index][0].number}}</p>
                            <p>作者：{{myBook[index][0].Author}}</p>
                            <p>借书日期：{{startTime[index]}}</p>
                            <p>还书日期：{{returnDate[index]}}</p>
                        </div>
                    </div>
                </b-col>
            </b-col>
        </div>


    </div>
</template>

<script>
    import CircleProgress  from 'vue-circleprogressbar';
    export default {
        name: "my",
        data(){
            return {
                myBook:[],
                returnDate:[],
                startTime:[],
                last:[],
                show:false
            }
        },
        components:{
            CircleProgress
        },
        computed: {
            user: function () {  //通过方法访问
                let user = this.$store.getters.loginMsg.loginUser
                let allbook = this.$store.getters.allBook
                let that = this
                console.log(user.lend.length,user.lend)
                if(user.lend.length>0){
                    that.show = true
                    user.lend.forEach((item,index) => {


                            console.log(index)

                            that.myBook[index] = allbook.filter(book => book.number=== item.bookId)
                            let time = new Date(item.startTime)
                            let now = new Date()
                            time.setDate(Number(time.getDate())+Number(item.day));
                            that.returnDate[index] = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate()
                            that.startTime[index] = item.startTime.getFullYear()+'-'+(item.startTime.getMonth()+1)+'-'+item.startTime.getDate()
                            let oDate1 = new Date(time.getMonth()+'-'+time.getDate()+'-'+time.getFullYear()) //转换为9-25-2017格式
                            let oDate2 = new Date(now.getMonth()+'-'+now.getDate()+'-'+now.getFullYear())
                            let iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
                            that.last[index] = iDays
                            console.log(that.last[index],that.myBook)


                    })
                }else{
                    that.show = false
                }

                return user
            },

        },
    }
</script>

<style scoped>
    .userBox{
        padding: 20px;
        width: 80%;
        margin: 0px auto;
    }
    .userBox img{
        width: 12%;
        border-radius: 12%;
    }
    .user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .books{
        display: flex;
        flex-wrap: wrap;
    }
    .wrap_01{
        background-color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
        border-radius: 15px;
        padding: 5%;
    }
    .content{
        height: 13rem;
    }
    .day{
        font-size: 2.5rem;
        margin: 0px;
    }
    .day,.time{
        text-align: center;
        color:  #f34303;
    }
    .bookMsg{
        margin-top: 15px;
        text-align: center;
    }
    .bookDay{
        margin-top: 20px;
    }
</style>
