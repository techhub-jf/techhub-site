<template>
  <div class="app">
    <header>
      <img alt="Tech Hub Logo" class="logoHeader" src="@/assets/conf2026/logo-dark.png" />
      <nav>
        <a href="#home" class="buttonHeader">HOME</a>
        <a href="#about" class="buttonHeader">SOBRE</a>
        <a href="#schedule" class="buttonHeader">PROGRAMAÇÃO</a>
        <a href="#speakers" class="buttonHeader">PALESTRANTES</a>
        <a href="#location" class="buttonHeader">LOCAL</a>
        <a href="#sponsors" class="buttonHeader">PATROCINADORES</a>
        <!-- <a href="https://www.sympla.com.br/evento/tech-hub-conf-2026/3325416" class="buttonHeader">INSCREVA-SE</a> -->
        <!-- <a href="https://forms.gle/64jwQb4AKkdc2cFu9" class="buttonHeader">SUBMETA SUA PALESTRA</a> -->
        <a href="/conf/2025" class="buttonHeader" target="_blank">EDIÇÃO 2025</a>
        <a href="/conf/2024" class="buttonHeader" target="_blank">EDIÇÃO 2024</a>
        <button class="theme-toggle" @click="toggle" :aria-label="theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>
        <div class="social-icons">
          <a href="https://www.instagram.com/techhubconf" target="_blank" class="social-icon">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/company/tech-hub-conf" target="_blank" class="social-icon">
            <LinkedinIcon />
          </a>
          <a href="https://www.youtube.com/@techhubjf" target="_blank" class="social-icon">
            <YoutubeIcon />
          </a>
        </div>
        <button class="nav-toggle" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen"
          aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
    <transition name="drawer">
      <div v-if="menuOpen" class="mobile-menu" @click.self="menuOpen = false">
        <nav class="mobile-menu-panel">
          <a href="#home" @click="menuOpen = false">HOME</a>
          <a href="#about" @click="menuOpen = false">SOBRE</a>
          <a href="#schedule" @click="menuOpen = false">PROGRAMAÇÃO</a>
          <a href="#speakers" @click="menuOpen = false">PALESTRANTES</a>
          <a href="#location" @click="menuOpen = false">LOCAL</a>
          <a href="#sponsors" @click="menuOpen = false">PATROCINADORES</a>
          <span class="mobile-menu-divider"></span>
          <a href="/conf/2025" target="_blank" @click="menuOpen = false">EDIÇÃO 2025</a>
          <a href="/conf/2024" target="_blank" @click="menuOpen = false">EDIÇÃO 2024</a>
          <div class="mobile-menu-social">
            <a href="https://www.instagram.com/techhubconf" target="_blank" class="social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/tech-hub-conf" target="_blank" class="social-icon" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://www.youtube.com/@techhubjf" target="_blank" class="social-icon" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </nav>
      </div>
    </transition>
    <div class="main">
      <section id="home">
        <span class="hero-kicker">O maior evento tech de Juiz de Fora e região</span>
        <img alt="Tech Hub Logo" class="logoBanner" src="@/assets/conf2026/logo-dark.png" />
        <div class="homeText">
          <h2 class="homeTextFieldDate">30 de Maio</h2>
          <h2 class="homeTextFieldLocation">Moinho — Juiz de Fora</h2>
        </div>
        <!-- <div class="homeButtons">
          <a href="https://drive.google.com/drive/folders/1hzQdZs_rLQp4XIngGSPgq6zo5IlmhqkR?usp=sharing" target="_blank"
            class="homeButton">FOTOS</a>
          <a href="https://linktr.ee/techhubjf" target="_blank"
              class="homeButton">REDES SOCIAIS</a>
        </div> -->
        <div class="homeButtons">
          <!-- <a href="https://www.sympla.com.br/evento/tech-hub-conf-2026/3325416" target="_blank"
            class="homeButton">INSCREVA-SE</a> -->
          <button v-if="eventLive" class="now-jump-button" @click="goToSchedule">
            <span class="now-jump-dot"></span>ACONTECENDO AGORA
          </button>
          <a href="#schedule" class="homeButton" @click.prevent="goToProgramacao">PROGRAMAÇÃO</a>
          <InstallButton />
          <!-- <a href="https://forms.gle/64jwQb4AKkdc2cFu9" target="_blank"
            class="homeButton">SUBMETA SUA PALESTRA</a> -->
        </div>
      </section>
      <section id="about" class="infoSections">
        <h1 class="section-title">Sobre</h1>
        <div class="about-image">
          <img alt="Tech Hub Conf" class="tech-hub-conf-photo" src="@/assets/conf2026/tech-hub-conf.webp" loading="lazy" decoding="async" />
        </div>
        <div class="about-sub-section">
          <div class="about-text">
            <p class="section-text bold-text">O maior evento de tecnologia de Juiz de Fora e região</p>
            <br>
            <p class="section-text">O Tech Hub Conf será um evento da comunidade de tecnologia para a comunidade de
              tecnologia, com foco no aprimoramento de habilidades, conexões significativas e inspiração, será um ponto
              de encontro para profissionais de TI.</p>
            <br>
            <p class="section-text">Teremos um dia cheio de palestras e workshops.</p>
            <img alt="Tech Hub Logo" class="logo-jf" :src="theme === 'dark' ? jfLogoDark : jfLogoLight" />
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
        <AgendaNow />
        <ScheduleFilters />
        <div class="schedule-main">
          <ScheduleTile time="8:00 - 8:30" title="Credenciamento" location="Entrada"/>
          <ScheduleTile time="8:30 - 9:00" title="Abertura" location="Auditório: Teste em Produção"/>

          <Schedule :speakers="[{img: SpeakerSamuel, name: 'Samuel Rocha Amaral', role: 'Especialista em DevOps/SRE', company: 'Smart NX'}]"
            :types="[{id: 'devops', name: 'DevOps'}]" time="9:00 - 10:00" location="Sala: Delete sem Where"
            title="Aprendizados na Jornada DevOps: o que os 'ops' me ensinaram"
            description="Nem todo deploy dá certo. Nem toda decisão escala. Compartilho uma coleção real de momentos 'ops…' ao longo da minha jornada — erros em pipelines, Docker, AWS e Terraform, até falhas culturais que impediram times de evoluir. Cada caso traz contexto, impacto, causa raiz e o aprendizado aplicado na prática." />

          <Schedule :speakers="[{img: SpeakerLucasCarrilho, name: 'Lucas Carrilho de Almeida', role: 'Engenheiro de Software Backend', company: 'Luxoft'}]"
            :types="[{id: 'career', name: 'Carreira'}]" time="9:00 - 10:00" location="Auditório: Teste em Produção"
            title="Da Primeira Vaga ao Mercado Internacional como DEV"
            description="O que realmente ajuda um desenvolvedor a sair do zero e construir uma carreira sólida até alcançar oportunidades internacionais? Falaremos sobre caminhos técnicos, stacks mais usadas, como encarar processos seletivos e as soft skills que mais pesam no mercado — desde a primeira vaga até o tão sonhado salário em dólar." />

          <Schedule :speakers="[{img: SpeakerKevin, name: 'Kevin Azevedo de Souza', role: 'Engenheiro de Segurança', company: 'PagBank'}]"
            :types="[{id: 'security', name: 'Segurança'}]" time="9:00 - 10:00" location="Sala: Deploy da Sexta"
            class="schedule-two-rows"
            title="Mentalidade ofensiva: como proteger suas aplicações pensando como um atacante"
            description="Vamos explorar a segurança de aplicações sob a perspectiva do atacante. Em vez de focar apenas em boas práticas, propomos uma mudança de mentalidade: entender como sistemas são analisados, explorados e comprometidos, e como a mentalidade ofensiva permite identificar vulnerabilidades antes que sejam exploradas." />


          <ScheduleTile time="10:00 - 10:30" title="Coffee Break"/>
          <ScheduleTile time="10:30 - 10:45" title="Espaço Patrocinadores" location="Auditório: Teste em Produção"/>

          <Schedule :speakers="[{img: SpeakerWendel, name: 'Wendel Moreira Mendes da Silveira', role: 'CTO', company: 'Chico Rei'}]"
            :types="[{id: 'ai', name: 'IA'}]" time="10:45 - 11:15" location="Sala: Delete sem Where"
            title="Débito Técnico 2.0: Como a IA está ajudando (ou atrapalhando) a limpar o código legado"
            description="O pesadelo do código legado mudou de cara em 2026. A IA prometeu ser a bala de prata para refatoração, mas a realidade nas trincheiras mostra um cenário mais complexo: como agentes autônomos de refatoração e o uso indiscriminado de Copilots pode estar gerando o Débito Técnico Sintético." />

          <Schedule :speakers="[{img: SpeakerBrendo, name: 'Brendo Freitas de Sousa', role: 'Desenvolvedor de Software', company: 'Icatu Seguros'}]"
            :types="[{id: 'devops', name: 'DevOps'}]" time="10:45 - 11:15" location="Auditório: Teste em Produção"
            title="Você realmente sabe o que sua aplicação está fazendo?"
            description="Sua aplicação está em produção e algo deu errado. Você realmente sabe o que está acontecendo dentro dela? Vamos explorar, na prática, como utilizar observabilidade real — conectando logs, métricas e tracing distribuído para acompanhar uma requisição ponta a ponta e identificar gargalos." />

          <Schedule :speakers="[{img: SpeakerMarcoJunior, name: 'Marco Júnior Lopes de Melo', role: 'Desenvolvedor Web', company: ''}]"
            :types="[{id: 'security', name: 'Segurança'}]" time="10:45 - 11:15" location="Sala: Deploy da Sexta"
            title="Web 3.0: Blockchain, DREX e o futuro da segurança na internet"
            description="O Brasil se destacou no sistema financeiro com o Pix e agora caminha para a digitalização da moeda com o DREX. Como uma blockchain realmente funciona? Vamos explorar conceitos técnicos como nonce, hash e mineração, o que construímos até agora e as oportunidades de carreira no mercado Web 3.0." />

          <Schedule :speakers="[{img: SpeakerLucasWilman, name: 'Lucas Wilman da Silva Crispim', role: 'Professor / Desenvolvedor', company: 'UFJF'}]"
            :types="[{id: 'ai', name: 'IA'}]" time="11:15 - 12:15" location="Sala: Delete sem Where"
            class="schedule-two-rows"
            title="O canto da sereia da inteligência artificial nas apostas esportivas: um caso de estudo do campeonato brasileiro 2012-2025"
            description="Uma investigação quantitativa sobre os limites da previsibilidade no mercado de apostas 1X2 do Campeonato Brasileiro (2012-2025). O foco: machine learning como motor para construção de estratégias robustas e uma visão crítica sobre o uso de IA — o que são oportunidades reais e o que são apenas ruídos estatísticos." />

          <Schedule :speakers="[{img: SpeakerDanilo, name: 'Danilo Oliveira Santos', role: 'Engenheiro de Dados / Professor', company: 'Faculdade Ensine'}]"
            :types="[{id: 'data', name: 'Dados'}]" time="11:15 - 12:15" location="Auditório: Teste em Produção"
            class="schedule-two-rows"
            title="Dados Instagramáveis: Construindo um Pipeline End-to-End no Microsoft Fabric"
            description="Como transformar curtidas e métricas do Instagram em decisões estratégicas de negócio? Vamos construir um ecossistema de dados completo no Microsoft Fabric — da ingestão bruta via API à Arquitetura Medalhão, evoluindo dados da camada Bronze até a Gold com poderosas tabelas de Fato e Dimensão." />

          <Schedule :speakers="[{img: SpeakerAnaCarolina, name: 'Ana Carolina Da Costa Marinho', role: 'Analista de Cyber Threat Intelligence', company: 'Grupo Energisa'}]"
            :types="[{id: 'security', name: 'Segurança'}]" time="11:15 - 12:15" location="Sala: Deploy da Sexta"
            class="schedule-two-rows"
            title="Inteligência de Ameaças Cibernéticas (CTI): Como CTI se conecta com Desenvolvimento"
            description="Veremos fundamentos da segurança cibernética e conceitos avançados de CTI, conectando teoria com prática: como usar Cyber Threat Intelligence para priorizar correções de vulnerabilidades, incorporar proteções desde o design de uma API e como acelerar dramaticamente a resposta a incidentes." />

          <ScheduleTile time="12:15 - 13:30" title="Almoço"/>
          <ScheduleTile time="13:30 - 14:00" title="Ignite Talks" location="Auditório: Teste em Produção"/>

          <Schedule :speakers="[{img: SpeakerMarcus, name: 'Marcus Antonio de Jesus', role: 'Product Manager', company: 'Asaas'}]"
            :types="[{id: 'product', name: 'Produto'}]" time="14:00 - 14:30" location="Sala: Delete sem Where"
            title="Produto vs Engenharia: por que esse conflito ainda existe (e como sair dele)"
            description="Em muitas empresas, existe uma divisão entre produto e engenharia. 'O negócio quer tudo pra ontem' vs. 'isso não faz sentido técnico'. Vamos explorar onde essa relação quebra de verdade e como criar contexto compartilhado para times que discordam sem travar a evolução do produto." />

          <Schedule :speakers="[{img: SpeakerLeandro, name: 'Leandro Simões da Silva', role: 'Engenheiro de Software', company: 'TheGuarantors'}]"
            :types="[{id: 'devops', name: 'DevOps'}]" time="14:00 - 14:30" location="Auditório: Teste em Produção"
            title="Observabilidade para programadores"
            description="Observabilidade não é apenas monitorar sistemas, mas entender como eles afetam o negócio. Nesta palestra, veremos como instrumentar aplicações com OpenTelemetry, criar métricas de negócio em tempo real e utilizar IA para extrair valor dos dados de telemetria." />

          <Schedule :speakers="[{img: SpeakerBarbara, name: 'Bárbara Rezende Neri', role: 'Estudante de Ciência da Computação', company: 'UFSJ'}]"
            :types="[{id: 'career', name: 'Carreira'}]" time="14:00 - 14:30" location="Sala: Deploy da Sexta"
            title="Debugando a evasão: por que mulheres saem da tecnologia"
            description="Por que ainda somos tão poucas na tecnologia, e por que tantas mulheres que entram acabam saindo? Não é falta de capacidade, é falta de referência. Diversidade é estratégia — a questão não é como incluir mais mulheres, mas que tipo de ambiente estamos construindo para que elas fiquem." />

          <Schedule :speakers="[{img: SpeakerRenato, name: 'Renato Bonario', role: 'Product Owner', company: 'Heineken'}]"
            :types="[{id: 'product', name: 'Produto'}]" time="14:30 - 15:30" location="Sala: Delete sem Where"
            class="schedule-two-rows"
            title="Status sem contexto gera ruído: como comunicar decisões de verdade"
            description="Todo mundo já participou de uma reunião onde muita coisa foi atualizada, mas pouca coisa ficou realmente clara. O status foi dado, os números apareceram, mas a decisão e os trade-offs continuaram nebulosos. Como transformar comunicação de rotina em comunicação que gera entendimento, alinhamento e ação?" />

          <Schedule :speakers="[{img: SpeakerAldemon, name: 'Aldemon Lage Bonifácio', role: 'Líder Técnico', company: 'Afya'}]"
            :types="[{id: 'career', name: 'Carreira'}]" time="14:30 - 15:30" location="Auditório: Teste em Produção"
            class="schedule-two-rows"
            title="Legado vs. Modinha - Como não se tornar obsoleto em tecnologia"
            description="Em 25 anos trabalhando com tecnologia vi tecnologias surgirem como revolução e desaparecerem poucos anos depois. O que sustenta uma carreira sólida ao longo do tempo? A resposta está nos fundamentos — que no início parecem básicos, mas são o verdadeiro diferencial de quem se mantém relevante." />

          <Schedule :speakers="[{img: SpeakerThiagoMiranda, name: 'Thiago Miranda de Paula', role: 'Analista de Segurança Ofensiva', company: 'Grupo Energisa'}]"
            :types="[{id: 'security', name: 'Segurança'}]" time="14:30 - 15:30" location="Sala: Deploy da Sexta"
            title="Segurança Ofensiva: Uma alavanca de qualidade no desenvolvimento"
            description="Você já se perguntou como um invasor enxerga o seu código? Vamos inverter os papéis e mergulhar no universo da Segurança Ofensiva. Entenda por que o Pentest não deve ser o 'fim da linha', mas sim um parceiro estratégico no processo de desenvolvimento." />

          <ScheduleTile time="15:30 - 16:00" title="Coffee Break"/>

          <Schedule :speakers="[{img: SpeakerRomulo, name: 'Rômulo Murucci Oliveira', role: 'Data Product Owner', company: 'MRS Logística'}]"
            :types="[{id: 'ai', name: 'IA'}]" time="16:00 - 17:00" location="Sala: Delete sem Where"
            title="A Próxima Onda da Automação: Potencializando o Ciclo de IA com AutoML e GenAI"
            description="Vamos desmistificar o AutoML Integral com dois cases de alto impacto desenvolvidos localmente em Juiz de Fora — da academia (UFJF) à indústria ferroviária. E para fechar: como a integração sinérgica entre AutoML e IA Generativa está transformando o papel do profissional de dados." />

          <Schedule :speakers="[{img: SpeakerMariaLuize, name: 'Maria Luize Pinheiro', role: 'Engenheira de Deep Learning', company: 'Solved'}]"
            :types="[{id: 'ai', name: 'IA'}]" time="16:00 - 17:00" location="Auditório: Teste em Produção"
            class="schedule-gde"
            title="Do Notebook à Nuvem: Primeiros Passos para Rodar Modelos Keras de Monitoramento de Satélite no Google Cloud"
            description="Cansado de ver seu computador travar ao processar imagens pesadas de satélite? Vamos mostrar como dar os primeiros passos para tirar seus modelos de IA do ambiente local e levá-los para o Google Cloud — organizando dados no Cloud Storage, empacotando código com Docker e escolhendo a máquina ideal (GPUs NVIDIA L4) sem gastar uma fortuna com Spot VMs. Um guia para sair do notebook e automatizar o monitoramento ambiental de forma profissional e econômica." />

          <Schedule :speakers="[{img: SpeakerThiagoCantarino, name: 'Thiago Cantarino da Cruz', role: 'Especialista em Cybersecurity OT/ICS', company: 'NTT DATA'}]"
            :types="[{id: 'ai', name: 'IA'}]" time="16:00 - 17:00" location="Sala: Deploy da Sexta"
            title="Quando Cyber OT vira decisão de milhões: como evitei uma evacuação industrial e US$ 3 milhões em perdas"
            description="Com a evolução de Cloud, IoT e IA, os incidentes cibernéticos em ambientes industriais passaram a representar riscos concretos à continuidade operacional. Nesta palestra, apresento uma abordagem prática sobre Cyber OT, como estruturar um programa de segurança e um business case real que evitou uma evacuação industrial e US$ 3 milhões em perdas." />

          <Schedule :speakers="[{img: SpeakerLuca, name: 'Luca Garcia Honorio', role: 'Engenheiro de Dados', company: 'CI&T'}]"
            :types="[{id: 'ai', name: 'IA'}]" time="17:00 - 17:30" location="Sala: Delete sem Where"
            title="Engenharia de Dados 2.0: Construindo a Infraestrutura que Sustenta a IA Generativa"
            description="Não existe IA de elite com dados de baixa qualidade. Vamos explorar a 'Engenharia de Dados 2.0': arquiteturas modernas de Lakehouse com Databricks, padrões de RAG para reduzir alucinações de LLMs, e os desafios reais de governança e privacidade em projetos de alta criticidade no setor financeiro." />

          <ScheduleTile time="17:00 - 18:00" title="Mesa Redonda" location="Auditório: Teste em Produção" class="schedule-one-row"/>

          <Schedule :speakers="[{img: SpeakerTiago, name: 'Tiago Reis', role: 'Coordenador de Tecnologia Educacional', company: 'Colégio Stella Matutina'}]"
            :types="[{id: 'career', name: 'Carreira'}]" time="17:00 - 17:30" location="Sala: Deploy da Sexta"
            title="Seja Tech & Google Innovator: Transformando instituições através da inovação inclusiva"
            description="O case do Projeto Seja Tech: uma iniciativa que redefine a tecnologia como linguagem de poder e autonomia para além das equipes técnicas. Como combater a discrepância entre ambientes hiperconectados e seus 'bastidores' desconectados — validado na Academia de Google Innovator em São Paulo." />

          <ScheduleTile time="18:00 - 18:30" title="Sorteios"/>
          <ScheduleTile time="18:30 - ∞" title="Happy Hour"/>
        </div>
      </section>
      <section id="speakers" class="infoSections">
        <h1 class="section-title">Palestrantes</h1>
        <div class="speakers-main">
          <Speaker :img="SpeakerThiagoCantarino" link="https://www.linkedin.com/in/eng-thiago-cantarino/"
            name="Thiago Cantarino da Cruz" role="Especialista em Cybersecurity OT/ICS" company="NTT DATA" />
          <Speaker :img="SpeakerLucasCarrilho" link="https://www.linkedin.com/in/karilho/"
            name="Lucas Carrilho de Almeida" role="Engenheiro de Software Backend" company="Luxoft" />
          <Speaker :img="SpeakerThiagoMiranda" link="https://www.linkedin.com/in/dtmp3st/"
            name="Thiago Miranda de Paula" role="Analista de Segurança Ofensiva" company="Grupo Energisa" />
          <Speaker :img="SpeakerWendel" link="https://www.linkedin.com/in/wendel-moreira/"
            name="Wendel Moreira Mendes da Silveira" role="CTO" company="Chico Rei" />
          <Speaker :img="SpeakerBrendo" link="https://www.linkedin.com/in/brendo-f-00b75416a/"
            name="Brendo Freitas de Sousa" role="Desenvolvedor de Software" company="Icatu Seguros" />
          <Speaker :img="SpeakerMarcoJunior" link="https://www.linkedin.com/in/marcojr73/"
            name="Marco Júnior Lopes de Melo" role="Desenvolvedor Web" company="-" />
          <Speaker :img="SpeakerLucasWilman" link="https://www.linkedin.com/in/lucascrispim/"
            name="Lucas Wilman da Silva Crispim" role="Professor / Desenvolvedor" company="UFJF" />
          <Speaker :img="SpeakerDanilo" link="https://www.linkedin.com/in/danilo-oliveira-santos/"
            name="Danilo Oliveira Santos" role="Engenheiro de Dados / Professor" company="Faculdade Ensine" />
          <Speaker :img="SpeakerAnaCarolina" link="https://www.linkedin.com/in/anacarolinamarinho21/"
            name="Ana Carolina Da Costa Marinho" role="Analista de Cyber Threat Intelligence" company="Grupo Energisa" />
          <Speaker :img="SpeakerMarcus" link="https://www.linkedin.com/in/marcusajesus/"
            name="Marcus Antonio de Jesus" role="Product Manager" company="Asaas" />
          <Speaker :img="SpeakerLeandro" link="https://www.linkedin.com/in/lesimoess/"
            name="Leandro Simões da Silva" role="Engenheiro de Software" company="TheGuarantors" />
          <Speaker :img="SpeakerBarbara" link="https://www.linkedin.com/in/b%C3%A1rbara-r-neri-43a0021b2/"
            name="Bárbara Rezende Neri" role="Estudante de Ciência da Computação" company="UFSJ" />
          <Speaker :img="SpeakerRenato" link="https://www.linkedin.com/in/renatobonario/"
            name="Renato Bonario" role="Product Owner" company="Heineken" />
          <Speaker :img="SpeakerAldemon" link="https://www.linkedin.com/in/aldemonbonifacio/"
            name="Aldemon Lage Bonifácio" role="Líder Técnico" company="Afya" />
          <Speaker :img="SpeakerKevin" link="https://www.linkedin.com/in/kevin-azevedo-278526157/"
            name="Kevin Azevedo de Souza" role="Engenheiro de Segurança" company="PagBank" />
          <Speaker :img="SpeakerRomulo" link="https://www.linkedin.com/in/romulomurucci/"
            name="Rômulo Murucci Oliveira" role="Data Product Owner" company="MRS Logística" />
          <Speaker :img="SpeakerSamuel" link="https://www.linkedin.com/in/samuel-rocha-amaral/"
            name="Samuel Rocha Amaral" role="Especialista em DevOps/SRE" company="Smart NX" />
          <Speaker :img="SpeakerLuca" link="https://www.linkedin.com/in/luca-garcia-b359a6168/"
            name="Luca Garcia Honorio" role="Engenheiro de Dados" company="CI&T" />
          <Speaker :img="SpeakerTiago" link="https://www.linkedin.com/in/tiagoreisjf/"
            name="Tiago Reis" role="Coordenador de Tecnologia Educacional" company="Colégio Stella Matutina" />
          <Speaker :img="SpeakerMariaLuize" link="https://www.linkedin.com/in/marialuize/"
            name="Maria Luize Pinheiro" role="Engenheira de Deep Learning" company="Solved" />
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
            <img alt="Moinho" class="location-img" src="@/assets/conf2026/moinho-location.webp" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
      <section id="sponsors" class="infoSections">
        <h1 class="section-title">Patrocinadores</h1>
        <p class="section-text" style="margin-top: -30px">Gostaria de patrocinar? </p>
        <p class="section-text" style="margin-bottom: 20px">Preencha nosso <a href="https://forms.gle/SjgMnVW8G6x4bRir6" target="_blank">formulário
            de interesse</a> e aguarde o contato ou entre em contato através do email <a
            href="mailto:techhubjf@gmail.com">techhubjf@gmail.com</a></p>
        <div class="sponsor-class">
          <h2 class="section-title">Platina</h2>
          <div class="sponsors-images">
            <a href="https://www.nossomoinho.com/" class="sponsor-image-link" target="_blank">
              <img alt="Moinho" class="sponsor-image" src="@/assets/conf2026/logo-moinho.png" />
            </a>
            <!-- <a href="https://rubeus.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Rubeus" class="sponsor-image-rectangular" src="@/assets/conf2026/rubeus.png" />
            </a> -->
            <a href="https://www.levty.com/br" class="sponsor-image-link" target="_blank">
              <img alt="Levty" class="sponsor-image-rectangular" src="@/assets/conf2026/levty.svg" />
            </a>
            <!-- <a href="https://4linux.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="4 Linux" class="sponsor-image-rectangular" src="@/assets/conf2026/4linux.png" />
            </a> -->
            <!-- <a href="https://www.instagram.com/oticam3oculos/" class="sponsor-image-link" target="_blank">
              <img alt="M3 Óculos" class="sponsor-image-rectangular" src="@/assets/conf2026/m3-oculos.png" />
            </a> -->
            <!-- <a href="https://ensin-e.edu.br/" class="sponsor-image-link" target="_blank">
              <img alt="EnsinE" class="sponsor-image-rectangular" src="@/assets/conf2026/ensine.svg" />
            </a> -->
            <!-- <a href="https://www.uem.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="U&M" class="sponsor-image" src="@/assets/conf2026/uem-50.webp" loading="lazy" decoding="async" />
            </a> -->
          </div>
        </div>
        <div class="sponsor-class">
          <h2 class="section-title">Ouro</h2>
          <div class="sponsors-images">
            <!-- <a href="https://www.instagram.com/medeirosgourmetbuffet/" class="sponsor-image-link" target="_blank">
              <img alt="Buffet" class="sponsor-image" src="@/assets/conf2026/buffet.png" />
            </a> -->
            <a href="https://rubeus.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Rubeus" class="sponsor-image-rectangular" src="@/assets/conf2026/rubeus.png" />
            </a>
            <a href="https://inupcontabil.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="InUp Contabilidade" class="sponsor-image" src="@/assets/conf2026/inup.svg" />
            </a>
          </div>
        </div>
        <!-- <div class="sponsor-class">
          <h2 class="section-title">Prata</h2>
          <div class="sponsors-images">

          </div>
        </div> -->
        <div class="sponsor-class">
          <h2 class="section-title">Apoiadores</h2>
          <div class="sponsors-images">
            <!-- <a href="https://www.jetbrains.com/" class="sponsor-image-link" target="_blank">
              <img alt="Jet Brains" class="sponsor-image-rectangular" src="@/assets/conf2026/jetbrains.svg" />
            </a> -->
            <!-- <a href="https://www.jetbrains.com/" class="sponsor-image-link" target="_blank">
              <img alt="Jet Brains" class="sponsor-image-rectangular" src="@/assets/conf2026/elastic.svg" />
            </a> -->
            <a href="https://developers.google.com/community/experts?hl=pt-br" class="sponsor-image-link" target="_blank">
              <img alt="Google Developer Experts" class="sponsor-image-aspect" src="@/assets/conf2026/gde-logo.png" />
            </a>
            <a href="https://www.instagram.com/bytesbrejas/" class="sponsor-image-link" target="_blank">
              <img alt="Bytes e Brejas" class="sponsor-image" src="@/assets/conf2026/bytes-brejas.png" />
            </a>
            <a href="https://www.linkedin.com/company/capivara-tech-jf/" class="sponsor-image-link" target="_blank">
              <img alt="Capivara Tech" class="sponsor-image" src="@/assets/conf2026/capivara-tech.svg" />
            </a>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <p>© 2026 Tech Hub JF</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useEventLive } from '../composables/useHappeningNow'
