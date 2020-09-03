<template>
    <div>
        <h2>{{msg}}</h2><hr>
        <h3>{{$store.state.count}}--{{count}}</h3>

        <!-- 模块组形式 -->
        <h3>{{$store.state.a.count}}--{{count}}</h3>
        
        <p>
            <!-- 注意绑定的点击事件写法，$store.commit('func-name') -->
            <button style="width:60px" @click="$store.commit('add',10)">add</button>
            <button style="width:60px" @click="reduce(3)">reduce</button>
        </p>
        <p>
            <button style="width:60px" @click="addAction">add</button>
            <button style="width:60px" @click="reduceAction">reduce</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'

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
    //因为已经写了computed操作count，再写一个computed放getters操作count会把之前的覆盖
    //使用到了ES6的扩展运算符，就是三个点...
    computed:{
        // 模块组形式不可用
        //...mapState(['count'])
        
        // count(){
        //     return this.$store.getters.count;
        // }

        // 引入了mapGetters，简写上述代码
        //...mapGetters(['count'])

        // 模块组形式可用
        count(){
            return this.$store.state.a.count;
        }
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>

<style></style>