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