import { useTheme } from '../composables/useTheme'
import InstagramIcon from '../components/icons/IconInstagram.vue'
import LinkedinIcon from '../components/icons/IconLinkedin.vue'
import YoutubeIcon from '../components/icons/IconYoutube.vue'
import MapsIcon from '../components/icons/IconMaps.vue'
import Speaker from '../components/conf2026/Speaker.vue'
import Schedule from '../components/conf2026/Schedule.vue'
import ScheduleTile from '../components/conf2026/ScheduleTile.vue'
import AgendaNow from '../components/conf2026/AgendaNow.vue'
import ScheduleFilters from '../components/conf2026/ScheduleFilters.vue'
import InstallButton from '../components/InstallButton.vue'
import { ref } from 'vue'
import SpeakerThiagoCantarino from '@/assets/conf2026/thiago-cantarino.webp'
import SpeakerLucasCarrilho from '@/assets/conf2026/lucas-carrilho.webp'
import SpeakerThiagoMiranda from '@/assets/conf2026/thiago-miranda.webp'
import SpeakerWendel from '@/assets/conf2026/wendel-silveira.webp'
import SpeakerBrendo from '@/assets/conf2026/brendo-freitas.webp'
import SpeakerMarcoJunior from '@/assets/conf2026/marco-junior.webp'
import SpeakerLucasWilman from '@/assets/conf2026/lucas-wilman.webp'
import SpeakerDanilo from '@/assets/conf2026/danilo-santos.webp'
import SpeakerAnaCarolina from '@/assets/conf2026/ana-carolina.webp'
import SpeakerMarcus from '@/assets/conf2026/marcus-jesus.webp'
import SpeakerLeandro from '@/assets/conf2026/leandro-simoes.webp'
import SpeakerBarbara from '@/assets/conf2026/barbara-neri.webp'
import SpeakerRenato from '@/assets/conf2026/renato-bonario.webp'
import SpeakerAldemon from '@/assets/conf2026/aldemon-bonifacio.webp'
import SpeakerKevin from '@/assets/conf2026/kevin-azevedo.webp'
import SpeakerRomulo from '@/assets/conf2026/romulo-murucci.webp'
import SpeakerSamuel from '@/assets/conf2026/samuel-amaral.webp'
import SpeakerLuca from '@/assets/conf2026/luca-garcia.webp'
import SpeakerTiago from '@/assets/conf2026/tiago-reis.webp'
import SpeakerMariaLuize from '@/assets/conf2026/maria-luize.webp'
import jfLogoLight from '@/assets/conf2026/tech-hub-jf.webp'
import jfLogoDark from '@/assets/conf2026/tech-hub-jf-dark.webp'

