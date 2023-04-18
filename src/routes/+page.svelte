<script lang="ts">
  import ImageCard from "$lib/components/ImageCard.svelte";
  import GalleryCover from "$lib/components/GalleryCover.svelte";
  import { routes } from "$lib/constants/route";
</script>

<div class="container-lg lg:w-1/2 mx-auto">
  <div class="h-96 mx-16 max-w-full">
    <GalleryCover></GalleryCover>
  </div>
  <div class="flex flex-col">
    <div class="bg-sky-100 m-16 text-center py-8 text-2xl rounded-xl">
      Hello, this is mingnho's hault where he kept the photos he's not so ashamed of.
    </div>
    <div class="w-full px-16 flex-col">
      {#each routes as route}
        <ImageCard title={route.date} coverImgUrl={route.coverImg} path={route.id}></ImageCard>
      {/each}
    </div>
  </div>
</div>
