<script>
  let active = false;
  let color = {
    t: 'tomato',
    w: '#FFF',
  };
  let letterSpacing = 'letter-spacing: 5px;';
</script>

<button on:click={() => (active = !active)}>Toggle</button>

<!-- <div class={active ? 'active' : ''}>Hello</div> -->

<!-- svelte class 지시어 -->
<div class:active>Hello</div>
<div class:hello={active}>Hello</div>

<h2 style="background-color: {color.t}; color: {color.w}; {letterSpacing}">
  text
</h2>

<style>
  div {
    width: 200px;
    aspect-ratio: 1;
    background-color: tomato;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    transition: 0.5s;
  }
  .active {
    width: 300px;
    border-radius: 50%;
    background-color: teal;
  }
  .hello {
    width: 300px;
    border-radius: 50%;
    background-color: magenta;
  }
</style>