const eventLive = useEventLive()
const { theme, toggle } = useTheme()
const menuOpen = ref(false)

// "ACONTECENDO AGORA" → topo da programação (bloco Agora / A seguir).
function goToSchedule() {
  document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })
}

// "PROGRAMAÇÃO" → primeiro item da grade (Abertura).
function goToProgramacao() {
  const el = document.querySelector('.schedule-card[data-title="Abertura"]')
  ;(el ?? document.getElementById('schedule'))?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style scoped>
.app {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  max-width: 100%;
  position: relative;
  background-color: var(--thc-bg);
  color: var(--thc-text);
  font-family: var(--thc-display);
  overflow-x: clip;
}

/* Grade técnica sutil de fundo + brilho radial, cobrindo a página toda. */
.app::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    radial-gradient(900px 600px at 80% -5%, rgba(0, 82, 245, 0.22), transparent 60%),
    radial-gradient(700px 500px at 0% 30%, rgba(0, 224, 198, 0.08), transparent 60%),
    linear-gradient(var(--thc-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--thc-line) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 54px 54px, 54px 54px;
  opacity: var(--thc-grid-opacity);
}

.app > * {
  position: relative;
  z-index: 1;
}

#home {
  position: relative;
  background-image:
    var(--thc-hero-overlay),
    url('@/assets/conf2026/moinho.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  overflow: hidden;
}

/* Brilho azul atrás do logo do hero. */
#home::after {
  content: '';
  position: absolute;
  top: 38%;
  left: 50%;
  width: 70vw;
  max-width: 900px;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(0, 82, 245, 0.35), transparent 62%);
  filter: blur(20px);
  pointer-events: none;
  z-index: 0;
}

