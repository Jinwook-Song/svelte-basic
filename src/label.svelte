<script>
  import { tick } from 'svelte';

  let count = 0;
  let double = 0;

  // Label 구문을 통한 반응성 유도
  // 내부에 반응성을 가지는 데이터가 존재하고 그 데이터가 갱신되어 실제로 화면이 바뀌는 반응성이 일어나면 반응성 구문 ($:)이 실행됨
  $: {
    double = count * 2;
    console.log('double');
  }

  //   $: double = count * 2;

  async function assign() {
    count++;
    console.time('timer');
    await tick();
    console.timeEnd('timer');
    console.log(double);
  }
</script>

<button on:click={assign}>Assign</button>

<h2>{count}</h2>
<h2>{double}</h2>
