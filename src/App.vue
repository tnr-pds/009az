<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">PHONE<span>STONE</span></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart"
                ><i class="fa fa-shopping-basket"></i
              ></a>
            </li>
            <img class="gimg" :src="photoUrl" >
          </ul>
        </div>
      </div>
    </nav>
     <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  data(){
    return{
      photoUrl:null,
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        //ให้แสดง ชื่อ รูป e-mail
        // this.namee = user.displayName
        // this.email = user.email
        this.photoUrl = user.photoURL
      } else {
        // No user is signed in.
        //กลับไปหน้า login
        this.$router.replace('/login')
      }
    })
  },
}
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100&family=Poppins:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
.navbar{
  height: auto;
}
.navbar-brand {
  font-weight: bold;
  font-family: "Kanit", sans-serif;
}
.navbar-brand span {
  background-color: rgb(255, 167, 4);
  padding: 1px 3px;
  border-radius: 2px;
  color: black;
}
.nav-link {
  font-weight: bold;
  font-size: 10px;
  text-transform: uppercase;
}
.nav-item {
  margin: 0 15px;
}
.gimg{
  width: 10%;
  border-radius: 20px;
}
.app{
  background-color: cadetblue;
}
.nav-link .fa{
  font-size: 15px;
  color: rgb(255, 167, 4);
}
</style>