#home > * {
  position: relative;
  z-index: 1;
}

.hero-kicker {
  font-family: var(--thc-mono);
  font-size: clamp(12px, 1.4vw, 15px);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #2fe0cf;
  margin-bottom: 26px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.hero-kicker::before {
  content: '';
  width: 28px;
  height: 1px;
  background: #2fe0cf;
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
  background-color: #070e20;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: fixed;
  top: 0;
  z-index: 100;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 30px;
  padding-right: 50px;
  min-height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
}

.logoHeader {
  height: 5vh;
}

.buttonHeader {
  font-family: var(--thc-mono);
  font-size: 13px;
  letter-spacing: 0.08em;
  color: rgba(232, 238, 252, 0.62);
  border-radius: 6px;
  margin-left: 22px;
  padding: 6px 4px;
  position: relative;
  transition: color 0.18s ease;
}

.buttonHeader::after {
  content: '';
  position: absolute;
  left: 4px;
  right: 4px;
  bottom: 0;
  height: 2px;
  background: #00e0c6;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.22s ease;
}

.buttonHeader:hover {
  background-color: transparent;
  color: #ffffff;
}

/* Botão de alternância de tema (header sempre escuro). */
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  margin-left: 22px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.04);
  color: #cdd8f0;
  cursor: pointer;
  transition: color 0.18s ease, background-color 0.18s ease, border-color 0.18s ease;
}

