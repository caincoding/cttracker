<template>

  <md-layout md-align="center">
    <md-card>
      <md-card-header md-align="center">
        <md-icon class="md-size-4x">account_circle</md-icon>
        <div class="md-title">LOGIN</div>
      </md-card-header>

      <md-card-content>
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container md-clearable>
            <label>Username</label>
            <md-input required :value="userLogin.username"></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" required :value="userLogin.password"></md-input>
          </md-input-container>
        </form>
      </md-card-content>
      <md-layout md-align="center">
        <md-card-actions>
          <md-button @click.prevent="fuckingWork">LOGIN</md-button>
          <md-button>Password Reset</md-button>
        </md-card-actions>
      </md-layout>
    </md-card>
  </md-layout>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    fuckingWork: () => {
      console.log(this.userLogin.username)
    }
  }
}
</script>
<style scoped>
.md-card {
  width: 350px;
}
.md-card-header {
  text-align: center;
}

</style>