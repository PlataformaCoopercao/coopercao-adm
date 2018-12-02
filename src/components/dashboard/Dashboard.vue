<template>
  <div class="dashboard">

    <vuestic-widget class="no-padding no-v-padding">
      <h1 align=center>Bem vinda Ana</h1>
      <img  class ="img-fluid mx-auto d-block" src="../../assets/cooperlogo.png" width="40%">
    </vuestic-widget>

  </div>
</template>

<script>
import VuesticIconVuestic from '../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'

export default {
  name: 'dashboard',
  components: {
    VuesticIconVuestic
  },

  methods: {
    launchEpicmaxToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link'
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>

h1{
  margin-bottom: 2px;
}

</style>
