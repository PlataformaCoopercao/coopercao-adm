<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Cadastro de passeador'">
          <form>

            <div class="row">
              <div class="col-md-4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Nome</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-right" :class="{'has-error': errors.has('wrongEmail')}">
                    <div class="input-group">
                      <input id="wrongEmail" name="wrongEmail" v-model="wrongEmail" v-validate="'required|email'"
                        required />
                      <i class="fa fa-exclamation-triangle icon-right input-icon" v-show="errors.has('wrongEmail')"></i>
                      <label class="control-label" for="wrongEmail">Email</label><i class="bar"></i>
                      <small v-show="errors.has('wrongEmail')" class="help text-danger">{{
                        errors.first('wrongEmail')
                        }}
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Endereço</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Contato</label><i class="bar"></i>
                    </div>
                  </div>

                </fieldset>
              </div>

              <div class="col-md-4">
                <fieldset>
                  <vuestic-multi-select
                    :label="'Áreas de atendimento'"
                    v-model="multiSelectModel"
                    option-key="description"
                    v-bind:options="simpleOptions"
                  />
                </fieldset>

                <input type="submit" class="btn btn-danger" value="Cadastrar">

              </div>
            </div>

          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BadgeColumn from './BadgeColumn.vue'
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
    SpringSpinner
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
      queryParams: QueryParams,
      simpleOptions: [
        {
          id: 1,
          description: 'Boa Viagem',
        },
        {
          id: 2,
          description: 'Setúbal',
        },
        {
          id: 3,
          description: 'Espinheiro',
        },
      ],
      multiSelectModel: []
    }
  }
}

</script>

<style lang="scss">
  input {
    float: right;
  }

</style>
