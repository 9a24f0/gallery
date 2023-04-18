<script lang="ts">
  import { isHomePage } from "$lib/store/state";
  import { goto } from "$app/navigation";

  export let title: string;
  export let path: string;
  export let coverImgUrl: string;

  const navigateToAlbumPage = (url: string) => {
    isHomePage.set(false);
    goto(url);
  }
</script>

<button class="p-8 bg-white mb-16 drop-shadow-2xl hover:scale-105 transition duration-500 ease-in-out" on:click={() => navigateToAlbumPage(path)}>
  <img src={coverImgUrl} alt="">
  <div class="h-16 grid place-content-end">
    {title}
  </div>
</button>