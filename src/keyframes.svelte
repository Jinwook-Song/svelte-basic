<div class="box" />

<style>
  .box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    aspect-ratio: 1;
    background-color: tomato;
    border-radius: 20px;
    animation: zoom 1s ease-in-out infinite alternate;
  }

  /* -global-(animationName) */
  @keyframes -global-zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
</style>
