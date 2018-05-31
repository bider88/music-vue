<template lang="pug">
  #app
    mv-header
    router-view
    mv-footer
</template>

<script>

import MvFooter from '@/components/layout/Footer'
import MvHeader from '@/components/layout/Header'

export default {
  name: 'app',
  components: { MvFooter, MvHeader }
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
  .is-active {
    -webkit-box-shadow: -1px 1px 14px 0px rgba(16,181,73,1)!important;
    -moz-box-shadow: -1px 1px 14px 0px rgba(16,181,73,1)!important;
    box-shadow: -1px 1px 14px 0px rgba(16,181,73,1)!important;
  }
</style>
