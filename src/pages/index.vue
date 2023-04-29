<template>
    <div class="index">
        <header-bar/>
        <router-view/>
    </div>
</template>

<script>
    import HeaderBar from "@/components/index/HeaderBar";

    export default {
        name: "index",
        components:{
            HeaderBar
        }
    }
</script>

<style scoped>
.index{
    height: 667px;
    background-color: black;
}
</style>
