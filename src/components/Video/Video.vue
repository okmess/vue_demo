<template>
    <div class="videos">
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions">

        </video-player>
    </div>
</template>

<script>
    import {videoPlayer} from 'vue-video-player'
    export default {
        name: "Video",
        components:{
            videoPlayer
        },
        props:['video'],
        data(){
            return{
                playerOptions: {
                    autoplay: false, // 如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    fluid: false, // 当 true 时，Video.js player 将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [
                        {
                            src:this.video.url,  // 路径
                            type: 'video/mp4'  // 类型
                        }
                    ],
                    width:'100%',
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖 Video.js 无法播放媒体源时显示的默认信息。
                    controlBar:false
                }
            }
        }
    }
</script>

<style scoped>
    .videos{
        margin-top: 200px;
    }
</style>
