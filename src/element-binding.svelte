<script>
  import { tick } from 'svelte';

  let isShow = false;
  let inputEl;

  async function toggle() {
    isShow = !isShow;
    await tick();
    // const inputEl = document.querySelector('input');
    inputEl && inputEl.focus();
  }
</script>

<button on:click={toggle}>Edit</button>
{#if isShow}
  <!-- 여기서 this는 input을 가리킴 -->
  <input bind:this={inputEl} />
{/if}
