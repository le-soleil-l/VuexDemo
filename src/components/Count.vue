<template>
    <div>
        <h2>{{msg}}</h2><hr>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <p>
            <!-- 注意绑定的点击事件写法，$store.commit('func-name') -->
            <button style="width:60px" @click="$store.commit('add',10)">add</button>
            <button style="width:60px" @click="reduce(3)">reduce</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState,mapMutations } from 'vuex'

export default {
    data(){
        return{
            msg:'Hi Guys,Welcome to My Vuex!'
        }
    },

    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },

    //mapState里面是一个对象,ES6箭头函数语法
    // computed:mapState({
    //     count: state=>state.count
    // }),

    //ES5语法
    // computed:mapState({
    //     count:function(state){
    //         return state.count;
    //     }
    // }),

    //mapState里面放数组
    computed:mapState(['count']),
    methods:mapMutations(['add','reduce']),
    store
}
</script>

<style></style>