<template>
    <div class="head-box">
        <i v-if="star_light" class="fa fa-star-o fa-lg star" @click="follow"></i>
        <i v-else="!star-light" class="fa fa-star fa-lg star" @click="follow"></i>
        <div class="detail-info">
            <i class="fa fa-reorder fa-lg reorder" @click="isHide"></i>
            <transition name="slide-fade">
                <ul class="info-list" v-show="hide">
                    <li><i class="fa fa-phone fa-lg list-icon"></i>15579117205</li>
                    <li><i class="fa fa-qq fa-lg list-icon"></i>249507273</li>
                    <li><i class="fa fa-envelope-o fa-lg list-icon"></i>249507273@qq.com</li>
                </ul>
            </transition>
        </div>
        <a href="#/index"><img src="static/images/avatar.png" class="avatar"></a>
        <h1>陈耳东</h1>
    </div>
</template>
<script type="es6">

  export default {
    data() {
        return {
            star_light: true,
            hide: false
        }
    },
    methods: {
        follow() {
            let _this = this;
            _this.star_light = !_this.star_light;
        },
        isHide() {
            let _this = this;
            _this.hide = !_this.hide;
        }
    }
  }
</script>
<style media="screen">
    .head-box {
        position: relative;
        width: 100%;
        height: 3rem;
        background-color: #81C2D6;
        overflow: hidden;
    }

    .head-box h1 {
        text-align: center;
        color: white;
        font-size: .26rem;
        margin-top: .1rem;
    }

    .head-box .avatar {
        display: block;
        width: 1.4rem;
        height: 1.4rem;
        margin: 0 auto;
        margin-top: .8rem;
        -webkit-border-radius: .8rem;
        border-radius: .8rem;
    }

    .head-box .star {
        position: absolute;
        left: .5rem;
        top: .5rem;
        font-size: .3rem;
        color: #fff;
    }

    .head-box .reorder {
        position: absolute;
        right: .5rem;
        top: .5rem;
        font-size: .3rem;
        color: #fff;
    }

    .head-box .list-icon {
        float: left;
        margin: .15rem .2rem;
        vertical-align: middle;
        color: #fff;
        font-size: .3rem;
    }

    .head-box .info-list {
        position: absolute;
        right: .7rem;
        top: .8rem;
        min-width: 1.8rem;
        height: 1.8rem;
        background-color: #8192D6;
        -webkit-border-radius: .2rem;
        border-radius: .2rem;
    }

    .head-box .info-list li {
        display: block;
        height: 33.33%;
        width: 100%;
        padding-right: .2rem;
        font-size: .26rem;
        color: #fff;
        line-height: 2.1;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .head-box .info-list li:nth-child(2) {
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }
</style>
