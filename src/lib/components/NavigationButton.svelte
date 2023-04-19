<script lang="ts">
  import { isHomePage, albumId } from "$lib/store/state";
  import { base } from '$app/paths';
  import { goto } from "$app/navigation";
  import { albums } from "$lib/constants/album";

  export let type: string;

  $: ids = Object.keys(albums);
  $: currentIdIndex = ids.findIndex((id) => id === $albumId);

  const navigateToPreviousAlbum = () => {
    const previousId = ids[currentIdIndex - 1];
    goto(`${base}/${previousId}`);
  }

  const navigateToNextAlbum = () => {
    const nextId = ids[currentIdIndex + 1];
    goto(`${base}/${nextId}`);
  }

</script>

{#if !$isHomePage}
<div class="w-32">
  {#if type === 'previous'}
    <div class="text-left">
      {#if $albumId === ids[0]}
        <button>First</button>
      {:else}
        <button on:click={navigateToPreviousAlbum}>⬅ Previous</button>
      {/if}
    </div>
  {/if}
  {#if type === 'next'}
    <div class="text-right">
      {#if $albumId === ids[ids.length-1]}
        <button>Last</button>
      {:else}
        <button on:click={navigateToNextAlbum}>Next ➞</button>
      {/if}
    </div>
  {/if}
</div>
{/if}