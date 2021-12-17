<template>
  <div class="flex">
    <PanelGauge>
    </PanelGauge>
  </div>

</template>

<script>
// @ is an alias to /src
import PanelGauge from '@/components/PanelGauge.vue'

export default {
  name: 'Home',
  components: {
    PanelGauge
  }
}
</script>
