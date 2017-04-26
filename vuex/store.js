//引入vue及vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count:1,
	lists:[
		{text:'todo1'},
		{text:'todo2'}
	],
	newTodo:''
}
const mutations = {
	addTodo(state,n){
		state.lists.push({text:n});
	},
	removeTodo(state,index){
		state.lists.splice(index,1);
	}
}
export default new Vuex.Store({
    state,
    mutations
})