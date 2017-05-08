<template>
    <div class="index-box">
        <h2>{{ onePoetry.Top }}</h2>
        <h2>{{ onePoetry.Bottom }}</h2>
        <img src="../../static/images/fireWork.png" class="fireWork">

        <p>一个web小白</p>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                poetry:[
                    {
                        Top: '未曾相逢先一笑',
                        Bottom: '初回便已许平生'
                    },
                    {
                        Top: '衣带渐宽终不悔',
                        Bottom: '为伊消得人憔悴'
                    },
                    {
                        Top: '相见时难别亦难',
                        Bottom: '东风无力百花残'
                    },
                    {
                        Top: '相见争如不见',
                        Bottom: '有情似如无情'
                    },
                    {
                        Top: '似此星辰非昨夜',
                        Bottom: '为谁风露立中宵'
                    },
                    {
                        Top: '直道相思了无益',
                        Bottom: '未妨惆怅是清狂'
                    },
                    {
                        Top: '人到情多情转薄',
                        Bottom: '而今真个不多情'
                    },
                    {
                        Top: '身无彩凤双飞翼',
                        Bottom: '心有灵犀一点通'
                    },
                    {
                        Top: '一寸相思千万绪',
                        Bottom: '人间没箇安排处'
                    },
                    {
                        Top: '天长地久有时尽',
                        Bottom: '此恨绵绵无绝期'
                    }
                ],
                onePoetry: ''
            }
        },
        mounted() {
            let _this = this;
            _this.onePoetry = _this.poetry[parseInt(Math.random()*10)];
            // console.log(_this.onePoetry);
        }
    }
</script>
<style>
    .index-box {
        position: relative;
        padding: .8rem 0 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .index-box h2 {
        position: relative;
        margin-bottom: .2rem;
        font-size: .4rem;
        color: #F29F3F;
        text-align: center;
        z-index: 1;
    }
    .fireWork {
        position: absolute;
        top: -.1rem;
        width: 4rem;
        height: 4rem;
        z-index: 0;
    }

    .index-box p {
        width: 100%;
        margin-top: 1.6rem;
        text-align: center;
        color: transparent;
        background: url(../../static/images/text-bg2.jpg) repeat;
        -webkit-background-size: contain;
        background-size: contain;
		-webkit-background-clip: text;
        background-clip: text;
        -webkit-animation: bgmove 4s linear infinite;
        animation: bgmove 4s linear infinite;
    }

    @keyframes bgmove {
        0,100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
    }

</style>
