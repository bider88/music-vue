<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        mv-track(:track="track")
</template>
<script>
import MvTrack from '@/components/Track'
import trackService from '@/services/track'
export default {
  components: { MvTrack },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id
    trackService.getById(id).then(
      res => {
        this.track = res
      }
    )
  }
}
</script>
<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>


