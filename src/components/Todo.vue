<template>
	<div id="todo">
		<input type="text" v-bind:value="newTodo" placeholder="add new todo" v-on:keyup.enter="addTodo" />
		<ul>
			<li v-for='(list,index) in lists'>{{list.text}} <button v-on:click="removeTodo(index)">X</button></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				lists:this.$store.state.lists,
				newTodo:this.$store.state.newTodo
			}
		},
		methods:{
			addTodo(e){
				this.$store.commit('addTodo',e.target.value);
			},
			removeTodo(index){
				this.$store.commit('removeTodo',index);
			}
		}
	}
</script>

<style>
</style>