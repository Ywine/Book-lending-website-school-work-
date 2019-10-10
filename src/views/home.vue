<template>
    <div class="home">
        <div class="carouselImg" style="background: url(./images/index.jpg);height: 892px;background-attachment: fixed;background-repeat: no-repeat"></div>  <!--首页图片-->
        <div class="borrowingBooks">
            <div class="topTitle">
                <b-col cols="9" sm="9">
                    <h2>借阅图书</h2>
                </b-col>
                <b-col cols="1" sm="1">
                    <a href="#"><img src="../assets/Gd.png" alt="" style="width: 2rem;float: right"></a>
                </b-col>
            </div>
            <div class="myBookbox">
                <b-col class="bookDay" sm="12" xl="5">
                    <div class="wrap_01">
                        <CircleProgress
                                :id="1"
                                :width="15"
                                :radius="15"
                                :progress="30"
                                barColor="#f34303"
                                backgroundColor="#f0f2f5"
                                :isAnimation="true"
                        ><p class="day">3天</p><p class="time">08:24:57</p></CircleProgress>
                        <div class="bookMsg">
                            <h5>特洛伊罗斯与克瑞西达</h5>
                            <p>书号：12345/123</p>
                            <p>作者：[英]威廉·莎士比亚 著  朱生豪 译</p>
                            <p>还书日期：2019-01-01</p>
                        </div>
                    </div>

                </b-col>
                <b-col class="bookDay" sm="12" xl="7">
                    <b-col class="" sm="12">
                        <div class="bookLeft ">
                            <b-col sm="12" xl="5">
                                <CircleProgress
                                        :id="2"
                                        :width="10"
                                        :radius="15"
                                        :progress="50"
                                        barColor="#a8bbd2"
                                        backgroundColor="#f0f2f5"
                                        :isAnimation="true"
                                        class="content2"
                                ><p class="day2">3天</p><p class="time2">08:24:57</p></CircleProgress>
                            </b-col>
                            <b-col sm="12" xl="7">
                                <div class="bookMsg2">
                                    <h5>特洛伊罗斯与克瑞西达</h5>
                                    <p>书号：12345/123</p>
                                    <p>作者：[英]威廉·莎士比亚 著  朱生豪 译</p>
                                    <p>还书日期：2019-01-01</p>
                                </div>
                            </b-col>
                        </div>
                    </b-col>
                    <b-col class="" sm="12">
                        <div class="bookLeft">
                            <b-col sm="12" xl="5">
                                <CircleProgress
                                        :id="3"
                                        :width="10"
                                        :radius="15"
                                        :progress="30"
                                        barColor="#a8bbd2"
                                        backgroundColor="#f0f2f5"
                                        :isAnimation="true"
                                        class="content2"
                                ><p class="day2">3天</p><p class="time2">08:24:57</p></CircleProgress>
                            </b-col>
                            <b-col sm="12" xl="7">
                                <div class="bookMsg2">
                                    <h5>特洛伊罗斯与克瑞西达</h5>
                                    <p>书号：12345/123</p>
                                    <p>作者：[英]威廉·莎士比亚 著  朱生豪 译</p>
                                    <p>还书日期：2019-01-01</p>
                                </div>
                            </b-col>


                        </div>
                    </b-col>
                </b-col>
            </div>
        </div>  <!--借阅书籍时间-->
        <div class="tjBook">
            <div class="tjBookbox">
                <div class="topTitle">
                    <b-col cols="9" sm="9"><h2 >推荐图书</h2></b-col>
                    <b-col cols="1" sm="1">
                        <router-link  to="bookType" ><img src="../assets/Gd.png" alt="" style="width: 2rem;float: right"></router-link>
                    </b-col>
                </div>
                <div style="display: flex;flex-wrap: wrap">
                    <b-col sm="12" xl="4" v-for="item in tjbook" :key="item.number" style="display: flex;margin-top: 15px">
                        <div style="width: 30% "><img :src="item.img" alt="" style="border-radius: 10px"></div>
                        <div style="margin-left: 20px">
                            <h4>{{item.name}}</h4>
                            <p style="margin: 4px">{{item.type}}类</p>
                            <p style="margin: 4px">书号：{{item.number}}</p>
                            <p style="margin: 4px">作者：{{item.Author}}</p>
                            <p style="margin: 4px">剩余：{{item.remaining}}</p>
                        </div>
                    </b-col>
                </div>
            </div>
        </div>  <!--推荐图书-->
        <div class="tjhd">
            <div class="topTitle">
                <b-col cols="9" sm="9"><h2 >推荐活动</h2></b-col>
                <b-col cols="1" sm="1">
                    <a href="#"><img src="../assets/Gd.png" alt="" style="width: 2rem;float: right"></a>
                </b-col>
            </div>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000;margin-top:35px" fade  controls indicators img-width="1061" img-height="480">
                <b-carousel-slide v-for="item in img" :key="item.number" :img-src="item"></b-carousel-slide>
            </b-carousel>
            <div style="margin-top: 90px">
                <div v-for="item in img2" :key="item.number" style="margin-bottom: 60px;display: flex">
                    <b-col xl="7" ><img :src="item.img" alt="" style="border-radius: 10px;box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5)"></b-col>
                    <b-col xl="5">
                        <h4>{{item.name}}</h4>
                        <p>讲座人：{{item.name}}</p>
                        <p>讲座时间：{{item.ren}}</p>
                        <p>讲座地点：{{item.time}}</p>
                        <p>讲座简介：{{item.jianjie}}</p>
                    </b-col>
                </div>
                <div style="margin: 200px 0px;text-align: center">
                    <h1>THANKS FOR WATCHING</h1>
                </div>
            </div>
        </div> <!--推荐活动-->
    </div>
