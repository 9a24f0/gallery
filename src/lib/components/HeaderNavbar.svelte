<script lang="ts">
  import { isHomePage } from "$lib/store/state";
  const navigateToHomePage = () => {
    isHomePage.set(true);
    window.location.href = "/";
  }
</script>

<div class="lg:w-1/2 h-20 mx-auto px-16 flex justify-between text-2xl">
    <button>⬅ Previous</button>
  <button on:click={navigateToHomePage}>Galerie de mingnho 📷</button>
    <button>Next ➞</button>
</div>