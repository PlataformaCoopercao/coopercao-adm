<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Passeios'">
            <vuestic-tabs
        :names="['Histórico', 'Em aberto']"
        ref="tabs">
        <div :slot="'Histórico'">
            <historico-passeios></historico-passeios>
        </div>
        <div :slot="'Em aberto'">
            <passeios-em-aberto></passeios-em-aberto>
        </div>
      </vuestic-tabs>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import FeaturesTab from './FeaturesTab.vue'
import BadgeColumn from './BadgeColumn.vue'
import SidebarLink from './SidebarLink'
import HistoricoPasseios from './HistoricoPasseios'
import PasseiosEmAberto from './PasseiosEmAberto'
import FieldsDef from 'vuestic-components/vuestic-datatable/data/fields-definition'
import ItemsPerPageDef from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
import {
  SpringSpinner
} from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'Table',
  components: {
    SpringSpinner,
    SidebarLink,
    FeaturesTab,
    HistoricoPasseios,
    PasseiosEmAberto
  },
  data () {
    return {
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: true,
      tableFields: FieldsDef.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDef.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 6,
      queryParams: QueryParams
    }
  }
}

</script>

<style lang="scss">
  button {
    float: right;
  }

</style>
