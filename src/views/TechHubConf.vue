<template>
  <header>
    <img alt="Tech Hub Logo" class="logoHeader" src="@/assets/logo-dark.png" />
    <nav>
      <a href="#home" class="buttonHeader">HOME</a>
      <a href="#about" class="buttonHeader">SOBRE</a>
      <!-- <a href="#schedule" class="buttonHeader">PROGRAMAÇÃO</a> -->
      <a href="#location" class="buttonHeader">LOCAL</a>
      <a href="#sponsors" class="buttonHeader">PATROCINADORES</a>
    </nav>
  </header>
  <div class="main">
    <section id="home">
      <img alt="Tech Hub Logo" class="logoBanner" src="@/assets/logo-dark.png" />
      <div class="homeText">
        <h2 class="homeTextFieldDate">27 de Abril</h2>
        <h2 class="homeTextFieldLocation">Moinho - Juiz de Fora</h2>
      </div>
      <a href="" class="homeButton">INSCREVA-SE</a>
    </section>
    <section id="about">
      <h1 class="section-title">Sobre</h1>
      <p class="section-text">O maior evento de tecnologia de Juiz de Fora e região</p>
    </section>
    <!-- <section id="schedule">
      <h1 class="section-title">Programação</h1>
    </section> -->
    <section id="location">
      <h1 class="section-title">Local</h1>
      <div class="location-main">
        <div>
          <h2 class="section-text-location-title">Moinho</h2>
          <p class="section-text-location">Av. Presidente Juscelino Kubitschek, 900 - Francisco Bernardino,</p>
          <p class="section-text-location">Juiz de Fora - MG</p>
        </div>
        <img alt="Moinho" class="localtionImg" src="@/assets/moinho-location.jpg"/>
      </div>
    </section>
  </div>
  <footer>
    <p>© 2024 Tech Hub JF</p>
  </footer>
</template>

<style>
  :root {
    --color-background: white;
  }

  #app {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    max-width: 100%;
  }

  #home {
    background-image: url('@/assets/moinho.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    height: 1200px;
  }

  header {
    background-color: #031D42;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 50px;
  }

  .buttonHeader {
    color: white;
    border-radius: 5px;
    margin-left: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .buttonHeader:hover{
    background-color: white;
    color: #0052F5;
  }

  .homeText {
    margin-bottom: 100px;
  }

  .logoBanner {
    margin-top: 300px;
    width: 800px;
    margin-bottom: 100px;
  }

  .homeTextFieldDate {
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

  .homeTextFieldLocation {
    color: white;
    font-size: 20px;
  }

  .homeButton {
    background-color: #0052F5;
    color: white;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
  }

  .homeButton:hover {
    background-color: white;
    color: #0052F5;
  }

  nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    color: white;
    align-items: center;
  }

  .main {
    display: flex;
    height: 100%;
    flex-direction: column;
    text-align: center;
  }

  header {
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .section-title{
    font-size: 40px;
    font-weight: bold;
    color: black;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .section-text{
    font-size: 20px;
    color: black;
  }

  .section-text-location-title{
    font-size: 30px;
    color: black;
  }

  .section-text-location{
    font-size: 20px;
    color: black;
  }

  .location-main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
  }

  .localtionImg{
    height: 200px;
  }

  footer {
    margin-top: 50px;
    background-color: #031D42;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 50px;
  }
</style>
