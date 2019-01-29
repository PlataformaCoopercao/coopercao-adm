<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Clientes'">
          <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td></td>
                <td>Nome</td>
                <td>Contato</td>
                <td>Email</td>
                <td>Bairro</td>
                <td>Plano</td>
                <td align="middle">Pagamento</td>
              </tr>
              </thead>
              <tbody>
                <tr v-for="client in clients" :key="client.phoneNumber">
                  <td></td>
                  <td>{{client.name}}</td>
                  <td>{{client.phoneNumber}}</td>
                  <td>{{client.email}}</td>
                  <td>{{client.address.district}}</td>
                  <td>CooperPlus</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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
import { SpringSpinner } from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'Table',
  components: {
    SpringSpinner
  },
  created () {
    axios.get('https://us-central1-coopercao-backend.cloudfunctions.net/getAllClients ')
      .then(response => {
        this.clients = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  data () {
    return {
      clients: []
    }
  }
}
</script>

<style lang="scss">

  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }

  .success-icon{
    color: #00D169;
  }
</style>
