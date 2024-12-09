<script lang="ts">
  import { page } from '$app/stores';
  // Import icons from lucide-react or another icon library
  // import { Home, Settings, User } from 'lucide-react';

  	let { children } = $props();
</script>

<div class="flex h-screen">
  <!-- Sidebar -->
  <aside class="w-64 shadow-md">
    <nav class="p-4">
      <h2 class="text-xl font-bold mb-4">Dashboard</h2>
      <ul class="space-y-2">
        <li>
          <a aria-current="page"
            href="/">
            <!-- <Home class="mr-2" /> -->
            Home
          </a>
        </li>
        <li>
          <a href="/profile">
            <!-- <User class="mr-2" /> -->
            Profile
          </a>
        </li>
        <li>
          <a href="/settings">
            <!-- <Settings class="mr-2" /> -->
            Settings
          </a>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- Main content area -->
  <div class="flex flex-col flex-1">
    <!-- Header -->
    <header class="shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-semibold">
        {#if $page.url.pathname === '/'}
          Dashboard
        {:else if $page.url.pathname === '/profile'}
          Profile
        {:else if $page.url.pathname === '/settings'}
          Settings
        {/if}
      </h1>
      <div class="flex items-center space-x-4">
        <!-- Add user menu or action buttons -->
        <button class="text-white px-4 py-2 rounded">
          Action
        </button>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1 p-6 overflow-y-auto">
    	{@render children()}
    </main>
  </div>
</div>

<style>
	a[aria-current="page"] {
		background-color: rgba(var(--color-primary-500) / 1);; /* blue-500 */
		color: white;		
	}

	a {
		@apply flex items-center p-2 rounded transition-colors;
	}
</style>