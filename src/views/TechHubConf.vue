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
        <!-- <a href="https://www.sympla.com.br/evento/tech-hub-conf-2025/2793748" class="buttonHeader">INSCREVA-SE</a>
        <a href="https://www.papercall.io/tech-hub-conf-2025" class="buttonHeader">SUBMETA SUA PALESTRA</a> -->
        <a href="/conf/2024" class="buttonHeader" target="_blank">EDIÇÃO 2024</a>
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
          <h2 class="homeTextFieldDate">31 de Maio</h2>
          <h2 class="homeTextFieldLocation">Moinho - Juiz de Fora</h2>
        </div>
        <!-- <div class="homeButtons">
          <a href="https://www.sympla.com.br/evento/tech-hub-conf-2025/2793748" target="_blank"
            class="homeButton">INSCREVA-SE</a>
          <a href="https://www.papercall.io/tech-hub-conf-2025" target="_blank"
            class="homeButton">SUBMETA SUA PALESTRA</a>
        </div> -->
      </section>
      <section id="about" class="infoSections">
        <h1 class="section-title">Sobre</h1>
        <div class="about-image">
          <img alt="Tech Hub Conf" class="tech-hub-conf-photo" src="@/assets/tech-hub-conf.jpg" />
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

          <ScheduleTile time="8:30 - 9:10" title="Abertura" location="Auditório: Teste em Produção"/>
          
            <Schedule :speakers="[{img: SpeakerCibelle, name: 'Cibelle Castro', role: 'Senior SQL Server Database Administrator', company: 'Itaú Unibanco'}]"
              :types="[{id: 'devops', name: 'DevOps'}]" time="9:10 - 10:00" location="Sala: Delete sem Where"
              title="Monitorando PostgreSQL com Terraform, Docker e Power BI: Da Infraestrutura à Visualização"
              description="Nesta palestra, abordaremos como automatizar o monitoramento do PostgreSQL utilizando Terraform, Docker e Power BI. Inicialmente, veremos a infraestrutura como código para criar um ambiente PostgreSQL com Terraform e Docker. Em seguida, exploraremos extensões como pg_stat_statements para coletar métricas de desempenho. Depois, discutiremos a extração e armazenamento desses dados para análise. Por fim, aprenderemos a visualizar essas métricas no Power BI, criando dashboards interativos para otimizar a performance do banco de dados." />
            
            <Schedule :speakers="[{img: SpeakerRenato, name: 'Renato Bonario', role: 'Sênior Product Manager', company: 'Capivara Tech'}]"
              :types="[{id: 'product', name: 'Produto'}]" time="9:10 - 10:00"
              title="Aplicando Jobs To Be Done para Criar Produtos de Alto Impacto" location="Auditório: Teste em Produção" 
              description="Descubra como o framework Jobs To Be Done pode transformar a criação de produtos! Veja como estruturar processos, otimizar discovery e alinhar soluções às reais necessidades dos usuários. Uma abordagem prática para product managers, empreendedores e devs de diversos níveis de senioridades." />
            
            <Schedule :speakers="[{img: SpeakerJoaoSouza, name: 'João Souza', role: 'Full-stack Developer', company: 'CAEd / UFJF'}]"
              :types="[{id: 'ai', name: 'AI'}]" time="9:10 - 10:00"
              title="Desmistificando IAs: Podemos fazer o nosso próprio ChatGPT?" location="Sala: Deploy da Sexta" 
              description="Desde a pandemia, as Inteligências Artificiais tem ganhado muito destaque, e vem impressionando muita gente com a capacidade em realizar certas tarefas. Embora muitas pessoas já tenham tido algum contato, a grande maioria desconhece o que tem por trás desse tipo de ferramenta. Aqui, o objetivo é explicar sobre a área de IA, mostrar como os modelos como ChatGPT, DeepSeek e Llama funcionam, e como podemos implementá-los." />

            <ScheduleTile time="10:00 - 10:30" title="Coffee Break" />

            <ScheduleTile time="10:30 - 10:45" title="Espaço Patrocinadores" />
              
            <ScheduleTile time="10:45 - 11:15" title="Vazio"  style="grid-column: auto;" location="Sala: Delete sem Where"/>

            <Schedule :speakers="[{img: SpeakerGabriela, name: 'Gabriela Cunha', role: 'Analista de Dados', company: 'BeFly'}, {img: SpeakerCamillaPicoli, name: 'Camilla Picoli', role: 'Analista de Dados', company: 'BeFly'}]"
              :types="[{id: 'data', name: 'Dados'}]" time="10:45 - 11:15" location="Auditório: Teste em Produção"
              title="Dados: O novo petróleo"
              description="Em um mundo onde os dados são considerados o novo petróleo do século 21, esse talk irá oferecer uma imersão simplificada na importância vital desses ativos para o sucesso nos negócios. 
              
              Ela aborda desde a complexidade subjacente à análise de dados, desde a utilização da inteligência artificial (IA) e outras ferramentas tecnológicas para alavancar estratégias empresariais eficazes. Da fase inicial de coleta até a interpretação avançada, são exploradas etapas cruciais para aproveitar plenamente as oportunidades oferecidas pela era dos dados. 
              
              Este mergulho buscará oferecer informações valiosas e práticas para quem busca prosperar em um ambiente cada vez mais orientado por informações e digitalizado, incluindo o uso de linguagens de programação voltadas para dados." />
          
            <Schedule :speakers="[{img: SpeakerIngrid, name: 'Ingrid Coutinho', role: 'Product Manager', company: 'FIAP'}]"
              :types="[{id: 'ai', name: 'AI'}, {id: 'workshop', name: 'Workshop'}]" time="10:45 - 12:35" location="Sala: Deploy da Sexta"
              style="grid-row: span 3; grid-column: span 1"
              title="Como construir produtos com IA Code"
              description="A inteligência artificial está transformando a forma como produtos são criados e entregues. Neste workshop prático, você aprenderá a integrar IA no desenvolvimento de produtos, desde a concepção até a implementação. Vamos explorar casos reais, ferramentas essenciais e boas práticas para utilizar IA de forma estratégica. Se você quer entender como a IA pode gerar valor para seu produto e impulsionar a inovação, este workshop é para você!" />

            <Schedule :speakers="[{img: SpeakerJoao, name: 'João Medina', role: 'Backend Engineering Specialist', company: 'iFood'}]"
              company="iFood" :types="[{id: 'data', name: 'Dados'}]" time="11:15 - 12:05" location="Sala: Delete sem Where"
              title="Elasticserch? Que trem é esse?"
              description="O Elasticsearch é uma das ferramentas mais poderosas para busca e análise de dados em grande escala, mas entender seu funcionamento e aplicabilidade pode ser um desafio. Nesta talk, vamos explorar os conceitos fundamentais do Elasticsearch, desde sua estrutura interna até casos de uso em projetos reais.

