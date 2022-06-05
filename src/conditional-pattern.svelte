<script>
  let count = 0;
</script>

<button on:click={() => count++}>+</button>
<button on:click={() => count--}>-</button>

<h2>{count}</h2>

<section>
  <h2>if</h2>
  {#if count > 3}
    <div>couont &gt; 3</div>
  {/if}
</section>

<section>
  <h2>if, else</h2>
  {#if count > 3}
    <div>couont &gt; 3</div>
  {:else}
    <div>couont &lt;= 3</div>
  {/if}
</section>

<section>
  <h2>if, else if</h2>
  {#if count > 3}
    <div>couont &gt; 3</div>
  {:else if count === 3}
    <div>couont = 3</div>
  {:else}
    <div>couont &lt; 3</div>
  {/if}
</section>
