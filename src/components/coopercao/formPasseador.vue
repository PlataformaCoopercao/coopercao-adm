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
                      <input id="simple-input" v-model="walker.name" required />
                      <label class="control-label" for="simple-input">Nome</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-right" :class="{'has-error': errors.has('wrongEmail')}">
                    <div class="input-group">
                      <input id="wrongEmail" name="wrongEmail" v-model="walker.email" v-validate="'required|email'"
                        required />
                      <i class="fa fa-exclamation-triangle icon-right input-icon" v-show="errors.has('wrongEmail')"></i>
                      <label class="control-label" for="wrongEmail">Email</label><i class="bar"></i>
                      <small v-show="errors.has('wrongEmail')" class="help text-danger">{{
                        errors.first('wrongEmail')
                        }}
                      </small>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="walker.cpf" required />
                      <label class="control-label" for="simple-input">CPF</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="walker.profession" required />
                      <label class="control-label" for="simple-input">Profissão</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="walker.phoneNumber" required />
                      <label class="control-label" for="simple-input">Contato</label><i class="bar"></i>
                    </div>
                  </div>

                </fieldset>
              </div>

              <div class="col-md-4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="walker.address.district" required />
                      <label class="control-label" for="simple-input">Bairro</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="walker.address.cep" required />
                      <label class="control-label" for="simple-input">CEP</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="walker.address.street" required />
                      <label class="control-label" for="simple-input">Rua</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="walker.address.num" required />
                      <label class="control-label" for="simple-input">Número</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="walker.address.compl" required />
                      <label class="control-label" for="simple-input">Complemento</label><i class="bar"></i>
                    </div>
                  </div>

                </fieldset>
              </div>

              <div class="col-md-4">
                <!-- <fieldset>
                  <vuestic-multi-select :label="'Áreas de atendimento'" v-model="multiSelectModel" option-key="description"
                    v-bind:options="simpleOptions" />
                  <vuestic-multi-select :label="'Estado Civil'" v-model="multiSelectModel" option-key="description"
                    v-bind:options="simpleOptions" />
                </fieldset> -->

                <input type="button" class="btn btn-danger" v-on:click="submit" value="Cadastrar">

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
import axios from 'axios'
import BadgeColumn from './BadgeColumn.vue'
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
      walker: {
        name: '',
        phoneNUmber: '',
        address: {
          street: '',
          district: '',
          num: '',
          compl: '',
          cep: ''
        },
        areas: [],
        civilState: '',
        profession: '',
        cpf: '',
        photoUrl: 'https://randomuser.me/api/portraits/thumb/men/65.jpg'
      }
    }
  },
  methods: {
    submit: function () {
      axios.post('https://us-central1-coopercao-backend.cloudfunctions.net/registerWalker',
        {
          name: this.walker.name,
          email: this.walker.email,
          pass: 'coopercao',
          phoneNumber: this.walker.phoneNumber,
          cpf: this.walker.cpf,
          address: this.walker.address,
          areas: ['Boa Viagem'],
          profession: this.walker.profession,
          civilState: this.walker.civilState,
          photoUrl: this.walker.photoUrl
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

</script>

<style lang="scss">
  input {
    float: right;
  }

</style>
