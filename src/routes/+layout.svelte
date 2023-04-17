<script>
  import "../app.css";
  import HeaderNavbar from "$lib/components/HeaderNavbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="bg-amber-50 font-patua">
  <HeaderNavbar></HeaderNavbar>
  <slot />
  <Footer></Footer>
</div>
