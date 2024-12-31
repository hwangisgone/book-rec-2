<script lang="ts">
	import { page } from '$app/stores';

	import HomeIcon from 'lucide-svelte/icons/origami';
	import UserIcon from 'lucide-svelte/icons/user-round';
	import SettingIcon from 'lucide-svelte/icons/settings';
	import SparkleIcon from 'lucide-svelte/icons/sparkles';

	let { children } = $props();

	const routeMap = {
		'/explore': { name: "Explore", icon: HomeIcon },
		'/recommendation': { name: "Recommended", icon: SparkleIcon },
		'/profile': { name: "Profile", icon: UserIcon },
		// '/settings': { name: "Settings", icon: SettingIcon }
	}
</script>

<div class="flex h-screen">
	<!-- Sidebar -->
	<aside class="w-64 shadow-md">
		<nav class="p-4">
			<h2 class="mb-4 text-xl font-bold">Dashboard</h2>
			<ul class="space-y-2">
				{#each Object.entries(routeMap) as [route, routeInfo]}
					<li>
						<a aria-current={$page.url.pathname === route ? "page" : false} href={route}>
							<routeInfo.icon class="mr-2" size="1.2em" />
							{routeInfo.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>

	<!-- Main content area -->
	<div class="flex flex-1 flex-col">
		<!-- Header -->
		<header class="flex items-center justify-between px-6 py-4 shadow-sm">
			<h1 class="text-2xl font-semibold">
				{routeMap[$page.url.pathname]?.name}
<!-- 				{#if $page.url.pathname === '/'}
					Dashboard
				{:else if $page.url.pathname === '/profile'}
					Profile
				{:else if $page.url.pathname === '/settings'}
					Settings
				{/if} -->
			</h1>
			<div class="flex items-center space-x-4">
				<!-- Add user menu or action buttons -->
				<button class="rounded px-4 py-2 text-white"> Action </button>
			</div>
		</header>

		{@render children()}
	</div>
</div>

<style>
	a[aria-current='page'] {
		background-color: rgba(var(--color-primary-500) / 1); /* blue-500 */
		color: white;
	}

	a:hover {
		background-color: rgba(var(--color-primary-700) / 1); /* blue-500 */
		color: white;
	}
	a {
		display: flex; /* flex */
		align-items: center; /* items-center */
		padding: 0.5rem; /* p-2 (Tailwind default spacing scale translates to 0.5rem for "2") */
		border-radius: 0.25rem; /* rounded (Tailwind's "rounded" equals 0.25rem by default) */
		transition:
			color 0.2s,
			background-color 0.2s;
	}
</style>
