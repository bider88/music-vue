<template lang="pug">
    .card
      .card-image
        figure.image.is-1by1.mouse-pointer(@click="selectTrack")
          img(:src="track.album.images[0].url")
      .card-content
        .media
          .media-left
            figure.image.is-48x48
              img(:src="track.album.images[0].url")
          .media-content
            p.title.is-6
              strong {{ track.name }}
            p.subtitle.is-6 {{ track.artists[0].name }}
        .content
          small {{ track.duration_ms }}
            nav.level
              .level-left
                a.level-item
                  span.icon.is-small(@click="selectTrack") ▶
</template>
<script>
export default {
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    }
  }
}
</script>
<style lang="scss" scoped>
  .card {
    -webkit-box-shadow: -2px 2px 16px 1px rgba(186,252,208,1);
    -moz-box-shadow: -2px 2px 16px 1px rgba(186,252,208,1);
    box-shadow: -2px 2px 16px 1px rgba(186,252,208,1);
  }
  .mouse-pointer {
    cursor: pointer;
  }
</style>


