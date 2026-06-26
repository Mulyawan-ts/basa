<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import DashboardNavbar from '$lib/component/dashboard/DashboardNavbar.svelte';
	import Sidebar from '$lib/component/dashboard/Sidebar.svelte';
	let { children } = $props();
</script>

<Toaster position="top-center" richColors></Toaster>
<DashboardNavbar></DashboardNavbar>
<Sidebar></Sidebar>

<main class="dashboard-layout">
	{@render children()}
</main>

<style></style>
