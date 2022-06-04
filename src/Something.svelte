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
