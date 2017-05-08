<template>
    <div class="rec-movie">
        <img :src="movieData[0].images.medium">
        <h1>{{ movieData[0].title }}({{ movieData[0].year }})</h1>
        <p>{{ movieData[0].original_title }}</p>
        <h3>主演</h3>
        <ul class="act">
            <a v-for="acts in movieData[0].casts" :href="acts.alt"><li >{{ acts.name }}</li></a>
        </ul>
        <h3>vuex装填计数：{{ count }}</h3>
    </div>
</template>
<script type="es6">
    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                count: ''
            }
        },
        computed: {
            ...mapGetters(['movieData'])
        },
        created() {
            const _this = this;
            _this.storeCount();
        },
        methods: {
            storeCount() {
                var _this = this;
                setInterval(function() {
                    _this.$store.dispatch('increment');
                    _this.count = _this.$store.state.count;
                },2000);
            }
        }
    }
</script>
<style media="screen">
    .rec-movie img {
        display: block;
        width: 2rem;
        height: 3rem;
        margin: 0 auto;
    }

    .rec-movie h1,.rec-movie p {
        margin-top: .1rem;
        font-size: .4rem;
        color: #DE8C68;
        text-align: center;
    }

    .rec-movie h3 {
        margin-top: .1rem;
        font-size: .32rem;
        color: #F29F3F;
        vertical-align: top;
    }

    .rec-movie .act a {
        display: inline-block;
        width: 33.3%;
        height: .5rem;
    }

    .rec-movie ul {
        height: .4rem;
    }

    .rec-movie .act li {
        display: inline-block;
        width: 100%;
        margin-top: .1rem;
        font-size: .24rem;
        line-height: 1;
        vertical-align: top;
        color: #DE8C68;
    }
</style>
