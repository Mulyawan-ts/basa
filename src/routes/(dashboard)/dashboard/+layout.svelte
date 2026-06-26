<script lang="ts">
  import {Toaster} from 'svelte-sonner';
  let {children} = $props;
</script>

<Toaster position="top-center" richColors></Toaster>

<main class="dashboard-layout">
    {@render children()}
</main>

<style></style>