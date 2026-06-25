<script lang="ts">
  let {label,href, onclick} = $props();
</script>

{#if href}
    <a {href} class="btn">{label}</a>
{:else}
    <button {onclick} class="btn">{label}</button>
{/if}

<style lang="css"></style>