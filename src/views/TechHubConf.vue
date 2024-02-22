<template>
  <div class="app">
  <header>
    <img alt="Tech Hub Logo" class="logoHeader" src="@/assets/logo-dark.png" />
    <nav>
      <a href="#home" class="buttonHeader">HOME</a>
      <a href="#about" class="buttonHeader">SOBRE</a>
      <!-- <a href="#schedule" class="buttonHeader">PROGRAMAÇÃO</a> -->
      <a href="#location" class="buttonHeader">LOCAL</a>
      <a href="#sponsors" class="buttonHeader">PATROCINADORES</a>
      <a href="https://www.papercall.io/tech-hub-conf-2024" target="_blank" class="buttonHeader">SUBMETA SUA TALK</a>
      <div class="social-icons">
        <a href="https://www.instagram.com/techhubconf" target="_blank" class="social-icon">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/company/tech-hub-conf" target="_blank" class="social-icon">
          <LinkedinIcon />
        </a>
      </div>
    </nav>
  </header>
  <div class="main">
    <section id="home">
      <img alt="Tech Hub Logo" class="logoBanner" src="@/assets/logo-dark.png" />
      <div class="homeText">
        <h2 class="homeTextFieldDate">27 de Abril</h2>
        <h2 class="homeTextFieldLocation">Moinho - Juiz de Fora</h2>
      </div>
      <a href="https://www.sympla.com.br/evento/tech-hub-conf-2024/2346537" class="homeButton">INSCREVA-SE</a>
    </section>
    <section id="about" class="infoSections">
      <h1 class="section-title">Sobre</h1>
      <p class="section-text"><b>O maior evento de tecnologia de Juiz de Fora e região</b></p>
      <br>
      <p class="section-text">O Tech Hub Conf será um evento da comunidade de tecnologia para a comunidade de tecnologia, com foco no aprimoramento de habilidades, conexões significativas e inspiração, será um ponto de encontro para profissionais de TI.</p>
      <br>
      <p class="section-text">Será um dia cheio de palestras e workshops.</p>
      <p class="section-text">Entre os assuntos abordados teremos:</p>
      <br>
      <div class="section-list-container">
        <ul class="section-list">
          <li class="section-list-text">Padrões de projeto</li>
          <li class="section-list-text">Linguagens de programação: Go, JS, Java, PHP, etc…</li>
          <li class="section-list-text">Testes</li> 
          <li class="section-list-text">Saúde mental, estresse e esgotamento</li>
          <li class="section-list-text">Aprendendo com as falhas</li>
          <li class="section-list-text">Liderança técnica</li>
          <li class="section-list-text">Metodologias ágeis</li>
          <li class="section-list-text">DevOps</li>
          <li class="section-list-text">Microserviços</li>
          <li class="section-list-text">Construindo cultura</li>
          <li class="section-list-text">Diversidade em TI</li>
          <li class="section-list-text">Melhoria contínua</li>
          <li class="section-list-text">IA</li>
          <li class="section-list-text">Segurança da informação</li>
          <li class="section-list-text">Entre outros!</li>
        </ul>
      </div>
    </section>
    <!-- <section id="schedule">
      <h1 class="section-title">Programação</h1>
    </section> -->
    <section id="location" class="infoSections">
      <h1 class="section-title">Local</h1>
      <div class="location-main">
        <div class="locationText">
          <h2 class="section-text-location-title">Moinho</h2>
          <p class="section-text-location">Av. Presidente Juscelino Kubitschek, 900 - Francisco Bernardino</p>
          <p class="section-text-location">Juiz de Fora - MG</p>
        </div>
        <img alt="Moinho" class="localtionImg" src="@/assets/moinho-location.jpg"/>
      </div>
    </section>

    <section id="sponsors" class="infoSections">
      <h1 class="section-title">Patrocinadores</h1>
      <p class="section-text" style="margin-top: -30px">Gostaria de patrocinar? </p>
      <p class="section-text" style="margin-bottom: 20px">Confira nossas <a href="sponsors.pdf" target="_blank">opções de patrocínio</a> e entre em contato através do email <a href="mailto:techhubjf@gmail.com">techhubjf@gmail.com</a></p>
      <div class="sponsor-class">
        <h2 class="section-title">Bronze</h2>
        <div class="sponsors-images">
          <a href="https://www.instagram.com/cervejariabuonacerva/" style="border-radius: 20px;" target="_blank">
            <img alt="Buona Cerva" class="sponsor-image" src="@/assets/buona-cerva.png"/>
          </a>
        </div>
      </div>
      <div class="sponsor-class">
        <h2 class="section-title">Apoiadores</h2>
        <div class="sponsors-images">
          <a href="https://www.jetbrains.com/" style="border-radius: 20px;" target="_blank">
            <img alt="Buona Cerva" class="sponsor-image" src="@/assets/jb_beam.svg"/>
          </a>
          <a href="https://www.nossomoinho.com/" style="border-radius: 20px;" target="_blank">
            <img alt="Buona Cerva" class="sponsor-image" src="@/assets/logo-moinho.png"/>
          </a>
        </div>
      </div>
    </section>
  </div>
  <footer>
    <p>© 2024 Tech Hub JF</p>
  </footer>
