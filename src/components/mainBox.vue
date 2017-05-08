<template>
    <div class="main-box">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script type="es6">
import Index from './index'
export default {
    components: {
        Index
    }
}
</script>
<style media="screen">
    .main-box .demo-entry {
        font-size: .36rem;
    }


</style>
