<template>
  <div class="hello">
    <h1>{{ test }}</h1>
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <div v-if="$auth.isAuthenticated">
        NAME: {{ $auth.user.name }} <br />
        {{ $auth.user.sub.split("|")[2] }}
        <button @click="fAuth">Auth with Firebase</button>
      </div>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import { getAuth, onAuthStateChanged, signInWithCustomToken  } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw8BHbNhODW_2PaQInj2P7gq3SFnYarE8",
  authDomain: "dibs-bb.firebaseapp.com",
  projectId: "dibs-bb",
  storageBucket: "dibs-bb.appspot.com",
  messagingSenderId: "224485029847",
  appId: "1:224485029847:web:ee43b1fc78fa4b0a4afd92",
  measurementId: "G-DN7NSXB7K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data:function(){return {
    test:""
  }},
  mounted: function () {
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    this.$data.test = (uid);
    
                this.$store.commit("set_uid",uid);
  } else {
    // User is signed out
     console.log("NOT LOGGED IN");
  }
});
  },
  methods: {
    login: function () {
      this.$auth.loginWithRedirect();
    },

    fAuth: function () {
      axios
        .get("http://localhost:3000/authenticate", {
          params: { uid: 495586848031244299 },
        })
        .then(function (response) {
    
            let token = response.data;
            console.log(token);
              signInWithCustomToken(auth,token)
              .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                this.test = ('USER'+ user.uid);
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
              });
        
        });
    },

    logout: function () {
      this.$auth.logout({
        returnTo: "/",
      });
    },
  },
};
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
