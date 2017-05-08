<template>
    <div class="reward-box">
        <h2>恭喜发财</h2>
        <img class="wx-pic" src="../../static/images/pay-ew.png">
        <p class="couplet-right">步步登高走鸿运</p>
        <p class="couplet-left">岁岁平安发大财</p>
    </div>
</template>
<script type="es6">
    export default {

    }
</script>
<style media="screen">
    .reward-box {
        position: relative;
        height: 5.4rem;
        padding-top: .2rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: url(../../static/images/bg4.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .reward-box .wx-pic {
        display: block;
        width: 2.48rem;
        height: 3.6rem;
        margin: 0 auto;
        margin-top: .2rem;
    }

    .reward-box h2 {
        width: 2rem;
        height: .5rem;
        margin: 0 auto;
        margin-top: .1rem;
        font-size: .32rem;
        color: #000;
        background-color: red;
        text-align: center;
        line-height: .5rem;
        font-family: 'KaiTi';
    }

    .reward-box p {
        position: absolute;
        width: .5rem;
        height: 2.45rem;
        padding-top: .15rem;
        font-weight: 600;
        background-color: red;
        font-size: .3rem;
        text-align: center;
        font-family: 'KaiTi';
        letter-spacing: .04rem;
    }

    .reward-box p.couplet-left {
        left: .5rem;
        top: .9rem;
    }

    .reward-box p.couplet-right {
        right: .5rem;
        top: .9rem;
    }

    .reward-box p,.reward-box h2 {
        -webkit-box-shadow: 0 0 .3rem 0 red;
        box-shadow: 0 0 .3rem 0 red;
    }

    .reward-box p:active,.reward-box h2:active {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
    }

</style>
