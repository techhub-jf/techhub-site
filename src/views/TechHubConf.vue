<template>
  <div class="app">
    <header>
      <img alt="Tech Hub Logo" class="logoHeader" src="@/assets/logo-dark.png" />
      <nav>
        <a href="#home" class="buttonHeader">HOME</a>
        <a href="#about" class="buttonHeader">SOBRE</a>
        <a href="#schedule" class="buttonHeader">PROGRAMAÇÃO</a>
        <a href="#speakers" class="buttonHeader">PALESTRANTES</a>
        <a href="#location" class="buttonHeader">LOCAL</a>
        <a href="#sponsors" class="buttonHeader">PATROCINADORES</a>
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
        <div class="homeButtons">
          <a href="https://www.sympla.com.br/evento/tech-hub-conf-2024/2346537" target="_blank"
            class="homeButton">INSCREVA-SE</a>
        </div>
      </section>
      <section id="about" class="infoSections">
        <h1 class="section-title">Sobre</h1>
        <div class="about-sub-section">
          <div class="about-text">
            <p class="section-text bold-text">O maior evento de tecnologia de Juiz de Fora e região</p>
            <br>
            <p class="section-text">O Tech Hub Conf será um evento da comunidade de tecnologia para a comunidade de
              tecnologia, com foco no aprimoramento de habilidades, conexões significativas e inspiração, será um ponto
              de encontro para profissionais de TI.</p>
            <br>
            <p class="section-text">Teremos um dia cheio de palestras e workshops.</p>
            <img alt="Tech Hub Logo" class="logo-jf" src="@/assets/tech-hub-jf.png" />
          </div>
          <div class="about-text-2">
            <p class="section-text">Entre os assuntos abordados:</p>
            <br>
            <div class="section-list-container">
              <ul class="section-list">
                <li class="section-list-text">Dados</li>
                <li class="section-list-text">Linguagens de programação: Go, JS, Java, PHP, etc…</li>
                <li class="section-list-text">Testes</li>
                <li class="section-list-text">IA</li>
                <li class="section-list-text">Metodologias ágeis, liderança técnica</li>
                <li class="section-list-text">DevOps</li>
                <li class="section-list-text">Microserviços</li>
                <li class="section-list-text">Diversidade em TI</li>
                <li class="section-list-text">Segurança da Informação</li>
                <li class="section-list-text">Entre outros!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="schedule" class="infoSections">
        <h1 class="section-title">Programação</h1>
        <div class="schedule-main">
          <Schedule :img="SpeakerHenrique" name="Henrique Cabral" role="Application Security Leader"
            company="Compass UOL" type="security" typeName="Segurança"
            title="Shift-Left Security e o porquê você deve se importar com isso" />
          <Schedule :img="SpeakerCintia" name="Cintia Esteves" role="Engineering Tech Manager" company="Nubank"
            type="diversity" typeName="Diversidade"
            title="Mulheres & Tecnologia - Estratégias para se destacar no mercado" />
          <Schedule :img="SpeakerFabricio" name="Fabricio Lima" role="Data Platform Engineer" company="Méliuz"
            type="hardware" typeName="Hardware"
            title="Home Server: a melhor forma de reaproveitar seu hardware velho" />
          <Schedule :img="SpeakerJoao" name="João Medina" role="Especialista Backend" company="Grupo Boticário"
            type="backend" typeName="Backend"
            title="Desbravando a Distribuição de Dados em Múltiplos Ambientes: Uma Jornada Escalável e Orientada a Eventos" />
          <Schedule :img="SpeakerLais" name="Laís Bomtempo" role="Software Engineer" company="Metal Toad"
            type="frontend" typeName="Frontend" title="Entendendo os fundamentos do Next.js 14" />
          <Schedule :img="SpeakerLuiza" name="Luiza Bartels" role="Coordenadora" company="U&M" type="hardware"
            typeName="Hardware" title="Desenvolvimento de Veículos Autônomos: bem ao seu lado e você não sabia" />
          <Schedule :img="SpeakerNatalia" name="Natalia Granato" role="DevOps Engineer" company="Jack Experts"
            type="devops" typeName="Devops" title="Assessement e boas práticas em Kubernetes" />
          <Schedule :img="SpeakerRanieri" name="Ranieri Imperatori" role="Head of Data Analytics"
            company="300 Inteligência de Negócio" type="ai" typeName="AI"
            title="Doenças Cardíacas em Números: A Relevância de Média e Mediana na Análise Preditiva com Machine Learning" />
          <Schedule :img="SpeakerBrendo" name="Brendo Freitas" role="Desenvolvedor .Net" company="webfis" type="devops"
            typeName="Devops" title="Docker Scout protegendo a cadeia de fornecimento de Software" />
          <Schedule :img="SpeakerEmerson" name="Emerson Pombo" role="Quality Assurance Engineer"
            company="Atlas Technologies" type="qa" typeName="QA"
            title="QA Além dos Testes: Conduzindo Projetos ao Pico da Eficiência e Satisfação do Cliente" />
          <Schedule :img="SpeakerLucasCarrilho" name="Lucas Carrilho" role="Desenvolvedor Backend"
            company="V3 Tecnologia" type="career" typeName="Carreira"
            title="Ingressando na Carreira de Programação em 2024: Desmistificando as Primeiras Oportunidades" />
          <Schedule :img="SpeakerLucasLopes" name="Lucas Lopes" role="Analista de Dados" company="BeFly" type="data"
            typeName="Dados" title="Dados: O novo petróleo" />
          <Schedule :img="SpeakerCarlos" name="Carlos Alexandre" role="Estudante Pós-graduação" company="UFJF"
            type="career" typeName="Carreira" title="O que os estudantes fazem durante a sua formação na Computação?" />
        </div>
      </section>
      <section id="speakers" class="infoSections">
        <h1 class="section-title">Palestrantes</h1>
        <div class="speakers-main">
          <Speaker :img="SpeakerHenrique" link="https://www.linkedin.com/in/henrique-cabral-a6b7ba176/"
            name="Henrique Cabral" role="Application Security Leader" company="Compass UOL" />
          <Speaker :img="SpeakerCintia" link="https://www.linkedin.com/in/cintia-esteves/" name="Cintia Esteves"
            role="Engineering Tech Manager" company="Nubank" />
          <Speaker :img="SpeakerFabricio" link="https://www.linkedin.com/in/fabriciooml/" name="Fabricio Lima"
            role="Data Platform Engineer" company="Méliuz" />
          <Speaker :img="SpeakerJoao" link="https://www.linkedin.com/in/joaomedinadev/" name="João Medina"
            role="Especialista Backend" company="Grupo Boticário" />
          <Speaker :img="SpeakerLais" link="https://www.linkedin.com/in/lais-silveira-martins/" name="Laís Bomtempo"
            role="Software Engineer" company="Metal Toad" />
          <Speaker :img="SpeakerLuiza" link="https://www.linkedin.com/in/luizabartelsdeoliveira/" name="Luiza Bartels"
            role="Coordenadora" company="U&M" />
          <Speaker :img="SpeakerNatalia" link="https://www.linkedin.com/in/nataliagranato/" name="Natalia Granato"
            role="DevOps Engineer" company="Jack Experts" />
          <Speaker :img="SpeakerRanieri" link="https://www.linkedin.com/in/ranieri-imperatori/"
            name="Ranieri Imperatori" role="Head of Data Analytics" company="300 Inteligência de Negócio" />
          <Speaker :img="SpeakerBrendo" link="https://www.linkedin.com/in/brendo-f-00b75416a/" name="Brendo Freitas"
            role="Desenvolvedor .Net" company="webfis" />
          <Speaker :img="SpeakerEmerson" link="https://www.linkedin.com/in/emerson-pombo/" name="Emerson Pombo"
            role="Quality Assurance Engineer" company="Atlas Technologies" />
          <Speaker :img="SpeakerLucasCarrilho" link="https://www.linkedin.com/in/karilho/" name="Lucas Carrilho"
            role="Desenvolvedor Backend" company="V3 Tecnologia" />
          <Speaker :img="SpeakerLucasLopes" link="https://www.linkedin.com/in/lucas-lopes-br/" name="Lucas Lopes"
            role="Analista de Dados" company="BeFly" />
          <Speaker :img="SpeakerCarlos" link="https://www.linkedin.com/in/carlosalexandre94/" name="Carlos Alexandre"
            role="Estudante Pós-graduação" company="UFJF" />
        </div>
      </section>
      <section id="location" class="infoSections">
        <h1 class="section-title">Local</h1>
        <div class="location-main">
          <div class="location-sub-section">
            <div class="locationText">
              <div class="maps-icon">
                <div class="maps-icon-detail">
                  <MapsIcon />
                </div>
              </div>
              <h2 class="section-text-location-title">Moinho</h2>
              <p class="section-text-location">Av. Presidente Juscelino Kubitschek, 900</p>
              <p class="section-text-location">Juiz de Fora - MG</p>
            </div>
            <div class="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.20595789661!2d-43.39701142378872!3d-21.733539696998417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989dbcf128742d%3A0xebbc2e883f5c2d4d!2sNosso%20Moinho!5e0!3m2!1sen!2sbr!4v1708697774009!5m2!1sen!2sbr"
                width="100%" height="100%" style="border:0;border-radius:15px" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div class="location-sub-section">
            <img alt="Moinho" class="location-img" src="@/assets/moinho-location.jpg" />
          </div>
        </div>
      </section>
      <section id="sponsors" class="infoSections">
        <h1 class="section-title">Patrocinadores</h1>
        <p class="section-text" style="margin-top: -30px">Gostaria de patrocinar? </p>
        <p class="section-text" style="margin-bottom: 20px">Confira nossas <a href="sponsors.pdf" target="_blank">opções
            de patrocínio</a> e entre em contato através do email <a
            href="mailto:techhubjf@gmail.com">techhubjf@gmail.com</a></p>
        <div class="sponsor-class">
          <h2 class="section-title">Platina</h2>
          <div class="sponsors-images">
            <a href="https://www.uem.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="U&M" class="sponsor-image-rectangular" src="@/assets/uem.svg" />
            </a>
            <a href="https://ensin-e.edu.br/" class="sponsor-image-link" target="_blank">
              <img alt="EnsinE" class="sponsor-image-rectangular" src="@/assets/ensine.svg" />
            </a>
            <a href="https://rubeus.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Rubeus" class="sponsor-image-rectangular" src="@/assets/rubeus.png" />
            </a>
            <a href="https://maislaudo.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Mais Laudo" class="sponsor-image-vertical" src="@/assets/mais-laudo.png" />
            </a>
          </div>
        </div>
        <div class="sponsor-class">
          <h2 class="section-title">Ouro</h2>
          <div class="sponsors-images">
            <a href="https://www.alura.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Alura" class="sponsor-image-rectangular" src="@/assets/alura.svg" />
            </a>
          </div>
        </div>
        <div class="sponsor-class">
          <h2 class="section-title">Bronze</h2>
          <div class="sponsors-images">
            <a href="https://www.instagram.com/cervejariabuonacerva/" class="sponsor-image-link" target="_blank">
              <img alt="Buona Cerva" class="sponsor-image" src="@/assets/buona-cerva.png" />
            </a>
          </div>
        </div>
        <div class="sponsor-class">
          <h2 class="section-title">Apoiadores</h2>
          <div class="sponsors-images">
            <a href="https://www.jetbrains.com/" class="sponsor-image-link" target="_blank">
              <img alt="Jet Brains" class="sponsor-image" src="@/assets/jb_beam.svg" />
            </a>
            <a href="https://www.nossomoinho.com/" class="sponsor-image-link" target="_blank">
              <img alt="Moinho" class="sponsor-image" src="@/assets/logo-moinho.png" />
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
import MapsIcon from '../components/icons/IconMaps.vue'
import Speaker from '../components/Speaker.vue'
import Schedule from '../components/Schedule.vue'
import SpeakerHenrique from '@/assets/henrique-cabral.jpeg'
import SpeakerCintia from '@/assets/cintia-esteves.jpeg'
import SpeakerBrendo from '@/assets/brendo-freitas.jpeg'
import SpeakerEmerson from '@/assets/emerson-pombo.jpeg'
import SpeakerFabricio from '@/assets/fabricio-lima.jpeg'
import SpeakerLucasCarrilho from '@/assets/lucas-carrilho.jpeg'
import SpeakerLucasLopes from '@/assets/lucas-lopes.jpeg'
import SpeakerLuiza from '@/assets/luiza-bartels.jpeg'
import SpeakerNatalia from '@/assets/natalia-granato.png'
import SpeakerRanieri from '@/assets/ranieri-imperatori.jpeg'
import SpeakerJoao from '@/assets/joao-medina.jpeg'
import SpeakerLais from '@/assets/lais-bomtempo.jpeg'
import SpeakerCarlos from '@/assets/carlos-alexandre.png'
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

