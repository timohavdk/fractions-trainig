<script lang="ts" src="./fraction.ts"></script>
<style lang="scss" src="./fraction.scss"></style>

<template>
  <div class="fraction">
    <div class="fraction__container fraction__numerator">
      <div
        v-for="_ in numeratorRef"
        class="fraction__part"
        :style="{width: blockSize + 'px', height: (blockSize < 50 ? blockSize : 50) + 'px'}"
      ></div>
    </div>
    <div class="fraction__container fraction__denominator">
      <div
        v-for="_ in denominatorRef"
        class="fraction__part"
        :style="{width: blockSize + 'px', height: (blockSize < 50 ? blockSize : 50) + 'px'}"
      ></div>
    </div>
  </div>
</template>