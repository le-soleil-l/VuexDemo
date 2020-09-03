import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//完成这一步vuex已经安装完并集成到项目当中了

const state={
    //以前是在模板里声明
    //现在是在数据仓库里声明一个常量
    count:3
}

const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state,n){
        state.count-=n;
    }
}

//getters过滤器，可以看作是store里面的computed
const getters={
    count:state=>state.count+=10

    // count:function(state){
    //     return state.count+=100;
    // }
}

//actions可以调用mutations里的方法
const actions={
    // 给add升级。传入的参数是context上下文对象
    addAction(context){
        //调用mutations的方法，用commit
        context.commit('add',10);
        setTimeout(()=>context.commit('reduce',1),5000);
        console.log('我比reduce先执行了')
    },
    // 传的是包装起来的commit对象
    reduceAction({commit}){
        commit('reduce',3);
    }
}

const moduleA={
    state,mutations,getters,actions
}

//最终还是要在模板中使用，要暴露出去
export default new Vuex.Store({
    //把state状态放到里面
    // state,mutations,getters,actions

    // modules后跟的是一个对象{ 模块名：模块 }
    modules:{a:moduleA}
})