.theme-toggle:hover {
  color: #00e0c6;
  border-color: #00e0c6;
  background: rgba(0, 224, 198, 0.08);
}

.buttonHeader:hover::after {
  transform: scaleX(1);
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
  width: min(680px, 82vw);
  margin: 0 0 36px;
  filter: drop-shadow(0 8px 40px rgba(0, 82, 245, 0.45));
}

.homeText {
  margin-bottom: 44px;
  gap: 14px;
  flex-direction: row;
  flex-wrap: wrap;
}

.homeTextFieldDate,
.homeTextFieldLocation {
  font-family: var(--thc-mono);
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(6px);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: fit-content;
  border-radius: 999px;
  padding: 8px 18px;
}

.homeTextFieldDate {
  color: #06121f;
  background-color: #00e0c6;
  border-color: transparent;
  font-weight: 800;
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
  border-radius: 14px;
  padding: 14px 34px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
  margin-bottom: 20px;
  box-shadow: 0 10px 28px rgba(0, 82, 245, 0.4);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;
}

.homeButton:hover {
  background-color: #0a5bff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(0, 82, 245, 0.55);
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
  font-family: var(--thc-display);
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--thc-text);
  margin-bottom: 50px;
  position: relative;
  padding-top: 22px;
}

/* Barra de acento acima de cada título de seção. */
.section-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--thc-brand), var(--thc-accent));
}