Abordaremos como ele opera, como indexa e busca informações de forma eficiente, e quais estratégias podem ser utilizadas para integrá-lo a diferentes cenários. Além disso, traremos um olhar sobre como grandes empresas utilizam a ferramenta, destacando tanto os casos de sucesso quanto os desafios e falhas enfrentados ao longo do caminho.

Se você quer entender como o Elasticsearch pode transformar a maneira como lidamos com dados, otimizar buscas e trazer mais eficiência para aplicações escaláveis, essa talk é para você!" />

            <Schedule :speakers="[{img: SpeakerGuilherme, name: 'Guilherme Vianna', role: 'Software Engineering Manager', company: 'iFood'}]"
              :types="[{id: 'backend', name: 'Backend'}]" time="11:15 - 12:05" location="Auditório: Teste em Produção"
              title="Aplicações Resilientes - do caos aos fallbacks"
              description="Sua aplicação está pronta para falhar? Do caos às soluções práticas, descubra como construir sistemas resilientes que sobrevivem a falhas e se recuperam com eficiência. Aprenda padrões, estratégias e técnicas essenciais para evitar desastres e garantir alta disponibilidade.Resiliência não é opcional" />

            <Schedule :speakers="[{img: SpeakerDanilo, name: 'Danilo Oliveira', role: 'Professor', company: 'Ensine'}]"
              :types="[{id: 'data', name: 'Dados'}]" time="12:05 - 12:35" location="Sala: Delete sem Where"
              title="Microsoft Fabric: Costurando Soluções Inteligentes"
              description="Descubra como o Microsoft Fabric está revolucionando a tecnologia com soluções inteligentes e eficientes. Junte-se a nós para explorar suas funcionalidades, casos de uso e dicas práticas em uma palestra dinâmica e envolvente!" />

            <Schedule :speakers="[{img: SpeakerLucasCarrilho, name: 'Lucas Carrilho', role: 'Desenvolvedor Backend', company: 'Mercado Livre'}]"
              :types="[{id: 'carreer', name: 'Carreira'}]" time="12:05 - 12:35" location="Sala: Deploy da Sexta"
              title="Como se preparar para processos seletivos de Big Techs em 2025"
              description="Hoje o objetivo ou sonho de alguns Devs, independente do nível de senioridade, é fazer parte de uma grande empresa com forte potencial tecnológico.
