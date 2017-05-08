<template>
    <div class="letter">
        <header><a href="#/index"><i class="fa fa-lg fa-arrow-left"></i></a>电影分享导航</header>
        <ul class="list-item">
            <li v-for='a in list_data'>
                <a :href="a.alt">
                    <img :src="a.avatars.small" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                list_data: []
            }
        },
        created() {
            var _this = this;
            var k = _this.$store.state.movieData;
            for (var i = 0; i < 10; i++) {
                console.log(k[i]);
                for (var j = 0; i < k[i].casts.length; j++) {
                    _this.list_data.push(k[i].casts[j]);
                }
            }
        },
        computed: {
            ...mapGetters(['movieData'])
        },
        methods: {

        }
    }
</script>
<style>
    .letter header {
        height: .8rem;
        text-align: center;
        font-size: .4rem;
        background-color: #30A080;
        color: #fff;
        line-height: .8rem;
        font-family: cursive;
    }

    .letter header a {
        position: absolute;
        left: .2rem;
        font-size: .2rem;
        vertical-align: middle;
    }
</style>
