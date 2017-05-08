<template>
    <div id="app">
        <k-head v-show="isShow"></k-head>
        <c-nav v-show="isShow"></c-nav>
        <router-view v-show="totalShow"></router-view>
    </div>
</template>

<script type="es6">

import kHead from './components/kHead'
import cNav from './components/cNav'
import mainBox from './components/mainBox'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
      kHead,
      mainBox,
      cNav
  },
  created() {
      let _this = this;
      _this.$store.dispatch('getMovieData');
  },
  computed: {
      ...mapGetters(['isShow'])
  },
  data() {
      return {
          isShowa: true,
          isShowb: true,
          isShowc: true,
          totalShow: true
      }
  }
}
</script>
