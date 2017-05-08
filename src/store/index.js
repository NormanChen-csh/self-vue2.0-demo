/**
 * Created by Administrator on 2016/11/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        movieData: [],
        isShow: true
    },
    getters: {
        isShow: state=>state.isShow,
        movieData: state=>state.movieData
    },
    mutations: {
        increment (state) {
            state.count++
        },
        getMovieData (state) {
            Vue.axios.get('/api/movie/in_theaters').then(response => {
                let data = response.data.subjects;
                state.movieData = data;
            }, response => {
                console.log('a');
            })
        },
        isShow (state) {
            state.isShow = false;
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        },
        getMovieData(context) {
            context.commit('getMovieData')
        },
        isShow (context) {
            context.commit('isShow')
        }
    }
});

export default store
