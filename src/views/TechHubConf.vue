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
        <a href="https://www.sympla.com.br/evento/tech-hub-conf-2026/3325416" class="buttonHeader">INSCREVA-SE</a>
        <!-- <a href="https://forms.gle/64jwQb4AKkdc2cFu9" class="buttonHeader">SUBMETA SUA PALESTRA</a> -->
        <a href="/conf/2025" class="buttonHeader" target="_blank">EDIÇÃO 2025</a>
        <a href="/conf/2024" class="buttonHeader" target="_blank">EDIÇÃO 2024</a>
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
      </nav>
    </header>
    <div class="main">
      <section id="home">
        <img alt="Tech Hub Logo" class="logoBanner" src="@/assets/logo-dark.png" />
        <div class="homeText">
          <h2 class="homeTextFieldDate">30 de Maio</h2>
          <h2 class="homeTextFieldLocation">Moinho - Juiz de Fora</h2>
        </div>
        <!-- <div class="homeButtons">
          <a href="https://drive.google.com/drive/folders/1hzQdZs_rLQp4XIngGSPgq6zo5IlmhqkR?usp=sharing" target="_blank"
            class="homeButton">FOTOS</a>
          <a href="https://linktr.ee/techhubjf" target="_blank"
              class="homeButton">REDES SOCIAIS</a>
        </div> -->
        <div class="homeButtons">
          <a href="https://www.sympla.com.br/evento/tech-hub-conf-2026/3325416" target="_blank"
            class="homeButton">INSCREVA-SE</a>
          <InstallButton />
          <!-- <a href="https://forms.gle/64jwQb4AKkdc2cFu9" target="_blank"
            class="homeButton">SUBMETA SUA PALESTRA</a> -->
        </div>
      </section>
      <section id="about" class="infoSections">
        <h1 class="section-title">Sobre</h1>
        <div class="about-image">
          <img alt="Tech Hub Conf" class="tech-hub-conf-photo" src="@/assets/tech-hub-conf.webp" loading="lazy" decoding="async" />
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
            <img alt="Moinho" class="location-img" src="@/assets/moinho-location.webp" loading="lazy" decoding="async" />
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
              <img alt="Moinho" class="sponsor-image" src="@/assets/logo-moinho.png" />
            </a>
            <!-- <a href="https://rubeus.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Rubeus" class="sponsor-image-rectangular" src="@/assets/rubeus.png" />
            </a> -->
            <a href="https://www.levty.com/br" class="sponsor-image-link" target="_blank">
              <img alt="Levty" class="sponsor-image-rectangular" src="@/assets/levty.svg" />
            </a>
            <!-- <a href="https://4linux.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="4 Linux" class="sponsor-image-rectangular" src="@/assets/4linux.png" />
            </a> -->
            <!-- <a href="https://www.instagram.com/oticam3oculos/" class="sponsor-image-link" target="_blank">
              <img alt="M3 Óculos" class="sponsor-image-rectangular" src="@/assets/m3-oculos.png" />
            </a> -->
            <!-- <a href="https://ensin-e.edu.br/" class="sponsor-image-link" target="_blank">
              <img alt="EnsinE" class="sponsor-image-rectangular" src="@/assets/ensine.svg" />
            </a> -->
            <!-- <a href="https://www.uem.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="U&M" class="sponsor-image" src="@/assets/uem-50.webp" loading="lazy" decoding="async" />
            </a> -->
          </div>
        </div>
        <div class="sponsor-class">
          <h2 class="section-title">Ouro</h2>
          <div class="sponsors-images">
            <!-- <a href="https://www.instagram.com/medeirosgourmetbuffet/" class="sponsor-image-link" target="_blank">
              <img alt="Buffet" class="sponsor-image" src="@/assets/buffet.png" />
            </a> -->
            <a href="https://rubeus.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Rubeus" class="sponsor-image-rectangular" src="@/assets/rubeus.png" />
            </a>
            <a href="https://inupcontabil.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="InUp Contabilidade" class="sponsor-image" src="@/assets/inup.svg" />
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
              <img alt="Jet Brains" class="sponsor-image-rectangular" src="@/assets/jetbrains.svg" />
            </a> -->
            <!-- <a href="https://www.jetbrains.com/" class="sponsor-image-link" target="_blank">
              <img alt="Jet Brains" class="sponsor-image-rectangular" src="@/assets/elastic.svg" />
            </a> -->
            <a href="https://developers.google.com/community/experts?hl=pt-br" class="sponsor-image-link" target="_blank">
              <img alt="Google Developer Experts" class="sponsor-image-aspect" src="@/assets/gde-logo.png" />
            </a>
            <a href="https://www.instagram.com/bytesbrejas/" class="sponsor-image-link" target="_blank">
              <img alt="Bytes e Brejas" class="sponsor-image" src="@/assets/bytes-brejas.png" />
            </a>
            <a href="https://www.linkedin.com/company/capivara-tech-jf/" class="sponsor-image-link" target="_blank">
              <img alt="Capivara Tech" class="sponsor-image" src="@/assets/capivara-tech.svg" />
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
import InstagramIcon from '../components/icons/IconInstagram.vue'
import LinkedinIcon from '../components/icons/IconLinkedin.vue'
import YoutubeIcon from '../components/icons/IconYoutube.vue'
import MapsIcon from '../components/icons/IconMaps.vue'
import Speaker from '../components/Speaker.vue'
import Schedule from '../components/Schedule.vue'
import ScheduleTile from '../components/ScheduleTile.vue'
import InstallButton from '../components/InstallButton.vue'
import SpeakerThiagoCantarino from '@/assets/thiago-cantarino.webp'
import SpeakerLucasCarrilho from '@/assets/lucas-carrilho.webp'
import SpeakerThiagoMiranda from '@/assets/thiago-miranda.webp'
import SpeakerWendel from '@/assets/wendel-silveira.webp'
import SpeakerBrendo from '@/assets/brendo-freitas.webp'
import SpeakerMarcoJunior from '@/assets/marco-junior.webp'
import SpeakerLucasWilman from '@/assets/lucas-wilman.webp'
import SpeakerDanilo from '@/assets/danilo-santos.webp'
import SpeakerAnaCarolina from '@/assets/ana-carolina.webp'
import SpeakerMarcus from '@/assets/marcus-jesus.webp'
import SpeakerLeandro from '@/assets/leandro-simoes.webp'
import SpeakerBarbara from '@/assets/barbara-neri.webp'
import SpeakerRenato from '@/assets/renato-bonario.webp'
import SpeakerAldemon from '@/assets/aldemon-bonifacio.webp'
import SpeakerKevin from '@/assets/kevin-azevedo.webp'
import SpeakerRomulo from '@/assets/romulo-murucci.webp'
import SpeakerSamuel from '@/assets/samuel-amaral.webp'
import SpeakerLuca from '@/assets/luca-garcia.webp'
import SpeakerTiago from '@/assets/tiago-reis.webp'
import SpeakerMariaLuize from '@/assets/maria-luize.webp'
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
  background-image: url('@/assets/moinho.webp');
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
  padding: 10px;
  margin-top: 10px;
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
    linear-gradient(white, white),
    linear-gradient(135deg,
      #4285F4 0%, #4285F4 25%,
      #EA4335 25%, #EA4335 50%,
      #FBBC04 50%, #FBBC04 75%,
      #34A853 75%, #34A853 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-color: transparent !important;
  box-shadow: 0 4px 18px rgba(66, 133, 244, 0.15);
}

.schedule-gde::before {
  content: '';
  display: block;
  height: 70px;
  margin: 0 -20px 12px;
  background-color: white;
  background-image: url('@/assets/gde.svg');
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

.schedule-two-rows {
  grid-row: span 2;
  grid-column: span 1;
}

.schedule-three-rows {
  grid-row: span 3;
  grid-column: span 1;
}

.schedule-two-col {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
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
