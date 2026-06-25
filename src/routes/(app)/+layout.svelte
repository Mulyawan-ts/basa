<script lang="ts">
	import '../layout.css';

  import Navbar from '$lib/component/Navbar.svelte';
  import Footer from '$lib/component/Footer.svelte';
  import {page} from '$app/state';

	let { children } = $props();
  let isLogin = $derived(page.url.pathname === '/login');

</script>

<Navbar></Navbar>
<main>
  {@render children()}
</main>

{#if !isLogin}
    <Footer></Footer>
{/if}