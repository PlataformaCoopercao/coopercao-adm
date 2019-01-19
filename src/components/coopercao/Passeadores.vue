<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Passeadores'">
          <div class="table-responsive">
            <table class="table table-striped table-sm ">
              <thead>
                <tr>
                  <td>Nome</td>
                  <td>Contato</td>
                  <td>Email</td>
                  <td>Bairro</td>
                  <td>Passeios</td>
                  <td>Média</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="walker in walkers" :key="walker.id">
                  <td>{{walker.name}}</td>
                  <td>{{walker.phoneNumber}}</td>
                  <td>{{walker.email}}</td>
                  <td>{{walker.address.district}}</td>
                  <td>{{walker.total_walks}}</td>
                  <td>{{walker.score}}</td>
                </tr>
              </tbody>
            </table>
            <router-link :to="{name:'formPasseador'}">
              <button class="btn btn-primary">{{'Novo' | translate}}</button>
            </router-link>

          </div>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import BadgeColumn from './BadgeColumn.vue'
import SidebarLink from './SidebarLink'
import {
  SpringSpinner
} from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'Table',
  components: {
    SpringSpinner,
    SidebarLink
  },
  created () {
    axios.get('https://us-central1-coopercao-backend.cloudfunctions.net/getAllWalkers')
      .then(response => {
        this.walkers = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  data () {
    return {
      walkers: []
    }
  }
}

</script>

<style lang="scss">
  button {
    float: right;
  }

</style>
