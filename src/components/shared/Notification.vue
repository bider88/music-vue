<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-3
        .notification.is-danger.has-text-centered
          slot(name="body") Algo está saliendo mal ☹
</template>
<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>

