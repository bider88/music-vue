<template lang="pug">
  #app
    mv-header
    section.section
      nav.navbar.has-shadow
        .container
          .field-body
            form.field.has-addons(@submit.prevent="search")
              .control.is-expanded
                input.input.is-large(type="text" placeholder="Buscar canciones" v-model="searchQuery")
              .control
                a.button.is-info.is-large(@click="search") Buscar
              .control
                a.button.is-danger.is-large(@click="resetSearchQuery") &times;
      .container
        p(v-show="showResultMessage")
          small {{ searchMessage }}
      .container.results
        .columns(v-for="t in tracks") 
          .column.is-three-fifths.is-offset-one-fifth
            .box {{ t.name }} - {{ t.artists[0].name }}
      .container
        .spinner
          ring-loader(:loading="loading" :color="color" :size="size")
    mv-footer
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import trackService from './services/track'
import MvFooter from './components/layout/Footer.vue'
import MvHeader from './components/layout/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      showResultMessage: false,
      loading: false,
      color: '#1496ED',
      size: '60px'
    }
  },
  components: {
    RingLoader,
    MvFooter,
    MvHeader
  },
  computed: {
    searchMessage () {
      return `Se encontraron ${this.tracks.length} resultado${this.tracks.length !== 1 ? 's' : ''}`
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
          this.loading = false
        })
    },
    resetSearchQuery () {
      this.searchQuery = ''
      this.tracks = []
      this.showResultMessage = false
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results {
    margin-top: 30px;
  }
  .spinner {
    margin: 50px auto;
    width: 75px;
  }
</style>
