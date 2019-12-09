<template>
  <div id="app">
    <meta charset="UTF-8">
    <div id="header">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Briefing from './components/Briefing'
import Details from './components/Details'


export default {
  name: 'app'
}
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body{
    margin: 0;
  }

  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
</style>
