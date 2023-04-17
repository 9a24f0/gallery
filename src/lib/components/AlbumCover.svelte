<script lang="ts">
  import { isHomePage, albumIndex } from "$lib/store/state";
  import { routes } from "$lib/constants/route";

  const navigateToAlbumPage = (idx: number) => {
    isHomePage.set(false);
    albumIndex.set(idx);
  }
</script>

{#each routes as route}
  <button class="p-8 bg-white mb-16 drop-shadow-2xl hover:scale-105 transition duration-500 ease-in-out" on:click={navigateToAlbumPage(route.idx)}>
    <a href={route.url}>
      <img src={route.coverImg} alt="">
      <div class="h-16 grid place-content-end">
        {route.url}
      </div>
    </a>
  </button>
{/each}