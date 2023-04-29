<template>
    <div>
        <div class="row">
            <div class="left">
                <span class="iconfont icon-15"></span>
            </div>

            <div class="middle">
                <div class="item">
                    <router-link to="/index/RecommendVideo" class="link">
                        <span @click="itemHighlight=0" :class="itemHighlight===0? 'active':''">人才</span>
                    </router-link>
                </div>
                <div class="item">
                    <router-link to="/index/RecommendVideo" class="link">
                        <span @click="itemHighlight=1" :class="itemHighlight===1? 'active':''">雇主</span>
                    </router-link>
                </div>
                <div class="item">
                    <router-link to="/index/RecommendVideo" class="link">
                        <span @click="itemHighlight=2" :class="itemHighlight===2? 'active':''">推荐</span>
                    </router-link>
                </div>
                <div class="item">
                    <router-link to="/index/RecommendVideo" class="link">
                        <span @click="itemHighlight=3" :class="itemHighlight===3? 'active':''">关注</span>
                    </router-link>
                </div>
            </div>

            <div class="right">
                <span class="iconfont icon-sousuo"></span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar",
        data(){
            return{
                itemHighlight:2
            }
        }
    }
</script>

<style scoped>
    .iconfont{
        font-size: 35px;
        padding-left: 20px;
    }
    .row {
        height: 45px;
        width: 100%;
        position: fixed;
        display: flex;
        justify-items: center;
        margin-top: 25px;
        z-index: 999;
    }
    .left,.right{
        width: 20%;
    }
    .middle{
        width: 60%;
        display: flex;
    }
    .row .item {
        flex: 1;
        width: 20px;
        text-align: center;
        color: darkgrey;
    }
    .row .item .link {
        color: darkgrey;
        text-decoration: none
    }
    .active{
        color: azure;
    }
</style>
