<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

        <h2 class="md-title" style="flex: 1">Client Tracker</h2>

    </md-toolbar>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  
</style>
