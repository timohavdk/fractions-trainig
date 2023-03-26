<script lang="ts" src="./app.ts"></script>
<style src="./app.scss"></style>

<template>
  <div class="app">
    <FractionInput
      class="app__fraction-input"
      v-for="index in 3"
      :number="index"
    />
	</div>
</template>
