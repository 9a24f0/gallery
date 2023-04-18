<script lang="ts">
  import { albumId } from "$lib/store/state";
  import { page } from "$app/stores";
  import { albums } from "$lib/constants/album";

  $: id = $page.params.id;
  $: urls = albums[id as keyof typeof albums];
  $: albumId.set(id)
</script>

<div class="flex flex-col lg:w-1/2 mx-auto px-16">
  {#each urls as url}
    <img src={url} alt="" class="my-8">
  {/each}
</div>