.now-jump-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin: 0 auto 30px;
  background-color: #e03535;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 28px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 24px rgba(224, 53, 53, 0.4);
}

.now-jump-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(224, 53, 53, 0.55);
}

.now-jump-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  animation: now-jump-pulse 1.2s ease-in-out infinite;
}

@keyframes now-jump-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.6); }
}

.section-text {
  font-size: 20px;
  color: var(--thc-text-dim);
  line-height: 1.7;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}

.section-text.bold-text {
  color: var(--thc-text);
  font-size: 24px;
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
  font-size: 18px;
  color: var(--thc-text-dim);
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 8px;
  text-align: left;
}

.section-list-text::marker {
  color: var(--thc-accent);
}

.section-text-location-title {
  font-family: var(--thc-display);
  font-size: 30px;
  font-weight: 800;
  color: var(--thc-text);
}

.section-text-location {
  font-size: 18px;
  color: var(--thc-text-dim);
}

.sponsor-class {
  margin-bottom: 50px;
}

.section-text a {
  color: var(--thc-brand-bright);
  font-weight: 600;
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
  background-color: var(--thc-bg-soft);
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
  background-color: var(--thc-bg-elev);
  border: 1px solid var(--thc-line);
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
  background-color: var(--thc-bg-elev);
  border: 1px solid var(--thc-line);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 20px;
}

