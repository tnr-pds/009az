<template>
<b-container class="bv-example-row">

  <b-card-group deck class="mid">
    <b-card title="Title" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Header Slot</h6>
      </template>
      <b-card-text>Header and footers using slots.</b-card-text>
      <b-button href="#" @click="login()" variant="primary">Login</b-button>
      <b-button href="#" @click="logout()" variant="primary">Login</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </b-card-group>

</b-container>
</template>

<script>
import firebase from "firebase/app";

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = credential.accessToken;
          console.log(token);
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // ...
          this.$router.replace('/')
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      firebase.auth().signOut().then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.')
          this.$router.replace('/index') //ทำไป index ไม่ได้ 
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  },
};
</script>

<style>

.bv-example-row{
margin-top: 10%;
}
.mid{
text-align: center;
}
</style>