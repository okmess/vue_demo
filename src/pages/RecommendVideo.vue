<template>
    <div class="re">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide class="item" v-for="(video,index) in videoList" :key="index">
                <Video :video="video"/>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
    import Video from "@/components/Video/Video";
    export default {
        name: "RecommendVideo",
        components:{
          Video
        },
        data() {
            return {
                swiperOption: {
                    direction: "vertical",
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    slidesPerView: 1,
                    mousewheel: true,
                    mousewheelControl: true,
                    height: window.innerHeight,
                    resistanceRatio: 0,
                    observeParents: true
                },
                videoList:[
                    {
                        url:require("../static/video/729320772-1-16.mp4")

                    },
                    {
                        url:require("../static/video/711187934-1-192.mp4")

                    },
                    {
                        url:require("../static/video/729320772-1-16.mp4")

                    },
                    {
                        url:require("../static/video/711187934-1-192.mp4")

                    },
                ]
            }
        },

    }
</script>

<style scoped>
    .re {
        height: 100%;
        background-color: black;
    }
    .item{
        color: azure;
    }
</style>
