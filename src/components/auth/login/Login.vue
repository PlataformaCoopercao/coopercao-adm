<template>
  <div class="login">
    <h2>Bem vindo</h2>
    <form name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" v-model="email" required="required" />
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" v-model="password" required="required" />
          <label class="control-label" for="password">senha</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button @click="login" class="btn btn-primary">
          {{'auth.login' | translate}}
        </button>
        <!-- <router-link class='link' :to="{name: 'signup'}">{{'auth.createAccount' | translate}}</router-link> -->
        <spring-spinner v-if="loading" :animation-duration="2000" :size="70" color="red" />
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import {
  SpringSpinner
} from 'epic-spinners'

export default {
  name: 'login',
  components: {
    SpringSpinner
  },
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    login: function () {
      this.loading = true
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/admin')
        })
        .catch(error => {
          this.loading = false
          this.showToast('Dados de login incorretos', {
            icon: 'fa-exclamation-triangle',
            position: 'bottom-left',
            duration: 2500,
            fullWidth: false
          })
          console.log(error)
        })
    }
  }
}

</script>

<style lang="scss">
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;

      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }

    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }

</style>
