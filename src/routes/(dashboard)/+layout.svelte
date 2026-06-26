<script lang="ts">
	import '../layout.css';
	import { page } from '$app/state';
	import { Toaster } from 'svelte-sonner';
	import DashboardNavbar from './dashboard/DashboardNavbar.svelte';
	import DashboardSidebar from './dashboard/DashboardSidebar.svelte';
	import DashboardBreadcrumb from './DashboardBreadcrumb.svelte';
	let { children } = $props();
</script>

<Toaster position="top-center" richColors />
<div class="flex flex-col h-screen w-screen overflow-hidden bg-base-200">
	<div class="flex-none w-full">
		<DashboardNavbar />
	</div>

	<div class="flex flex-1 w-full min-h-0">
		<aside class="w-64 flex-none bg-base-100 border-r border-base-300">
			<DashboardSidebar />
		</aside>

		<div class="flex-1 flex flex-col min-w-0 bg-base-100">
			<header class="flex-none border-b border-base-300 px-6 py-3">
				<DashboardBreadcrumb />
			</header>

			<main class="flex-1 p-6 overflow-y-auto bg-base-200/50">
				{@render children()}
			</main>
		</div>
	</div>
</div>
