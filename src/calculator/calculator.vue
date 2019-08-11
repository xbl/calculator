<template>
  <div class="calculator">
    <input type="number" v-model="param" class="param"> + 11 = <span class="result">{{ result }}</span>
    <div>
      <button @click="calc" class="submit">计算</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CalculatorService from './service';

@Component
export default class Calculator extends Vue {
  private param!: number;
  private result: number = 0;

  public calc() {
    this.result = CalculatorService.calc(this.param);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
