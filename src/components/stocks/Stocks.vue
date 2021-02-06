<template>
	<div>
		<stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
	</div>
</template>

<script>
	import Stock from "./Stock";
	export default {
		data() {
			return {
			};
		},
    computed: {
      stocks() {
        return this.$store.getters.stocks; 
      }
    },
		components: {
			Stock,
		},
	};
</script>

<style scoped>
</style>