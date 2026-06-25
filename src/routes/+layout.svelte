<script lang="ts">
	import './layout.css';
  import Navbar from '$lib/component/Navbar.svelte';
  import Footer from '$lib/component/Footer.svelte';

	let { children } = $props();
</script>

<Navbar/>
<main>
  {@render children()}
</main>
