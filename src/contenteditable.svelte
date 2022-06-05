<script>
  let innerHTML = '';
  let textContent = 'Hello world';
</script>

<div contenteditable bind:innerHTML bind:textContent />

<div>{innerHTML}</div>
<div>{textContent}</div>
<div>{@html innerHTML}</div>

<style>
  div {
    border: 1px solid red;
    margin-bottom: 10px;
  }
</style>
