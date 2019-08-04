<template>
  <div id="layout">
    <div v-if="isLoading" class="wrap-loading d-flex justify-content-center align-items-center">
      <div class="custom-page-loading spinner-border"></div>
    </div>
    <LayoutClient v-if="layout === 'client'" />
    <LayoutAdmin v-else />
  </div>
</template>

<script src="./layout.js"/>

<style lang="scss" scoped>
  #layout {
    .wrap-loading {
      width: 100vw;
      height: 100vh;
      position: absolute;
      .custom-page-loading {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
