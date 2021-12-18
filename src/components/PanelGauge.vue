<template>
  <DoughnutChart :options="options" :chartData="chartData"/>
  <p class="font-bold text-xl">{{value}}</p>
</template>

<script>
import {computed, defineComponent, ref, watch} from 'vue';
import {DoughnutChart} from 'vue-chart-3';

export default defineComponent({
  name: 'PanelGauge',
  components: {DoughnutChart},
  props: {
    label: String,
    color: String,
    min: Number,
    max: Number,
    value: Number,
  },
  setup() {

    const doughnutRef = ref();

    const chartMin = ref(0)
    const chartMax = ref(0)
    const chartValue = ref(0)
    const data = computed(() => ([chartValue.value, chartMax.value - chartMin.value - chartValue.value]));

    const options = ref({
      legend: {display: false},
      maintainAspectRatio: false,
      circumference: Math.PI + 1,
      rotation: -Math.PI - 0.5,
      cutoutPercentage: 64,
    });
    const chartLabel = ref('')
    const accentColor = ref('')
    const chartData = computed(() => ({
      labels: [chartLabel.value],
      datasets: [
        {
          data: [chartValue.value, chartMax.value - chartMin.value - chartValue.value],
          backgroundColor: [accentColor.value],
        }
      ]
    }));
    return {data, options, doughnutRef, chartData, chartLabel, accentColor, chartMin, chartMax, chartValue};
  },
  mounted() {
    this.chartLabel = this.label
    this.accentColor = this.color
    this.chartMin = this.min
    this.chartMax = this.max
    this.chartValue = this.value
    watch(
        () => this.value,
        () => {
          this.chartValue = this.value

        })
  }
});
</script>
