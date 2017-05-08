<template>
    <div class="nav-box">
        <ul class="navBar">
            <li @click="isShowa = !isShowa"><p v-show="isShowa">工作经验</p><p v-show="!isShowa">1年</p></li>
            <li @click="isShowb = !isShowb"><p v-show="isShowb">博客主页</p><a class="heartbeat" href="https://segmentfault.com/u/codercsh" v-show="!isShowb">点我前往</a></li>
            <li @click="isShowc = !isShowc"><p v-show="isShowc">个人爱好</p><p class="hobby" v-show="!isShowc">coding、跑步、爬山、看电影</p></li>
        </ul>
        <ul class="little-nav">
            <a href="#/demo"><li>个人作品</li></a>
            <a href="#/reward"><li>打赏作者</li></a>
            <a href="#/movie"><li>电影推荐</li></a>
            <a href="#/letter" @click="showPage()"><li>好文分享</li></a>
        </ul>
    </div>
</template>
<script type="es6">
    import { mapActions } from 'vuex'

    export default {
      data() {
          return {
              isShowa: true,
              isShowb: true,
              isShowc: true
          }
      },
      methods: {
          showPage() {
              let _this = this;
              _this.$store.dispatch('isShow');
          }
      }
    }
</script>
<style>
    ul,li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    .nav-box .navBar {
        display: flex;
        width: 100%;
        font-size: .32rem;
        background-color: #D9B3E6;
    }

    .nav-box .navBar li {
        position: relative;
        padding-top: .6rem;
        text-align: center;
        width: 33.33333%;
        height: 1.8rem;
        color: #fff;
        vertical-align: middle;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .nav-box .navBar li::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0, 0);
        background: rgba(131,252,216,.3);
        transition: all .5s ease;
    }

    .nav-box .navBar li:active::before {
        transform: translate(-50%, -50%) scale(2, 2);
    }

    .nav-box .heartbeat {
        display: block;
        text-decoration: none;
        color: #DCF7A1;
        animation: heartbeat .8s ease infinite;
    }

    @keyframes heartbeat {
      0% {
          transform: scale(0.96);
      }
      9% {
          transform: scale(1.02);
      }
      18% {
          transform: scale(0.96);
      }
      25% {
          transform: scale(1);
      }
      100% {
          transform: scale(1);
      }
    }

    .nav-box .hobby {
        font-size: .24rem;
        white-space:normal;
    }

    .nav-box .little-nav {
        width: 100%;
        height: .8rem;
        background-color: #83FCD8;
        line-height: .8rem;
    }

    .nav-box .little-nav li {
        float: left;
        width: 25%;
        height: 100%;
        font-size: .28rem;
        color: #8192D6;
        text-align: center;
    }
</style>
