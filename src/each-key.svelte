<script>
  //   let fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
  let fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Orange' },
  ];

  function deleteFruits() {
    fruits = fruits.slice(1);
  }
</script>

<button on:click={deleteFruits}>Delete first</button>

<ul>
  <!-- 고유한 키를 설정하여 변화하지 않은 요소는 re-rendering 방지 -->
  <!-- 키는 문자 숫자가 권장되며 중복되면 안됨 -->
  {#each fruits as { id, name } (id)}
    <li>{name}</li>
  {/each}
</ul>
