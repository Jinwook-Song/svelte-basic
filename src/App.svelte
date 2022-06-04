<script>
  import { lifecycle, delayRender } from './lifecylce.js';

  let done = delayRender(); // 이 자체는 스토어 객체이다
  lifecycle();
</script>

{#if $done}
  <h1>Lifecycle</h1>
{/if}
