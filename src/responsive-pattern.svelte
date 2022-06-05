<script>
  let count = 0;

  // 선언
  $: double = count * 2;

  // 블록
  $: {
    console.log(count);
    console.log(double);
  }

  // 함수 실행
  $: count, log();

  // 즉시 실행 함수 (IIFE)
  $: count,
    (() => {
      console.log('iife: Jinwook');
    })();

  // 조건문(If)
  $: if (count > 0) {
    console.log('if:', double);
  }

  // 반복문(For)
  $: for (let i = 0; i < 3; i++) {
    count;
    console.log('for:', i);
  }

  // 조건문(Switch)
  $: switch (count) {
    case 1:
      console.log('switch:', count);
      break;
    default:
      console.log('swith: default');
  }

  // 유효범위
  $: {
    function scope1() {
      console.log('scope1');
      function scope2() {
        console.log('scope2');
        function scope3() {
          console.log('scope3', count);
        }
        scope3();
      }
      scope2();
    }
    scope1();
  }

  function log() {
    console.log('log fn');
  }
  function assign() {
    count++;
  }
</script>

<button on:click={assign}>Assign</button>