</div>
</template>

<script setup lang="ts">
  import InstagramIcon from '../components/icons/IconInstagram.vue'
  import LinkedinIcon from '../components/icons/IconLinkedin.vue'
</script>

<style scoped>
  .app {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    max-width: 100%;
    background-color: white;
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
    min-height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
  }

  .logoHeader {
    height: 5vh;
  }

  @media screen and (max-width: 600px) {
      .logoHeader {
      height: 1vh;
    }
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

  .social-icons {
    margin-left: 20px;
  }

  .social-icon:hover{
    background-color: transparent;
  }

  .social-icon {
    margin-left: 5px;
  }

  .homeText {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logoBanner {
    margin-top: 300px;
    width: 800px;
    margin-bottom: 100px;
  }

  .homeTextFieldDate {
    color: black;
    mix-blend-mode: screen;
    background-color: white;
    font-size: 25px;
    font-weight: bold;
    width: fit-content;
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
  }

  .homeTextFieldLocation {
    color: black;
    mix-blend-mode: screen;
    background-color: white;
    font-size: 20px;
    width: fit-content;
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
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

  .section-title{
    font-size: 40px;
    font-weight: bold;
    color: #031D42;
    margin-bottom: 50px;
  }

  .section-text{
    font-size: 20px;
    color: black;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
  }

  .section-list-container{
    display: flex;
    align-items: center;
  justify-content: center;
  }

  .section-list{
    text-align: center;
    list-style-position: inside;
  }

  .section-list-text{
    font-size: 20px;
    color: black;
    margin-left: 20px;
    margin-right: 20px;
    text-align: left;
  }  

  .section-text-location-title{
    font-size: 30px;
    font-weight: bold;
    color: black;
  }

  .section-text-location{
    font-size: 20px;
    color: black;
  }

  .sponsor-class{
    margin-bottom: 50px;
  }

  .section-text a {
    color: #0052F5;
  }

  .location-main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 50px; 
    margin-right: 50px;
  }

  #location {
    background-color: rgb(241, 241, 241);
  }

  .locationText{
    margin-right: 50px;
    background-color: white;
    border-radius: 20px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .localtionImg{
    height: 300px;
    border-radius: 20px;
  }

  .infoSections{
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: rgb(241, 241, 241);
    border-radius: 50px;
    margin-top: 5vh;
    margin-left: 100px;
    margin-right: 100px;
    scroll-margin-top: 15vh;
  }

  .sponsors-images{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-left: 200px;
    padding-right: 200px;
  }

  .sponsor-image {
    height: 200px;
    border-radius: 20px;
  }

  footer {
    margin-top: 50px;
    background-color: #031D42;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 50px;
    text-align: center;
  }
</style>
