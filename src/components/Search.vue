<template lang="pug">
  main
    section.section
      nav.navbar  
        .container
          .field-body
            form.field.has-addons(@submit.prevent="search")
              .control.is-expanded
                input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
              .control
                a.button.is-info.is-large(@click="search") Buscar
              .control
                a.button.is-danger.is-large(@click="resetSearchQuery") &times;
      .container
        p(v-show="showResultMessage")
          small {{ searchMessage }}
      transition(name="move")
        mv-notification(v-show="showNotification")
          p(slot="body") No se encontraron resultados ☹
      .spinner
        ring-loader(:loading="loading", :color="color", :size="size")
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            mv-track(v-blur="t.preview_url" :class="{ 'is-active' : t .id ===selectedTrack }", :track="t", @select="setSelectedTrack")
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader'

import trackService from '@/services/track'

import MvTrack from '@/components/Track'

import MvNotification from '@/components/shared/Notification'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      showResultMessage: false,
      loading: false,
      color: '#1496ED',
      size: '60px',
      selectedTrack: '',
      showNotification: false
    }
  },
  components: { RingLoader, MvTrack, MvNotification },
  computed: {
    searchMessage () {
      return `Se encontraron ${this.tracks.length} resultado${this.tracks.length !== 1 ? 's' : ''}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.showResultMessage = false
      this.tracks = []
      this.loading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.showResultMessage = true
          this.showNotification = res.tracks.total === 0
          this.loading = false
        })
    },
    resetSearchQuery () {
      this.searchQuery = ''
      this.tracks = []
      this.showResultMessage = false
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 30px;
  }
  .spinner {
    margin: 50px auto;
    width: 75px;
  }
  .is-active {
    -webkit-box-shadow: -1px 1px 14px 0px rgba(16,181,73,1)!important;
    -moz-box-shadow: -1px 1px 14px 0px rgba(16,181,73,1)!important;
    box-shadow: -1px 1px 14px 0px rgba(16,181,73,1)!important;
  }
</style>
