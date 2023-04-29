<template>
    <div class="home">
        <router-view/>
        <footer-bar/>
    </div>
</template>

<script>
    import FooterBar from "@/components/home/FooterBar";

    export default {
        name: "Home",
        components:{
            FooterBar
        }

    }
</script>

<style scoped>
</style>
