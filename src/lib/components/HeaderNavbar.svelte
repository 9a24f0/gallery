<script lang="ts">
  import { isHomePage, albumId } from "$lib/store/state";
  import NavigationButton from "$lib/components/NavigationButton.svelte";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  const navigateToHomePage = () => {
    isHomePage.set(true);
    albumId.set('');
    goto(base)
  }
</script>

<div class="lg:w-1/2 h-20 mx-auto px-16 text-2xl pt-4">
  {#if $isHomePage}
    <div class="text-center">
      <button on:click={navigateToHomePage}>Galerie de mingnho 📷</button>
    </div>
  {:else}
    <div class="flex justify-between">
      <NavigationButton type="previous"></NavigationButton>
      <button on:click={navigateToHomePage}>Galerie de mingnho 📷</button>
      <NavigationButton type="next"></NavigationButton>
    </div>
  {/if}
</div>