</template>

<script>

    import CircleProgress  from 'vue-circleprogressbar';
    export default {
        name: "home",
        data(){
            return {
                img:['./images/img1.jpg','./images/img2.jpg','./images/img3.jpg'],
                img2:[
                    {img:'./images/img4.jpg',name:'星际穿越的可能性',ren:'星际穿越的可能性',time:"2019年4月12日 15:00—16:30",position:'图书馆三楼3号大讲堂',jianjie:'作为科幻电影和科幻小说的常见题材，星际穿越一直是人们很久以来存在在心底的一个想要实现的梦乡。现如今不断发展的科学技术，也让我们觉得实现梦想指日可待。而此次讲座将为我们解释其真正实现的可能性和此技术所需要面临的一些实际问题。'},
                    {img:'./images/img5.jpg',name:'威廉·米利根24重人格的一生',ren:'言钟教授（犯罪心理学家）',time:"2019年5月9日 15:00—16:30",position:'图书馆二楼1号大讲堂',jianjie:'作为《24个比利》的主人公，威廉·米丽根的一生也被大众所熟知，而解离性身份疾患（DID）这种心理疾病也用过图书、媒体、电影等大众媒体慢慢进入大众视野。作为美国犯罪心理学史上极为注明的案例，言钟教授将从独特的视角展开分析这一经典案例。'},
                    {img:'./images/img6.jpg',name:'交响乐团中的小提琴们',ren:'江海瑶教授（小提琴演奏家）',time:"2019年5月10日 15:00—16:30",position:'图书馆二楼1号大讲堂',jianjie:'小提琴作为一个古老的乐器，在交响乐团中占有着举足轻重的重要地位。而在音乐室的长河中，更是不泛大量有关小提琴的乐谱长存于世。这次讲座，我们邀请著名的小提琴演奏家以及音乐史教授江海瑶先生为同学们解析小提琴的历史，以及小提琴在乐团中的作'}
                ],


            }
        },
        components:{
            CircleProgress
        },
        computed: {
            tjbook: function () {  //通过方法访问
                return this.$store.getters.tjBook;
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    ul{
        padding: 0px;
    }
    img{
        width: 100%;
    }
    .carouselImg{
        width: 100%;
    }
    .topTitle{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .borrowingBooks{
        width: 60%;
        margin: 45px auto;
    }
    .bookDay{
        padding: 2%;

    }
    .myBookbox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .wrap_01{
        background-color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
        border-radius: 15px;
        padding: 5%;
    }
    .bookMsg{
        margin-top: 15px;
        text-align: center;
    }
    .bookMsg2{
        margin-left: 25px;
        margin-top: 15px;
    }
    .bookMsg p,.bookMsg2 p{
        color: rgba(0,0,0,0.5);
    }
    .bookLeft{
        display: flex;
        padding: 5px;
        margin-left: 10%;
        align-items: center;
        flex-wrap: wrap;
    }
    .content{
        height: 13rem;
    }
    .content2{
        width: 100%;
    }
    .day{
        font-size: 2.5rem;
        margin: 0px;
    }
    .day,.time{
        text-align: center;
        color:  #f34303;
    }
    .day2{
        font-size: 2rem;
        margin: 0px;
    }
    .day2,.time2{
        text-align: center;
        color:  #1a4683;
    }


    .tjBook{
        width: 100%;
        background-color: #f8f9fb;
        padding: 50px 0px;
    }
    .tjBookbox{
        width: 60%;
        margin: 0 auto;
    }

    .tjhd{
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }
    .carousel-inner{
        border-radius: 15px;
    }
</style>
