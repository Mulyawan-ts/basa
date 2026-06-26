<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import DashboardNavbar from './DashboardNavbar.svelte';
	import DashboardSidebar from './DashboardSidebar.svelte';
	let { children } = $props();
</script>

<Toaster position="top-center" richColors></Toaster>
<DashboardNavbar></DashboardNavbar>
<DashboardSidebar></DashboardSidebar>

<main class="dashboard-layout">
	{@render children()}
</main>

<style></style>
