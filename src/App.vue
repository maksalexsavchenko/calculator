<template>
  <div id="app">
    <Nav />

    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />

      </div>
    </div>

<!--    <calc/>-->
<!--    <api/>-->
  </div>
</template>

<script>
  import Nav from './components/Nav'
  // import Calc from './components/calc'
  // import Api from  './components/api'


export default {
  name: 'App',
  components: {
    Nav,
    // Home,
    // Login,
    // Calc,
    // Api,

  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    min-height: 100vh;
    background: #1C8EF9;
  }
  body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
  }

  .navbar-light {
    background-color: #ffffff;
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .auth-inner {
    width: 450px;
    margin: auto;
    background: #ffffff;
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }

  .auth-wrapper .form-control:focus {
    border-color: #167bff;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  .custom-control-label {
    font-weight: 400;
  }

  .forgot-password,
  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 0;
  }

  .forgot-password a {
    color: #167bff;
  }
</style>
