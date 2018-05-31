<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-start
              .navbar-item
                strong 📻 Music Vue
          .navbar-end.navbar-menu

    .hero-body
      .container.has-text-centered
        h1.title Music Vue
        h2.subtitle Canciones que están Vue-nísimas
        vm-player
</template>
<script>
  import VmPlayer from '@/components/Player'
  export default {
    components: { VmPlayer }
  }
</script>

