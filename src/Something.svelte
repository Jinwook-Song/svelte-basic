<script>
import { onDestroy, onMount } from "svelte";


onMount(() => {
    console.log('mounted')
    // return을 통해서도 onDestroy 가능
    return () => {
        console.log('destoried!')
    }
})

onDestroy(() => {
    console.log('Before destoried')
    // Destory 이전에 실행되기 떄문에 component를 읽을 수 있음
    const h1 = document.querySelector('h1')
    console.log(h1.innerText)
})
</script>


<h1>Something</h1>