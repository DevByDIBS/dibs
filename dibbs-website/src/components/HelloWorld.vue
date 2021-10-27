<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <div v-if="$auth.isAuthenticated">

        
        NAME: {{ $auth.user.name }} <br>
        {{ $auth.user.sub.split("|")[2] }}
      </div>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    login:function(){
       this.$auth.loginWithRedirect();
    },
       logout:function(){
       this.$auth.logout({
        returnTo: window.location.origin
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
