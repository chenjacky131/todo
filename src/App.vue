<template>
  <div id="app">
    	<Todo></Todo>
  </div>
</template>

<script>
import Todo from './components/Todo';
export default {
  name: 'app',
  computed:{
  	message(){
  		return this.$store.state.count
  	}
  },
  components:{
  	Todo
  }
}

</script>

<style>

</style>
