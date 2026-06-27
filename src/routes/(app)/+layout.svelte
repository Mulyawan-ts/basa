<script lang="ts">
	// import css
	import '../layout.css';

	// import component
	import Navbar from '$lib/component/Navbar.svelte';
	import Footer from '$lib/component/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	// configuration for login page
	let isLogin = $derived(page.url.pathname === '/login');
</script>

<!-- describe navbar component -->
<Navbar></Navbar>

<!-- descrive main page -->
<main>
	{@render children()}
</main>

<!-- footer disable for login -->
{#if !isLogin}
	<Footer></Footer>
{/if}
