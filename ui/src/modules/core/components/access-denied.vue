<template>
  <div class="text-md-center">
    <h1 class="display-4 font-weight-medium">403</h1>
    <h2 class="my-3 headline">Sorry, access denied.</h2>
    <div>
      <button @click="goTo({path: '/'})" color="primary">Go Home</button>
    </div>
  </div>
</template>

<script src="./access-denied.js"/>