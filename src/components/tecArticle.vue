<template>
    <div class="homework">
        <h2>前端技术入门好文</h2>
        <ul class="page-lists">
            <a v-for="art in article" :href="art.url"><li>{{ art.name }}</li></a>
        </ul>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                article: [
                    {
                        url: 'http://codercsh.leanapp.cn/worldcup',
                        name: '仿腾讯魔方'
                    },
                    {
                        url: 'http://wei.birdpush.com/leaflet/template/leaflet-template!preview.action?templateId=21154',
                        name: '抽纸巾'
                    },
                    {
                        url: 'http://wei.birdpush.com/leaflet/template/leaflet-template!preview.action?templateId=23032',
                        name: '单身狗广告页'
                    },
                    {
                        url: 'http://wei.birdpush.com/leaflet/template/leaflet-template!preview.action?templateId=44506',
                        name: '电影优惠广告页'
                    },
                    {
                        url: 'http://wei.birdpush.com/leaflet/template/leaflet-template!preview.action?templateId=36318',
                        name: '肯德基优惠广告页'
                    }
                ]
            }
        }
    }
</script>
<style>
    
</style>
