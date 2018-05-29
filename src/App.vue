<template lang="pug">
  #app
    section.section
      nav.navbar.has-shadow
        .container
          .field-body
            .field.has-addons
              .control.is-expanded
                input.input.is-large(type="text" placeholder="Buscar canciones" v-model="searchQuery")
              .control
                a.button.is-info.is-large(@click="search") Buscar
              .control
                a.button.is-danger.is-large &times;
          p(v-show="showResultMessage")
            small {{ searchMessage }}
      .container
        .columns
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
</template>

<script>

const tracks = [
  {
    name: 'Cancion',
    artist: 'Alguien'
  },
  {
    name: 'Otra canción',
    artist: 'Artista'
  },
  {
    name: 'Deja de llorar',
    artist: 'El dolido'
  }
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      showResultMessage: false
    }
  },
  computed: {
    searchMessage () {
      return `Se encontraron ${this.tracks.length} resultado${this.tracks.length !== 1 ? 's' : ''}`
    }
  },
  methods: {
    search () {
      this.showResultMessage = true
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'

</style>
