<template>
  <div class="flex align-items-center justify-content-center">
    <Card class="flex-0 flex m-2">
      <template #title>
        Температура
      </template>
      <template #content>
        <PanelGauge :min="0" :max="100" :value="telemetry.motorTemp" label="Температура" color="rgba(255,0,57,0.57)">
        </PanelGauge>
      </template>
    </Card>
    <Card class="flex-0 flex m-2">
      <template #title>
        Напряжение панелей
      </template>
      <template #content>
        <PanelGauge :min="0" :max="100" :value="telemetry.MPPTVolts" label="Напряжение панелей" color="rgba(59,130,246,0.8)">
        </PanelGauge>
      </template>
    </Card>
    <Card class="flex-0 flex m-2">
      <template #title>
        Мощность панелей
      </template>
      <template #content>
        <PanelGauge :min="0" :max="100" :value="telemetry.MPPTWatt" label="Мощность панелей" color="rgba(59,130,246,0.8)">
        </PanelGauge>
      </template>
    </Card>
  </div>

</template>

<script>
import PanelGauge from '@/components/PanelGauge.vue'
import {getCurrentTelemetry} from '@/controllers/telemetry'
import {ref} from "vue";

export default {
  name: 'Home',
  components: {
    PanelGauge
  },
  setup() {
    const telemetry = ref({motorTemp: 0})
    return {telemetry}
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      let resp = await getCurrentTelemetry()
      this.telemetry = resp.data
      console.log(this.telemetry)
    },
  }
}
</script>

