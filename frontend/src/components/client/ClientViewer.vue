<template>
  <div>
    <div v-for="client in allClients">
      <ul>  
        <li>{{ client.firstName }}</li>
        <li>{{ client.lastName }}</li>
        <li>{{ client.clientPhone }}</li>
        <li>{{ client.clientNotes[0] }}</li>
        <li>{{ client.firstName }}</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'clientViewer',
  data () {
    return {
      allClients: []
    }
  },
  methods: {
    retrieveAll: function () {
      this.$http.get('http://localhost:3000/clients').then(response => {
        this.allClients = response.body
        console.log(response.body)
      })
    }
  },
  created () {
    this.retrieveAll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>