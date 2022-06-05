<script>
  import Fruits from './array-element-sample.svelte';
</script>

<h2>App svelte</h2>
<ul class="fruits">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<Fruits />

<style>
  /* local */
  .fruits {
    background-color: burlywood;
  }
  /* global */
  :global(.fruits) {
    color: red;
  }
</style>
