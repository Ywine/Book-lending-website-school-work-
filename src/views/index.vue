<template>
    <div class="index">
        <Nav></Nav>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Nav from '../components/nav'
    export default {
        name: "index",
        components:{
            Nav
        },
        comments:{

        }
    }
</script>

<style scoped>
    .index{
        width: 100%;
        height: 100%;
    }
    .main{
        width: 100%;
    }
</style>
