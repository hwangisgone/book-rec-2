<script lang="ts">
	let { children } = $props();
</script>

<nav class="w-full top-0 z-30 ease-in-out duration-200 sticky">
	<div class="flex items-center justify-between">
		<div>APP NAME</div>
		<!-- TODO: make search -->
		<div>Search here</div>
		
	</div>
</nav>


<div>
	{@render children()}
</div>


<!-- Navigation bar -->