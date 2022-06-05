<script>
  let fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Apple' },
    { id: 5, name: 'Orange' },
  ];
  let todos = [];
  let fruits2D = [
    [1, 'Apple'],
    [2, 'Banana'],
    [3, 'Cherry'],
    [4, 'Apple'],
    [5, 'Orange'],
  ];
  let user = {
    name: 'jinwook',
    age: 20,
    email: 'jinwook@gmail.com',
  };
</script>

<section>
  <h2>기본</h2>
  <ul>
    {#each fruits as fruit}
      <li>{fruit.name}</li>
    {/each}
  </ul>
</section>

<section>
  <h2>순서 (index)</h2>
  <ul>
    {#each fruits as fruit, idx}
      <li>{idx}: {fruit.name}</li>
    {/each}
  </ul>
</section>

<section>
  <h2>아이템 고유화(key)</h2>
  <ul>
    {#each fruits as fruit, idx (fruit.id)}
      <li>{idx}: {fruit.name}</li>
    {/each}
  </ul>
</section>

<section>
  <h2>빈 배열 처리(else)</h2>
  <ul>
    {#each todos as todo, idx (todo.id)}
      <li>{idx}: {todo.name}</li>
    {:else}
      <div>아이템 X</div>
    {/each}
  </ul>
</section>

<section>
  <h2>구조 분해(destructuring)</h2>
  <ul>
    {#each fruits as { id, name } (id)}
      <li>{name}</li>
    {/each}
  </ul>
</section>

<section>
  <h2>2차원 배열 구조 분해(destructuring)</h2>
  <ul>
    {#each fruits2D as [id, name] (id)}
      <li>{name}</li>
    {/each}
  </ul>
</section>

<section>
  <h2>나머지 연산자(rest)</h2>
  <ul>
    {#each fruits as { id, ...rest } (id)}
      <li>{rest.name}</li>
    {/each}
  </ul>
</section>

<section>
  <h2>객체 데이터</h2>
  <ul>
    {#each Object.entries(user) as [key, value] (key)}
      <li>{key}: {value}</li>
    {/each}
  </ul>
</section>
