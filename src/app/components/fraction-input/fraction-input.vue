<script lang="ts" src="./fraction-input.ts"></script>
<style lang="scss" src="./fraction-input.scss"></style>

<template>
  <div class="fraction-input">
    <div class="fraction-input__number">
      <div class="fraction-input__number-title">
        {{ number }}
      </div>
    </div>
    <label class="fraction-input__label-numerator" for="numerator">Числитель</label>
    <input class="fraction-input__numerator" id="numerator" v-model="numerator">
    <label class="fraction-input__label-denominator" for="denominator">Знаменатель</label>
    <input class="fraction-input__denominator" id="denominator" v-model="denominator">
    <Fraction
      class="fraction-input__fraction"
      :numerator="numerator"
      :denominator="denominator"
    />
  </div>
</template>
