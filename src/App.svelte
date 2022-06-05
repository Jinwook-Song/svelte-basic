<script>
  import Example from './key-block.svelte';

  let reset = false;
</script>

<!-- Key Block은 연결된 데이터의 값이 변경될때마다 내용을 파괴하고 다시 랜더링 -->
{#key reset}
  <Example />
{/key}

<button on:click={() => (reset = !reset)}>Reset</button>