Nesta talk, falaremos sobre processos e fases mais comuns de algumas dessas principais empresas do ramo, e como se preparar para essas oportunidades." />

            <ScheduleTile time="12:35 - 13:30" title="Almoço" />

            <ScheduleTile time="13:30 - 14:00" title="Ignite Talks" location="Auditório: Teste em Produção" />

            <Schedule :speakers="[{img: SpeakerAldemon, name: 'Aldemon Bonifácio', role: 'Coordenador de Tecnologia', company: 'Afya'}]"
              :types="[{id: 'menagement', name: 'Gestão'}]" time="14:00 - 14:30" location="Sala: Delete sem Where"
              title="Do Código à Liderança - Como unir tecnologia e gestão de pessoas"
              description="Descubra como líderes técnicos e de pessoas se complementam. Nesta palestra, troque ideias e aprenda ferramentas para equilibrar tecnologia e gestão, liderando com mais eficiência e impacto. Participe!" />

            <Schedule :speakers="[{img: SpeakerFabricio, name: 'Fabricio Lima', role: 'Analytics Engineer', company: 'Nubank'}]"
              :types="[{id: 'data', name: 'Dados'}]" time="14:00 - 14:30" location="Auditório: Teste em Produção"
              title="Não existe só cientista! Uma conversa sobre os caminhos da área de dados"
              description="Que tal conversarmos sobre as diversas carreiras que existem na área de dados? 
