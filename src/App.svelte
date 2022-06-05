<script>
  import { tick } from 'svelte';

  let name = 'world';

  async function handler() {
    name = 'jw';
    await tick(); // 화면이 갱신될때까지 기다려주는 함수. Promise를 반환
    const h1 = document.querySelector('h1');
    console.log(h1.innerText);
  }
</script>

<h1 on:click={handler}>hello {name}!</h1>
