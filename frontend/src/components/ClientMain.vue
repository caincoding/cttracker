<template>
  <div>
    <h1>CLIENT MAIN COMPONENT</h1>
    <clientViewer></clientViewer>
    
  </div>
</template>

<script>
import clientViewer from './client/ClientViewer'

export default {
  name: 'clientMain',
  data () {
    return {
    }
  },
  components: {
    'clientViewer': clientViewer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>