.maps-icon {
  color: var(--thc-accent);
  background-color: rgba(0, 224, 198, 0.12);
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
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: var(--thc-bg-soft);
  border: 1px solid var(--thc-line);
  border-radius: 28px;
  margin-top: 6vh;
  margin-left: 200px;
  margin-right: 200px;
  scroll-margin-top: 15vh;
  box-shadow: var(--thc-shadow-lg);
}

.about-image {
  display: flex;
  margin-left: 5vh;
  margin-right: 5vh;
  margin-bottom: 50px;
}

.tech-hub-conf-photo {
  object-fit: cover;
  width: 100%;
  border-radius: 30px;
}

.sponsors-images {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 50px;
  padding-right: 50px;
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

.sponsor-image-aspect {
  height: 25vh;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.sponsor-image-link {
  border-radius: 20px;
  align-self: center;
  margin-left: 3vh;
  margin-right: 3vh;
  padding: 18px 24px;
  margin-top: 10px;
  background-color: #ffffff;
  border: 1px solid var(--thc-line);
  box-shadow: var(--thc-shadow-md);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.sponsor-image-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 46px rgba(0, 82, 245, 0.28);
  background-color: #ffffff;
}

footer {
  margin-top: 80px;
  background-color: var(--thc-bg-soft);
  border-top: 1px solid var(--thc-line);
  width: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 30px;
  padding-right: 50px;
  text-align: center;
  font-family: var(--thc-mono);
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--thc-text-dim);
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
  align-items: flex-start;
}

.schedule-main {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  list-style: none;
  padding-left: 0;
  margin-left: 40px;
  margin-right: 40px;
}

.schedule-one-row {
  grid-row: span 1;
  grid-column: span 1;
}

.schedule-gde {
  background-image:
    linear-gradient(var(--thc-bg-elev), var(--thc-bg-elev)),
    linear-gradient(135deg,
      #4285F4 0%, #4285F4 25%,
      #EA4335 25%, #EA4335 50%,
      #FBBC04 50%, #FBBC04 75%,
      #34A853 75%, #34A853 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-color: transparent !important;
  box-shadow: 0 10px 30px rgba(66, 133, 244, 0.22);
}

.schedule-gde::before {
  content: '';
  display: block;
  height: 70px;
  margin: 0 -20px 12px;
  background-color: white;
  background-image: url('@/assets/conf2026/gde.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 90%;
  border-bottom: 3px solid;
  border-image: linear-gradient(90deg,
    #4285F4 0% 25%,
    #EA4335 25% 50%,
    #FBBC04 50% 75%,
    #34A853 75% 100%) 1;
}

/* Antes esses cards ocupavam várias linhas (layout masonry), o que deixava
   cards da mesma linha com alturas diferentes. Agora cada card ocupa uma única
   linha e estica para a altura da linha — todos da mesma linha ficam iguais. */
.schedule-two-rows {
  grid-row: span 1;
  grid-column: span 1;
}

.schedule-three-rows {
  grid-row: span 1;
  grid-column: span 1;
}

.schedule-two-col {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

/* Botão hambúrguer — escondido no desktop, exibido no mobile. */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  margin-left: 18px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 120;
}

.nav-toggle span {
  display: block;
  height: 3px;
  width: 26px;
  border-radius: 3px;
  background-color: white;
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.nav-toggle.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.nav-toggle.open span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Drawer mobile */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 110;
  background: rgba(3, 29, 66, 0.55);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: flex-end;
}

.mobile-menu-panel {
  background-color: #070e20;
  width: min(78vw, 320px);
  height: 100%;
  padding: 96px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  box-shadow: -12px 0 40px rgba(0, 0, 0, 0.35);
}

/* Mesmo estilo do nav do desktop (.buttonHeader): mono, discreto, underline teal. */
.mobile-menu-panel a {
  font-family: var(--thc-mono);
  font-size: 15px;
  letter-spacing: 0.08em;
  color: rgba(232, 238, 252, 0.62);
  padding: 14px 6px;
  width: fit-content;
  align-self: center;
  position: relative;
  transition: color 0.18s ease;
}

.mobile-menu-panel a::after {
  content: '';
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 8px;
  height: 2px;
  background: #00e0c6;
  transform: scaleX(0);
  transition: transform 0.22s ease;
}

.mobile-menu-panel a:hover,
.mobile-menu-panel a:active {
  color: #ffffff;
}

.mobile-menu-panel a:hover::after,
.mobile-menu-panel a:active::after {
  transform: scaleX(1);
}

.mobile-menu-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
  margin: 10px 12px;
}

.mobile-menu-social {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 22px;
  color: white;
}

.mobile-menu-social .social-icon {
  color: white;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.18s ease;
}

/* Ícones sociais não usam o underline teal dos links de texto. */
.mobile-menu-social .social-icon::after {
  display: none;
}

.mobile-menu-social .social-icon:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.22s ease;
}

.drawer-enter-active .mobile-menu-panel,
.drawer-leave-active .mobile-menu-panel {
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .mobile-menu-panel,
.drawer-leave-to .mobile-menu-panel {
  transform: translateX(100%);
}

@media screen and (max-width: 1280px) {
  .schedule-main {
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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
    width: min(420px, 74vw);
    margin: 0 0 22px;
  }

  #home {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    /* Alinha o conteúdo ao topo (logo abaixo do header) em vez de centralizar,
       pra logo + botões ficarem visíveis sem precisar rolar. */
    justify-content: flex-start;
    padding-top: 92px;
    padding-bottom: 48px;
  }

  .hero-kicker {
    margin-bottom: 18px;
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

  .nav-toggle {
    display: flex;
  }

  /* Ícones sociais saem do header no mobile — ficam só dentro do menu. */
  .social-icons {
    display: none;
  }

  .infoSections {
    margin-left: 2vh;
    margin-right: 2vh;
    border-radius: 22px;
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

  .tech-hub-conf-photo {
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 10px;
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
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
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
    justify-content: flex-start;
  }

  .schedule-two-col {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
