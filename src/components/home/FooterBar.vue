<template>
    <div class="footer">
        <div class="item">
            <router-link to="/index" class="link">
                <span @click="itemHighlight=0" :class="itemHighlight===0? 'active':''">首页</span>
            </router-link>
        </div>
        <div class="item">
            <span @click="itemHighlight=1" :class="itemHighlight===1? 'active':''">消息</span>
        </div>
        <div class="item">
            <span @click="itemHighlight=2" :class="itemHighlight===2? 'active':''">公益招聘</span>
        </div>

        <div class="item">
            <span @click="itemHighlight=3" :class="itemHighlight===3? 'active':''">主页</span>
        </div>
        <div class="item">
            <span @click="itemHighlight=4" :class="itemHighlight===4? 'active':''">我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterBar",
        data() {
            return {
                itemHighlight: 0
            }
        }
    }
</script>

<style scoped>
    .footer {
        background-color: #000000;
        height: 55px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-items: center;
        z-index: 999;
    }

    .footer .item {
        flex: 1;
        text-align: center;
        padding: 10px;
        color: darkgrey;
        font-size: 10pt;
    }

    .footer .item .link {
        color: darkgrey;
        text-decoration: none
    }

    .active {
        color: azure;
    }
</style>