.logo-jf {
  margin-top: 5vh;
  height: 10vh;
}

.about-sub-section {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about-text {
  width: 100%;
}

.about-text-2 {
  width: 100%;
}

.bold-text {
  font-weight: bold;
}

header {
  background-color: #031D42;
  position: fixed;
  top: 0;
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

.buttonHeader {
  color: white;
  border-radius: 5px;
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 10px;
}

.buttonHeader:hover {
  background-color: white;
  color: #0052F5;
}

.social-icons {
  margin-left: 20px;
}

.social-icon:hover {
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
  margin-top: 22vh;
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

.homeButtons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 30px;
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

.section-title {
  font-size: 40px;
  font-weight: bold;
  color: #031D42;
  margin-bottom: 50px;
}

.section-text {
  font-size: 20px;
  color: black;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}

.section-list-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-list {
  text-align: center;
  list-style-position: inside;
}

.section-list-text {
  font-size: 20px;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
}

.section-text-location-title {
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.section-text-location {
  font-size: 20px;
  color: black;
}

.sponsor-class {
  margin-bottom: 50px;
}

.section-text a {
  color: #0052F5;
}

.location-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
}

#location {
  background-color: rgb(241, 241, 241);
}

.location-sub-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}

.location-img {
  height: 50vh;
  border-radius: 20px;
}

.locationText {
  height: 30vh;
  margin-right: 50px;
  background-color: white;
  border-radius: 20px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.google-map {
  height: 30vh;
  width: 100%;
  background-color: white;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 20px;
}

.maps-icon {
  color: #0052F5;
  background-color: rgb(241, 241, 241);
  border-radius: 50px;
  max-width: fit-content;
  height: 50px;
}

.maps-icon svg {
  width: 100%;
  height: 100%;
}

.maps-icon-detail {
  color: #0052F5;
}

.maps-icon-detail:hover {
  background-color: transparent;
}

.infoSections {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: rgb(241, 241, 241);
  border-radius: 50px;
  margin-top: 5vh;
  margin-left: 200px;
  margin-right: 200px;
  scroll-margin-top: 15vh;
}

.sponsors-images {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px;
  flex-wrap: wrap;
}

.sponsor-image {
  height: 25vh;
  width: 25vh;
}

.sponsor-image-rectangular {
  max-height: 13vh;
  width: 35vh;
}

.sponsor-image-vertical {
  width: 17vh;
}

.sponsor-image-link {
  border-radius: 20px;
  align-self: center;
  margin-left: 3vh;
  margin-right: 3vh;
  padding: 10px;
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

@keyframes border-animation {
  from {
    background-position: 0%;
  }

  to {
    background-position: 100%;
  }
}

@-webkit-keyframes border-animation {
  from {
    background-position: 0%;
  }

  to {
    background-position: 100%;
  }
}

.speakers-main {
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.schedule-main {
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  header {
    padding-left: 30px;
    padding-right: 30px;
  }

  .logoHeader {
    height: 5vh;
  }

  .logoBanner {
    margin-top: 20vh;
    width: 40vh;
    margin-bottom: 100px;
  }

  #home {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
  }

  .about-sub-section {
    flex-direction: column;
    align-items: center;
  }

  .logo-jf {
    height: auto;
    width: 100%;
    padding-left: 5vh;
    padding-right: 5vh;
    margin-bottom: 5vh;
  }

  .sponsor-image-link {
    margin-bottom: 3vh;
    margin-top: 3vh;
  }

  .buttonHeader {
    display: none;
  }

  .infoSections {
    margin-left: 2vh;
    margin-right: 2vh;
  }

  .section-text {
    font-size: 17px;
  }

  .section-text-location {
    font-size: 17px;
  }

  .section-list-text {
    font-size: 17px;
  }

  .section-location-text {
    font-size: 17px;
  }

  .location-main {
    flex-direction: column;
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .location-sub-section {
    flex-direction: column;
    align-items: center;
  }

  .location-img {
    height: auto;
    width: 100%;
    border-radius: 20px;
  }

  .locationText {
    margin-right: 0;
    margin-bottom: 3vh;
    background-color: white;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 40vh;
  }

  .localtionImg {
    height: 22vh;
    border-radius: 20px;
  }

  .sponsors-images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sponsors-images {
    padding: 0;
  }

  .social-icon {
    margin-left: 15px;
  }

  .schedule-main {
    margin-left: 2px;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
  }

  .schedule-card {
    max-width: 100%;
  }

  .speakers-main {
    margin-left: 2px;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
