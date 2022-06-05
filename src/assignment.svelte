<script>
  let name = 'Jinwook';
  let fruits = ['apple', 'orange', 'banana'];
  let user = {
    name: 'jw',
    depth: {
      a: 'b',
    },
    numbers: [1, 2],
  };
  let numbers = user.numbers;

  function assign() {
    name = 'Song';
    // fruits.push('orange');
    // fruits = fruits;
    fruits = [...fruits, 'orange'];
    user.name = 'new';
    user.depth.a = 'c';
    user.numbers.push(3);

    // user를 명시하였기 떄문에 반응성이 생겨서 user가 재할당됨.
    // 반대로 user.name, user.depth를 실행하지 않은 경우 push는 동작하지 않음.
  }
</script>

<button on:click={assign}>Assign</button>

<h2>{name}</h2>
<h3>{fruits}</h3>
<h3>{user.name}</h3>
<h3>{user.depth.a}</h3>
<h3>{user.numbers}</h3>
<h3>{numbers}</h3>
