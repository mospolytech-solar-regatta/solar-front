<template>
  <div class="mb-2" id="nav">
    <Menubar :model="items">

    </Menubar>

  </div>
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          label:'Dashboard',
          icon:'pi pi-fw pi-desktop',
          to: {name: 'Home'}
        }
      ]
    }
  }
}

</script>