Utilizando como base a pesquisa feita em 2024 pelo Data Hackers, a maior comunidade de Data Science do Brasil, falaremos desde o papel de cada cargo, até a média salarial por senioridade!"  />
            
            <Schedule :speakers="[{img: SpeakerHenrique, name: 'Henrique Cabral', role: 'Security Engineer', company: 'Aikido Security'}]"
              :types="[{id: 'security', name: 'Segurança'}, {id: 'workshop', name: 'Workshop'}]" time="14:00 - 15:00" location="Sala: Deploy da Sexta"
              style="grid-row: span 2; grid-column: span 1"
              title="Secure Coding Training"
              description="Reconfigurando os famosos Capture the Flag(CTF) da segurança ofensiva para atender exclusivamente desenvolvedores, este treinamento visa colocar cara-a-cara vulnerabilidades e desenvolvedores com o objetivo de ensinar as boas práticas do desenvolvimento seguro na prática."  />

          <Schedule :speakers="[{img: SpeakerDanton, name: 'Danton Rafael', role: 'Senior Devops Engineer', company: 'Zallpy Digital'}]"
            :types="[{id: 'data', name: 'Dados'}]" time="14:30 - 15:00"  location="Sala: Delete sem Where"
            title="Vector Databases: O Que São e Como Funcionam?"
            description="Com o aumento do uso de aplicações de IA, principalmente aquelas que tem como base LLMs, bancos de dados tradicionais já não conseguem nos servir de forma eficiente para alguns casos de uso. Nessa palestra pretendo abordar alguns conceitos sobre Vector Databases e Use Cases para poder exemplificar." />
          
          <Schedule :speakers="[{img: SpeakerLaurene2, name: 'Laurene Alves', role: 'CEO/Fundadora', company: 'Gleba Arquitetura e Engenharia'}]"
            :types="[{id: 'vr', name: 'Realidade Virtual'}]" time="14:30 - 15:00"  location="Auditório: Teste em Produção"
            title="Realidade Virtual na Arquitetura: O Futuro das Obras Sem Surpresas"
            description="Imagine prever cada detalhe de sua obra antes mesmo de começar! Com realidade imersiva , eliminamos erros, reduzimos desperdícios e garantimos decisões mais inteligentes. Descubra como RV/A está transformando a construção civil e levando projetos a um novo nível de eficiência e sustentabilidade!" />
          
          <Schedule :speakers="[{img: SpeakerRafael, name: 'Rafael Kneip', role: 'Engenheiro Mecânico', company: 'UFJF'}]"
            :types="[{id: 'opensource', name: 'Open Source'}]" time="15:00 - 15:30" location="Sala: Delete sem Where"
            title="RocketPy: a revolução open source"
            description="O que é necessário para criar um projeto open source de sucesso? Quais são os desafios para mantê-los? Como engajar sua comunidade? As respostas para essas perguntas tornam o software brasileiro de trajetória e dinâmica de voo de foguetes RocketPy referência mundial no setor. Criado em 2017 por estudantes da Universidade de São Paulo, o RocketPy é utilizado em todo o mundo por estudantes e amantes do foguetemodelismo, com destaque para sua atuação na competição acadêmica European Rocketry Challenge, na qual é o software oficial de simulação para apoio às equipes e controle de segurança. Nesta palestra, a equipe do RocketPy busca compartilhar seus conhecimentos, inspirando uma nova geração de projetos open source." />
          
          <Schedule :speakers="[{img: SpeakerTiago, name: 'Tiago Calado', role: 'Desenvolvedor Backend', company: 'Monkey'}]"
            :types="[{id: 'qa', name: 'QA'}]" time="15:00 - 15:30" location="Sala: Deploy da Sexta"
            title="Importância de Testes de Software na Entrega de Produtos"
            description="Redução de bugs, melhor ciclo de entregas e maior confiabilidade de marca: nesta talk irei mostrar porque os testes de software devem ser vistos como um recurso estratégico para a sua empresa e como realizá-los." />
            
          <Schedule :speakers="[{img: SpeakerJade, name: 'Jade Fonseca', role: 'Advogada', company: 'A.J Soluções Tecnológicas'}]"
            :types="[{id: 'ai', name: 'AI'}]" time="15:00 - 15:30" location="Auditório: Teste em Produção"
            title="Desenvolvimento seguro e LGPD: protegendo dados e impulsionando sua carreira em TI"
            description="A LGPD não é só um requisito legal - é um diferencial competitivo para desenvolvedores. Dominar Privacy by Design, anonimização e gestão de consentimento torna seus projetos mais seguros e valoriza sua carreira. Aprenda a se comunicar com titulares de dados e equipes para garantir conformidade." />

          <ScheduleTile time="15:30 - 16:00" title="Coffe Break"/>

          <ScheduleTile time="16:00 - 16:30" title="Espaço Patrocinadores"/>
          
          <Schedule :speakers="[{img: SpeakerAntonio, name: 'Antonio Brito', role: 'Especialista de Inovação Empresarial', company: 'Firjan'}]"
              :types="[{id: 'management', name: 'Gestão'}]" location="Sala: Delete Sem Where" time="16:15 - 17:05"
              title="Da Cultura à Prática: Como Diagnosticar, Estruturar e Comunicar a Inovação nas Organizações"
              description="Empresas falham em inovar não por falta de ideias, mas por barreiras culturais e comunicação ineficaz. Nesta palestra, você verá como diagnosticar desafios, criar processos e estruturar estratégias de comunicação que transformam inovação em prática real." />
          
          <ScheduleTile time="16:15 - 17:55" title="Mesa Redonda" location="Auditório: Teste em Produção" style="grid-row: span 2; grid-column: span 1"/>

          <Schedule :speakers="[{img: SpeakerAna, name: 'Ana Carolina Ovídio', role: 'Data Engineer II', company: 'iFood'}]"
            :types="[{id: 'data', name: 'Dados'}, {id: 'workshop', name: 'Workshop'}]" time="16:15 - 17:55" location="Sala: Deploy da Sexta"
            style="grid-row: span 2; grid-column: span 1"
            title="Como a estatística e a computação auxiliam nas tomadas de decisões por meio de plataformas de experimentação"
            description="A experimentação antecipa impactos e reduz riscos antes de qualquer mudança efetiva em seu produto. Através de testes automátizados, é possível aplicar a mudança em uma amostra de clientes e analisar estatisticamente se o teste reflete a realidade e, aumentará as margens de lucro da empresa." />

          <Schedule :speakers="[{img: SpeakerCamilla, name: 'Camilla Schettino', role: 'Team Tech Lead', company: 'Levty'}]"
            :types="[{id: 'ai', name: 'AI'}]" time="17:05 - 17:55" location="Sala: Delete sem Where"
            title="Entendendo Negócios, Criando Soluções: IA e Low-Code no Desenvolvimento"
            description="Na palestra 'Entendendo Negócios, Criando Soluções: IA e Low-Code no Desenvolvimento', exploraremos como a inteligência artificial pode transformar o processo de desenvolvimento de software. Com a IA, podemos focar mais na compreensão e na solução de problemas de negócios, em vez de nos aprofundarmos em linguagens de programação específicas, porém isso tudo sem diminuir a importância de um código bem escrito e a compreensão da base ad engenharia de software. Além disso, abordarei como as plataformas low-code estão revolucionando a forma de criar soluções, permitindo que profissionais de diferentes áreas contribuam para o desenvolvimento de software de maneira mais ágil e eficiente. A palestra trará insights sobre como essas tecnologias estão moldando o futuro do desenvolvimento e proporcionando novas oportunidades para empresas e profissionais."/>

          <ScheduleTile time="17:55 - 18:10" title="Espaço Patrocinadores" location="Auditório: Teste em Produção"/>
          
          <ScheduleTile time="18:10 - 18:30" title="Sorteios e encerramento" location="Auditório: Teste em Produção"/>
        </div>
      </section>
      <section id="speakers" class="infoSections">
        <h1 class="section-title">Palestrantes</h1>
        <div class="speakers-main">
          <Speaker :img="SpeakerHenrique" link="https://www.linkedin.com/in/henrique-cabral-a6b7ba176/"
            name="Henrique Cabral" role="Security Engineer" company="Aikido Security" />
          <Speaker :img="SpeakerAna" link="https://www.linkedin.com/in/ana-carolina-ov%C3%ADdio/" name="Ana Carolina Ovídio"
            role="Data Engineer II" company="iFood" />
          <Speaker :img="SpeakerLucasCarrilho" link="https://linktr.ee/devmagro" name="Lucas Carrilho"
            role="Desenvolvedor Backend" company="Mercado Livre" />
          <Speaker :img="SpeakerCamilla" link="https://www.linkedin.com/in/camillaschettino/" name="Camilla Schettino"
            role="Team Tech Lead" company="Levty" />
          <Speaker :img="SpeakerFabricio" link="https://www.linkedin.com/in/fabriciooml/" name="Fabricio Lima"
            role="Analytics Engineer" company="Nubank" />
          <Speaker :img="SpeakerCibelle" link="https://www.linkedin.com/in/cibelle-castro-638bb118/" name="Cibelle Castro"
            role="Senior SQL Server Database Administrator" company="Itaú Unibanco" />
          <Speaker :img="SpeakerJoao" link="https://www.linkedin.com/in/joaomedinadev/" name="João Medina"
            role="Backend Engineering Specialist" company="iFood" />
          <Speaker :img="SpeakerIngrid" link="https://ingridiz.com/" name="Ingrid Coutinho"
            role="Product Manager" company="FIAP" />
          <Speaker :img="SpeakerRenato" link="https://renatobonario.com.br/" name="Renato Bonario"
            role="Sênior Product Manager" company="Capivara Tech" />
          <Speaker :img="SpeakerJade" link="https://www.linkedin.com/in/jade-fonseca-vieira-77a70b22b/" name="Jade Fonseca" 
            role="Advogada" company="A.J Soluções Tecnológicas" />
          <Speaker :img="SpeakerDanilo" link="https://www.linkedin.com/in/danilo-oliveira-santos/" name="Danilo Oliveira Santos" 
            role="Professor" company="EnsinE"/>
          <Speaker :img="SpeakerGabriela" link="https://www.linkedin.com/in/gabrielafpcunha/" name="Gabriela Cunha"
            role="Fundadora" company="Steps" />
          <Speaker :img="SpeakerAntonio" link="https://www.linkedin.com/in/antoniobritocjr/" name="Antonio Brito" 
            role="Especialista de Inovação Empresarial" company="Firjan" />
          <Speaker :img="SpeakerCamillaPicoli" link="https://www.linkedin.com/in/camillapicoli/" name="Camilla Picoli"
            role="Psicóloga" company="Steps" />
          <Speaker :img="SpeakerJoaoSouza" link="https://www.linkedin.com/in/souzajbr/" name="João Souza"
            role="Full-stack Developer" company="CAEd / UFJF" />
          <Speaker :img="SpeakerLaurene" link="https://www.instagram.com/laurenealves/" name="Laurene Alves"
            role="CEO/Fudadora" company="Gleba Arquitetura e Engenharia" />
          <Speaker :img="SpeakerGuilherme" link="https://www.linkedin.com/in/viannaguilherme/" name="Guilherme Vianna"
            role="Software Engineering Manager" company="iFood" />
          <Speaker :img="SpeakerAldemon" link="https://www.linkedin.com/in/aldemonbonifacio/"
            name="Aldemon Bonifácio" role="Coordenador de Tecnologia" company="Afya" />
          <Speaker :img="SpeakerTiago" link="https://www.linkedin.com/in/calado-tiago/" name="Tiago Calado"
            role="Desenvolvedor Backend" company="Monkey" />
          <Speaker :img="SpeakerRafael" link="https://www.linkedin.com/in/rafael-kneip/" name="Rafael Kneip"
            role="Engenheiro Mecânico" company="UFJF" />
          <Speaker :img="SpeakerDanton" link="https://www.linkedin.com/in/danton-rafael/" name="Danton Rafael"
            role="Senior Devops Engineer" company="Zallpy Digital" />
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
        <p class="section-text" style="margin-bottom: 20px">Confira nossas <a href="https://forms.gle/qhRQQURFEc9HN5jx8" target="_blank">opções
            de patrocínio</a> e entre em contato através do email <a
            href="mailto:techhubjf@gmail.com">techhubjf@gmail.com</a></p>
        <div class="sponsor-class">
          <h2 class="section-title">Platina</h2>
          <div class="sponsors-images">
            <a href="https://www.nossomoinho.com/" class="sponsor-image-link" target="_blank">
              <img alt="Moinho" class="sponsor-image" src="@/assets/logo-moinho.png" />
            </a>
            <a href="https://rubeus.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Rubeus" class="sponsor-image-rectangular" src="@/assets/rubeus.png" />
            </a>
            <a href="https://www.levty.com/br" class="sponsor-image-link" target="_blank">
              <img alt="Levty" class="sponsor-image-rectangular" src="@/assets/levty.svg" />
            </a>
            <a href="https://4linux.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="4 Linux" class="sponsor-image-rectangular" src="@/assets/4linux.png" />
            </a>
            <a href="https://www.instagram.com/oticam3oculos/" class="sponsor-image-link" target="_blank">
              <img alt="M3 Óculos" class="sponsor-image-rectangular" src="@/assets/m3-oculos.png" />
            </a>
            <a href="https://ensin-e.edu.br/" class="sponsor-image-link" target="_blank">
              <img alt="EnsinE" class="sponsor-image-rectangular" src="@/assets/ensine.svg" />
            </a>
            <a href="https://www.uem.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="U&M" class="sponsor-image" src="@/assets/uem-50.png" />
            </a>
          </div>
        </div>
        <div class="sponsor-class">
          <h2 class="section-title">Prata</h2>
          <div class="sponsors-images">
            <a href="https://linuxtips.io/" class="sponsor-image-link" target="_blank">
              <img alt="Linux Tips" class="sponsor-image-rectangular" src="@/assets/linuxtips.png" />
            </a>
          </div>
        </div>
        <div class="sponsor-class">
          <h2 class="section-title">Apoiadores</h2>
          <div class="sponsors-images">
            <a href="https://www.jetbrains.com/" class="sponsor-image-link" target="_blank">
              <img alt="Jet Brains" class="sponsor-image-rectangular" src="@/assets/jetbrains.svg" />
            </a>
            <a href="https://www.instagram.com/cafe_das_minas/" class="sponsor-image-link" target="_blank">
              <img alt="Café das Minas" class="sponsor-image" src="@/assets/cafe-das-minas.png" />
            </a>
            <a href="https://www.linkedin.com/company/capivara-tech-jf/" class="sponsor-image-link" target="_blank">
              <img alt="Capivara Tech" class="sponsor-image" src="@/assets/capivara-tech.svg" />
            </a>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <p>© 2025 Tech Hub JF</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import InstagramIcon from '../components/icons/IconInstagram.vue'
