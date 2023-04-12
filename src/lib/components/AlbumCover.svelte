<script lang="ts">
  const navigateToAlbumPage = () => {
    window.location.href="/01"
  }
</script>

<button class="p-8 bg-white mb-16 drop-shadow-2xl hover:scale-105 transition duration-500 ease-in-out" on:click={navigateToAlbumPage}>
  <img src="https://images.unsplash.com/photo-1581194705649-583ace83e714?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80" alt="">
  <div class="h-16 grid place-content-end">
    Mar 23, 2023
  </div>
</button>