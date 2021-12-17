<template>
  <div class="flex">
    <PanelGauge>
    </PanelGauge>
  </div>

</template>

<script>
// @ is an alias to /src
import PanelGauge from '@/components/PanelGauge.vue'
import {getCurrentTelemetry} from '@/controllers/telemetry'
import {ref} from "vue";

export default {
  name: 'Home',
  components: {
    PanelGauge
  },
  setup() {
    const telemetry = ref({})
    return {telemetry}
  },
  methods: {
    async load() {
      this.telemetry = await getCurrentTelemetry()
    },
  }
}
</script>