import LinkedinIcon from '../components/icons/IconLinkedin.vue'
import MapsIcon from '../components/icons/IconMaps.vue'
import Speaker from '../components/Speaker.vue'
import Schedule from '../components/Schedule.vue'
import ScheduleTile from '../components/ScheduleTile.vue'
import SpeakerHenrique from '@/assets/henrique-cabral.jpeg'
import SpeakerGuilherme from '@/assets/guilherme-vianna.jpeg'
import SpeakerFabricio from '@/assets/fabricio-lima.jpeg'
import SpeakerJoao from '@/assets/joao-medina.jpeg'
import SpeakerRenato from '@/assets/renato-bonario.jpeg'
import SpeakerAna from '@/assets/ana-ovidio.jpeg'
import SpeakerIngrid from '@/assets/ingrid-coutinho.jpeg'
import SpeakerAntonio from '@/assets/antonio-brito.jpeg'
import SpeakerJade from '@/assets/jade-fonseca.jpeg'
import SpeakerDanilo from '@/assets/danilo-oliveira.jpeg'
import SpeakerJoaoSouza from '@/assets/joao-souza.jpeg'
import SpeakerAldemon from '@/assets/aldemon-bonifacio.jpeg'
import SpeakerCibelle from '@/assets/cibelle-castro.jpeg'
import SpeakerCamilla from '@/assets/camilla-schettino.jpeg'
import SpeakerTiago from '@/assets/tiago-calado.jpeg'
import SpeakerLucasCarrilho from '@/assets/lucas-carrilho.jpeg'
import SpeakerRafael from '@/assets/rafael-kneip.png'
import SpeakerGabriela from '@/assets/gabriela-cunha.jpeg'
import SpeakerCamillaPicoli from '@/assets/camilla-picoli.jpeg'
import SpeakerDanton from '@/assets/danton-rafael.jpeg'
import SpeakerLaurene from '@/assets/laurene-alves.jpeg'
import SpeakerLaurene2 from '@/assets/laurene-alves-2.jpeg'
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

.about-image {
  display: flex;
  margin-left: 5vh;
  margin-right: 5vh;
  margin-bottom: 50px;
}

.tech-hub-conf-photo {
  object-fit: cover;
  max-width: 100%;
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

.schedule-two-col {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
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
    max-width: 100%;
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
  }

  .schedule-two-col {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
