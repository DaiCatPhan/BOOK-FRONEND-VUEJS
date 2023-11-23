<template >
  <div class="wrapper">
    <div class="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for might be in another castle.</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.wrapper {
    min-height: 80vh;
}
.not-found-container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #ff6347; /* Tomato color */
}

p {
  color: #555;
}
</style>