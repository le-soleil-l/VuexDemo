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

//最终还是要在模板中使用，要暴露出去
export default new Vuex.Store({
    //把state状态放到里面
    state,
    mutations
})