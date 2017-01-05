import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    //state对象包含了应用的全部的状态
    state: {
        comm: {
            isCommon: true,
            message: 'test'
        }
    },
    
    //通过getters获得state中的状态，或者这些状态派生出来的一些状态
    getters: {
        commConfig: state => state.comm.isCommon,
        getMessage: state => state.comm.message
    },
    
    //如果想修改state中的状态值，只能通过提交mutation的方式
    mutations: {
        changeCommFlag(state, statu) {
            state.comm.isCommon = statu;
        },
        changeMessage(state, data) {
            state.comm.mesage = data;
        }
    },
    
    //action用来提交mutation，还可以包含异步操作。 action只会被 store.dispatch方法触发
    //如在某个组件的点击事件中：this.$store.dispatch('changeMessageAction', 'tset successful');
    actions: {
        changeCommFlagAction({commit}, statu) {
            commit('changeCommFlag', statu);
        },
        changeMessageAction({commit}, data) {
            commit('changeMessage', data);
        }
    }
});

export default store;