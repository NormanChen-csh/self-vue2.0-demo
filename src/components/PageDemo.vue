<template>
    <div class="homework">
        <h2>切图作品列表</h2>
        <ul class="page-lists">
            <a v-for="list in demoArr" :href="list.url"><li>{{ list.name }}</li><i class="arrow"></i></a>
        </ul>
    </div>
</template>
<script type="es6">

export default {
    data() {
        return {
            demoArr: [
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

<style media="screen">
    .homework {
        padding: .2rem .2rem;
    }

    .homework h2 {
        margin-bottom: .3rem;
        font-size: .5rem;
        color: #DE8C68;
    }

    .homework .page-lists a {
        position: relative;
        display: block;
        width: 100%;
        height: .8rem;
        color: #F29F3F;
        font-size: .24rem;
        line-height: .8rem;
        border-top: 1px solid #FFE957;
    }

    .homework .page-lists .arrow {
        position: absolute;
        right: .2rem;
        top: .3rem;
        border: .03rem solid #F2753F;
        width: .2rem;
        height: .2rem;
        border-left: 0;
        border-bottom: 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .homework .page-lists a:last-child {
        border-bottom: 1px solid #FFE957;
    }
</style>
