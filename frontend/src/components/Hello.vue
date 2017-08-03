<template>
  <div>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Client Name</md-table-head>
          <md-table-head md-numeric>Client Phone</md-table-head>
          <md-table-head md-numeric>Client Date</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(client, index) in clients" :key="index">
          <md-table-cell>{{ client.firstName }} {{ client.lastName }}</md-table-cell>
          <md-table-cell>{{ client.clientPhone }}</md-table-cell>
          <md-table-cell>{{ client.created_At }}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      clients: [],
      token: localStorage.getItem('token')
    }
  },
  created: function () {
    this.$http.get('http://localhost:3000/clients', {headers: {Authorization: this.token}})
      .then(response => {
        this.clients = response.body
        console.log(response.body)
      })
  }
}
</script>


<style scoped>

</style>
