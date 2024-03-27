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
            company="Compass UOL" :types="[{id: 'security', name: 'Segurança'}]"
            title="Shift-Left Security e o porquê você deve se importar com isso"
            description="Nessa talk, o objetivo principal será reforçar a importância do shift-left no SDLC, sua implicações e metodologias para implementarmos uma cultura de segurança sólida no contexto de trabalho dos desenvolvedores. 
            
            Iremos abordar sobre modelagem de ameaças, análise de arquitetura e controles de segurança, princípios do desenvolvimento seguro, ferramentas de análise estática de código, entre outros assuntos que conversam de Segurança e Desenvolvimento." />
          <Schedule :img="SpeakerCintia" name="Cintia Esteves" role="Engineering Tech Manager" company="Nubank"
            :types="[{id: 'diversity', name: 'Diversidade'}]" typeName="Diversidade"
            title="Mulheres & Tecnologia - Estratégias para se destacar no mercado"
            description="A realidade é que os times de tecnologia são massivamente compostos por homens brancos e muitas mulheres evitam ou se sentem acuadas neste ambiente. 

            Há diversas empresas trabalhando intencionalmente e comunidades de mulheres vem surgindo a cada dia para que possamos ter mais equidade de gênero nas equipes de tecnologia.

            Mas como cada uma de nós pode contribuir para esta mudança?
            Como eu trago a minha experiência para a mesa? 
            Como eu vendo o meu perfil diferenciado do resto do time como uma vantagem competitiva para o grupo?
            Como eu sobrevivo ao preconceito dos meus pares?

            Representatividade é importante: algumas mulheres em quem eu posso me inspirar nas áreas de engenharia de dados, engenharia de software, proteção de dados, segurança da informação, entre outras.

            Acredito que em algum momento você pode ser a única mulher do time, e ser a única ou ser a primeira é desafiador. Mas há estratégias, não apenas para sobreviver, mas que a médio e longo prazo te destacarão na multidão.

            E em um futuro próximo, você se tornará uma representante para que outras mulheres ingressem no mercado de tecnologia." />
          <Schedule :img="SpeakerFabricio" name="Fabricio Lima" role="Data Platform Engineer" company="Méliuz"
            :types="[{id: 'hardware', name: 'Hardware'}]"
            title="Home Server: a melhor forma de reaproveitar seu hardware velho"
            description="Nesta palestra iremos conversar sobre basicamente tudo que aprendi nesse mundo incrível que são os servidores caseiros. 
            
            Começando por o que é e por que todo mundo teria utilidade para um. Explicando o passo a passo para fazer o servidor mais simples e rápido possível, em questão de 10 minutos você pode ter um servidor caseiro funcional! Vamos falar um pouco sobre outros níveis de servidores também, com as vantagens e desvantagens de cada um. Por fim, vou mostrar como está organizado hoje o meu próprio servidor." />
          <Schedule :img="SpeakerJoao" name="João Medina" role="Especialista Backend" company="Grupo Boticário"
            :types="[{id: 'backend', name: 'Backend'}]"
            title="Desbravando a Distribuição de Dados em Múltiplos Ambientes: Uma Jornada Escalável e Orientada a Eventos"
            description="Já se encontrou diante do desafio de distribuir dados em vários ambientes simultaneamente? 
            
            Nesta talk, mergulharemos no mundo da distribuição de dados de forma escalável e orientada a eventos. 
            
            Descubra como enfrentamos os desafios do dia a dia ao distribuir dados de maneira eficiente e performática, explorando as necessidades que impulsionaram essa jornada, e tudo isso olhando na prática no dia a dia de uma empresa com milhões de dados sendo trafegados por minutos. " />
          <Schedule :img="SpeakerLais" name="Laís Bomtempo" role="Software Engineer" company="Metal Toad"
            :types="[{id: 'frontend', name: 'Frontend'}]" title="Entendendo os fundamentos do Next.js 14"
            description="Quando não entendemos como uma ferramenta funciona, podemos cometer erros básicos no desenvolvimento do nosso projeto, ou ficarmos muito tempo num bug que poderia ser facilmente solucionado, caso tivéssemos essa compreensão do que ocorre por “debaixo dos panos”.

            Focada em profissionais que já trabalham com JavaScript e React, esta palestra tem como objetivo explicar os fundamentos do Next.js 14, de forma a facilitar e/ou aprimorar o desenvolvimento futuro com o framework." />
          <Schedule :img="SpeakerFran" name="Fran Weidt" role="Flutter Engineer" company="Simplebet"
            :types="[{id: 'mobile', name: 'Mobile'}]" title="Flutter para Visualização de Dados em Tempo Real"
            description="Em um mundo hiper-conectado, a visualização de dados em tempo real tornou-se uma parte essencial de muitas aplicações. 
            
            Ela permite aos usuários interpretar e analisar dados complexos de uma forma visualmente mais rica e atraente. Nesta palestra, vamos explorar como o Flutter pode ser usado para desbloquear experiências visuais geradas a partir de dados recebidos em tempo real. 
            
            Em paralelo, iremos apresentar conceitos do Flutter e seu ecossistema buscando contribuir e dialogar com um público abrangente, desde aqueles que querem conhecer melhor o potencial desta tecnologia, mas nunca a utilizaram, até aqueles que já possuem conhecimento dela." />
          <Schedule :img="SpeakerLuiza" name="Luiza Bartels" role="Coordenadora" company="U&M" :types="[{id: 'robotics', name: 'Robótica'}]"
            title="Desenvolvimento de Veículos Autônomos: bem ao seu lado e você não sabia"
            description="Há 7 anos uma empresa em Matias Barbosa investe no desenvolvimento de  um kit autônomo para habilitar uma frota de equipamentos para operação autônoma. O melhor é o fato de o desenvolvimento ser 100% brasileiro e reconhecido internacionalmente.
            
            Uma conversa sobre o desenvolvimento de um kit autônomo para habilitar equipamentos pesados para operação autônomos, as tecnologias mais utilizadas e as tendências do mercado e da indústria." />
          <Schedule :img="SpeakerRuan" name="Ruan Carlos" role="Executivo de operações e delivery" company="Jack Experts" :types="[{id: 'startups', name: 'Startups'}]"
            title="Empreendendo em TI na Pandemia: O que não te contam"
            description="Se você trabalha com TI, então já é um empreendedor! Empreender é mais do que ter uma empresa, é a vontade de fazer diferente, ser inconformado e ir além. O profissional de TI não pode e nem tem tempo de se conformar, ou também não te contaram isso?
            
            Nesta palestra, irei contar um pouco dos desafios, sucessos e claro, insucessos tanto da carreira quanto do caminho percorrido na pandemia com o propósito de ter um time focado em Cloud Native: a Jack Experts." />
          <Schedule :img="SpeakerAna" name="Ana Carolina Carius" role="Professora" company="IFRJ" :types="[{id: 'ai', name: 'AI'}]"
            title="Tecnologia do Reconhecimento Facial: Desvendando os Mistérios por Trás das Matrizes"
            description="As redes neurais convolucionais (CNNs) são amplamente aplicadas em reconhecimento de imagens, com o uso essencial de matrizes. Essas matrizes, ou tensores, são fundamentais para processar imagens, pixel por pixel.
            Em uma CNN, diferentes camadas convolucionais aplicam filtros sobre a imagem de entrada, realizando operações de convolução que são essencialmente multiplicação de matrizes.  
            
            Cada filtro é uma pequena matriz de pesos que é convoluída com a imagem, produzindo um mapa de características. Esses mapas de características são essenciais para identificar padrões complexos nas imagens, como bordas, texturas e formas.
            
            Ao longo do treinamento, os pesos das matrizes são ajustados iterativamente para minimizar a diferença entre as previsões do modelo e os rótulos reais das imagens. Isso é feito através de técnicas como backpropagation e otimização de gradientes.  
            É importante destacar que gradientes são vetores (ou matrizes com uma linha ou uma coluna).  Ou seja, o processo de reconhecimento de imagens por redes neurais convolucionais nada mais é do que aplicar os conhecimentos a respeito de matrizes.
            
            A aplicação eficaz de matrizes em CNNs permite que esses modelos reconheçam padrões cada vez mais complexos em imagens, levando a melhorias contínuas no reconhecimento de objetos, rostos e até mesmo em diagnósticos médicos por meio de imagens de radiologia.
            
            Essa abordagem baseada em matrizes não apenas permite que as CNNs lidem com grandes volumes de dados de imagem, mas também contribui para a eficiência computacional, uma vez que as operações de multiplicação de matrizes podem ser otimizadas para hardware especializado, como GPUs.
            
            Em resumo, a aplicação de matrizes em CNNs é crucial para o avanço do reconhecimento de imagens, permitindo que máquinas interpretem e entendam o mundo visual de maneira semelhante aos humanos." />
          <Schedule :img="SpeakerDanilo" name="Danilo Oliveira Santos" role="Professor" company="EnsinE" :types="[{id: 'data', name: 'Dados'}, {id: 'workshop', name: 'Workshop'}]"
            title="Banco de Dados - Mão Na Massa"
            description="WORKSHOP: Mão na Massa em Banco de Dados! 

            Neste curso, mergulharemos no universo dos bancos de dados, desmistificando conceitos e capacitando para lidar com dados de forma eficiente.

            Fundamentos Essenciais:
            Compreender o que é um Banco de Dados (BD) e as diferenças entre os modelos Relacional e Não Relacional.
            Explorar os tipos de dados comuns em bancos de dados, desde números até textos e datas.
            Dominar os comandos SQL, a linguagem padrão para consultas e manipulação de dados.

            Consultas de Dados:
            Do básico ao avançado, você aprenderá a realizar consultas de dados. Desde as mais simples, como filtrar registros, até as mais complexas, como junções e agregações.
            Descobrirá como extrair informações relevantes de grandes conjuntos de dados.

            Aplicações Práticas:
            Nosso foco é a prática. Você terá a oportunidade de aplicar seus conhecimentos em cenários reais.
            Criar consultas que atendam às necessidades de negócios, desde relatórios gerenciais até análises profundas." />
          <Schedule :img="SpeakerNatalia" name="Natalia Granato" role="DevOps Engineer" company="Jack Experts"
            :types="[{id: 'devops', name: 'Devops'}]" title="Assessement e boas práticas em Kubernetes"
            description="Realizarei uma breve introdução sobre o ecossistema do Amazon Elastic Kubernetes Service (EKS) tendo em vista o que o serviço pode entregar. 
            
            A palestra será dedicada à realização de assessements em clusters EKS e a implementação de práticas essenciais em Kubernetes, desde a implementação, configuração, desempenho e finanças. 
            
            Explicarei o que é o assessements, em um formato hands-on utilizarei ferramentas open source para dar visibilidade ao ambiente e a partir dos relatórios gerados, como ele pode pavimentar o caminho para adoção de boas práticas no kubernetes de acordo com o nível de maturidade das equipes de DevOps e Cloud. Aqui estão alguns pontos que considerarei durante a avaliação:

            Introdução ao EKS: Uma visão abrangente do Amazon EKS e suas vantagens para orquestração de contêineres.

            Assessment em Kubernetes: Como avaliar efetivamente o desempenho e a eficiência de seus clusters EKS, utilizando ferramentas open source que não requerem instalação no cluster. As ferramentas utilizadas serão: popeye, rancher, pluto, kube-capacity e kubectl.

            Capacidade e Setup EKS:
            A capacidade e o setup eficientes são fundamentais para otimizar o desempenho do Kubernetes. Ao dimensionar a capacidade, é crucial entender as demandas da aplicação e provisionar recursos adequadamente. O setup adequado inclui a configuração do cluster, nós e redes de maneira coesa. 

            Exemplo: configuração e avaliação de nodegroups, dimensionamento de capacidade, utilização de instâncias spot para economizar recursos financeiros, como proceder diante da necessidade de uma atualização, configuração de backup, visão sobre storage e se há monitoramento voltado para o cluster e etc.

            Boas práticas voltadas ao EKS

            Boas práticas voltadas à definição de aplicações para Kubernetes

            Arquitetura do Cluster:
            Avaliação da arquitetura do cluster Kubernetes, incluindo o número de nós (nodes), a distribuição de carga e a configuração de alta disponibilidade.

            Configuração:
            Revisão das configurações do Kubernetes para garantir que estejam alinhadas com as melhores práticas e requisitos específicos do ambiente.

            Monitoramento e Logging:
            Avaliação das soluções de monitoramento e logging para garantir a visibilidade adequada sobre o estado e o desempenho do cluster.

            Atualizações e Patches:
            Verificação do processo de atualização e aplicação de patches para garantir que o cluster esteja utilizando versões seguras e estáveis do Kubernetes.

            Escalabilidade:
            Avaliação da capacidade do cluster de escalar horizontalmente para lidar com aumentos na carga de trabalho.

            Gerenciamento de Aplicações:
            Revisão das práticas e ferramentas utilizadas para implantar e gerenciar aplicações no Kubernetes." />
          <Schedule :img="SpeakerRanieri" name="Ranieri Imperatori" role="Head of Data Analytics"
            company="300 Inteligência de Negócio" :types="[{id: 'ai', name: 'AI'}]"
            title="Doenças Cardíacas em Números: A Relevância de Média e Mediana na Análise Preditiva com Machine Learning"
            description="Na era da inteligência artificial e machine learning, compreender conceitos estatísticos fundamentais é essencial para o cientista de dados ou àqueles que estão almejando esta posição profissional. Esta palestra focará na importância da média, mediana, distribuição normal, e suas relações com as métricas de erro MAE (Mean Absolute Error) e MSE (Mean Squared Error) no contexto de modelos de machine learning com método de aprendizagem supervisionado. 

            Ao explorar a média e a mediana – conceitos básicos aprendidos no ensino médio, percebemos que a média representa o valor médio de um conjunto de dados, enquanto a mediana é o valor que divide o conjunto ao meio. A média é útil para entender a tendência central dos dados, sendo sensível a valores extremos. Por outro lado, a mediana é robusta contra outliers, proporcionando uma visão representativa em conjuntos de dados com distribuição assimétrica. 

            A distribuição normal é amplamente observada em conjuntos de dados naturais e desempenha um papel crucial em diversos métodos estatísticos. Ao compreender essa distribuição, os cientistas de dados podem realizar inferências sobre a probabilidade de eventos e embasar decisões informadas. A utilização da média e mediana emerge como uma ferramenta valiosa na identificação da distribuição normal. 

            Além disso, a palestra aborda as relações entre métricas de erro de modelos preditivos e conceitos estatísticos básicos. O Mean Absolute Error (MAE) relaciona-se diretamente com a mediana, sendo menos sensível a outliers e tornando-se uma métrica robusta para avaliação de modelos em conjuntos de dados com distribuições assimétricas. Por outro lado, o Mean Squared Error (MSE) está correlacionado com a média, sendo sensível a outliers devido ao termo quadrático, sendo ideal para situações em que desvios maiores devem ser penalizados mais fortemente. 

            Na conclusão desta palestra, será destacada a interconexão essencial entre os conceitos básicos da estatística e o universo de machine learning. A apresentação incluirá uma demonstração prática da construção de modelos utilizando a linguagem de programação Python, onde dados reais de pacientes com características relacionadas a doenças cardíacas serão explorados. Essa abordagem prática não apenas ilustrará a aplicação direta dos princípios discutidos, mas também fornecerá uma visão concreta de como os conceitos estatísticos fundamentais são implementados na criação e otimização de modelos no contexto de machine learning. " />
          <Schedule :img="SpeakerBrendo" name="Brendo Freitas" role="Desenvolvedor .Net" company="webfis" :types="[{id: 'devops', name: 'Devops'}]"
            title="Docker Scout protegendo a cadeia de fornecimento de Software"
            description="Na palestra sobre Docker Scout, mergulharemos nas profundezas da segurança em ambientes Docker, revelando sua capacidade única de detectar e corrigir vulnerabilidades em imagens.
            
            Começaremos desvendando as nuances das falhas de segurança em contêineres, destacando a importância crítica de proteger nossos ecossistemas digitais. Docker Scout emerge como a resposta essencial, proporcionando uma visão abrangente das vulnerabilidades, não apenas identificando-as, mas também oferecendo soluções eficazes.
            
            Uma faceta distintiva do Docker Scout reside na sua capacidade de acessar um banco de dados centralizado de vulnerabilidades em imagens Docker. Este recurso estratégico permite que os usuários consultem informações atualizadas sobre possíveis ameaças, equipando-os com o conhecimento necessário para fortalecer suas defesas.
            
            Ao guiarmos os participantes através de um panorama detalhado, exploraremos as etapas práticas para corrigir falhas de segurança. Desde a identificação até a aplicação de correções, cada passo será desdobrado, capacitando a audiência a implementar práticas de segurança robustas em suas implementações Docker.
            
            A palestra não apenas oferece insights teóricos, mas também demonstrações práticas, destacando a eficácia do Docker Scout em ação. Os participantes experimentarão, em tempo real, como esse recurso pode transformar a segurança, fornecendo confiança e tranquilidade em seus ambientes de desenvolvimento.
            
            Ao final da palestra, os participantes não apenas compreenderão a importância da segurança em contêineres, mas também terão as ferramentas e o conhecimento necessários para integrar o Docker Scout em suas práticas diárias. Esta palestra é mais do que uma visão; é uma imersão prática na revolução da segurança em contêineres, destacando o Docker Scout como a ferramenta indispensável para impulsionar a confiança e a robustez em projetos Docker."  />
          <Schedule :img="SpeakerCamilla" name="Camilla Martins" role="SRE Egineer" company="Storyblok" :types="[{id: 'career', name: 'Carreira'}]"
            title="DevOps para o Exterior: O que tem sido diferente"
            description="Nessa talk vou falar sobre como é trabalhar com DevOps no exterior, abordando pontos importantes, como: 

            - O que trabalhamos lá
            - Ritmo de trabalho
            - Quais os desafios na assinatura do contrato e no PJ/CLT
            - Contabilidade
            - Onde ver comparativos salariais e a qualidade da empresa
            - Onde encontrar bons locais de trabalho
            - Dicas gerais pra você se dar bem como no inglês e como funciona o dia a dia"/>
          <Schedule :img="SpeakerEmerson" name="Emerson Pombo" role="Quality Assurance Engineer"
            company="Atlas Technologies" :types="[{id: 'qa', name: 'QA'}]"
            title="QA Além dos Testes: Conduzindo Projetos ao Pico da Eficiência e Satisfação do Cliente"
            description="Esta palestra abordará o papel fundamental da Garantia de Qualidade (QA) no desenvolvimento de software, destacando como uma abordagem sólida de QA pode impactar positivamente a qualidade, eficiência e satisfação do cliente. Ao longo de 30 minutos, exploraremos as responsabilidades-chave do QA, desde o início do projeto até a entrega, discutindo metodologias de teste, ferramentas de automação e melhores práticas. Além disso, serão compartilhados insights sobre como o QA supera desafios comuns e contribui para o sucesso do projeto.

            Principais Tópicos:

            O que é QA?
            Definição de Garantia de Qualidade.
            Distinção entre QA e Controle de Qualidade.

            Papéis e Responsabilidades do QA:
            Responsabilidades-chave ao longo do ciclo de desenvolvimento.
            Colaboração efetiva com a equipe de desenvolvimento.

            Metodologias de Teste:
            Exploração de diferentes metodologias, incluindo teste funcional, teste de desempenho e teste de segurança.

            Ferramentas de Teste:
            Introdução a ferramentas populares de teste de software.
            Automatização e aprimoramento da eficiência.

            Desafios e Soluções em QA:
            Abordagem de desafios comuns enfrentados pelo QA.
            Estratégias e melhores práticas para superar esses desafios.

            Importância do QA para o Sucesso do Projeto:
            Contribuição para confiabilidade, segurança e satisfação do cliente." />
          <Schedule :img="SpeakerLucasCarrilho" name="Lucas Carrilho" role="Desenvolvedor Backend"
            company="V3 Tecnologia" :types="[{id: 'career', name: 'Carreira'}]"
            title="Ingressando na Carreira de Programação em 2024: Desmistificando as Primeiras Oportunidades"
            description="Nesta palestra, vou compartilhar minha experiência na migração de carreira e em concursos públicos, focando nas diversas formas de conseguir a tão sonhada primeira oportunidade como programador.

            Vou abordar os seguintes assuntos:

            Formas de ingressar:
            - Estagiário
            - Trainee / Aprendiz
            - Junior
            - Concurso Público T.I
            - Freelancer

            Para facilitar a compreensão da comparação entre as formas de ingressar na carreira de programação, apresentarei gráficos
            e exemplos para cada um deles, como: conhecimento esperado, skills necessárias, dificuldade de conseguir, remuneração média inicial e crescimento na carreira e, para isso, usarei fontes de dados reais e exemplos práticos, como a seguir: 

            A apresentação não será focada em linguagem em específica, será um 'geral'" />
          <Schedule :img="SpeakerLucasLopes" name="Lucas Lopes" role="Analista de Dados" company="BeFly" :types="[{id: 'data', name: 'Dados'}]"
            title="Dados: O novo petróleo"
            description="Em um mundo onde os dados são considerados o novo petróleo do século 21, esse talk irá oferecer uma imersão simplificada na importância vital desses ativos para o sucesso nos negócios. 
            
            Ela aborda desde a complexidade subjacente à análise de dados, desde a utilização da inteligência artificial (IA) e outras ferramentas tecnológicas para alavancar estratégias empresariais eficazes. Da fase inicial de coleta até a interpretação avançada, são exploradas etapas cruciais para aproveitar plenamente as oportunidades oferecidas pela era dos dados. 
            
            Este mergulho buscará oferecer informações valiosas e práticas para quem busca prosperar em um ambiente cada vez mais orientado por informações e digitalizado, incluindo o uso de linguagens de programação voltadas para dados." />
          <Schedule :img="SpeakerCarlos" name="Carlos Alexandre" role="Estudante Pós-graduação" company="UFJF"
            :types="[{id: 'career', name: 'Carreira'}]" title="O que os estudantes fazem durante a sua formação na Computação?"
            description="A palestra abordará em alguns projetos executados por estudantes da universidade na área da tecnologia. Será uma oportunidade de conhecer uma variedade de projetos que abrangem desde pesquisas científicas até iniciativas sociais e tecnológicas.

            Os projetos não apenas enriquecem o ambiente acadêmico da UFJF, mas também têm um impacto significativo na comunidade local." />
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
          <Speaker :img="SpeakerFran" link="https://www.linkedin.com/in/franweidt/" name="Fran Weidt"
            role="Flutter Engineer" company="Simplebet" />
          <Speaker :img="SpeakerLuiza" link="https://www.linkedin.com/in/luizabartelsdeoliveira/" name="Luiza Bartels"
            role="Coordenadora" company="U&M" />
          <Speaker :img="SpeakerRuan" link="https://www.linkedin.com/in/ruan-sysadmin/" name="Ruan Carlos" 
            role="Executivo de operações e delivery" company="Jack Experts" />
          <Speaker :img="SpeakerAna" link="https://www.instagram.com/aninhacarius" name="Ana Carolina Carius" 
            role="Professora" company="IFRJ" />
          <Speaker :img="SpeakerDanilo" link="https://www.linkedin.com/in/danilo-oliveira-santos/" name="Danilo Oliveira Santos" 
            role="Professor" company="EnsinE"/>
          <Speaker :img="SpeakerNatalia" link="https://www.linkedin.com/in/nataliagranato/" name="Natalia Granato"
            role="DevOps Engineer" company="Jack Experts" />
          <Speaker :img="SpeakerRanieri" link="https://www.linkedin.com/in/ranieri-imperatori/"
            name="Ranieri Imperatori" role="Head of Data Analytics" company="300 Inteligência de Negócio" />
          <Speaker :img="SpeakerBrendo" link="https://www.linkedin.com/in/brendo-f-00b75416a/" name="Brendo Freitas"
            role="Desenvolvedor .Net" company="webfis" />
          <Speaker :img="SpeakerCamilla" link="https://www.linkedin.com/in/camilla-martins-603344115/" name="Camilla Martins"
            role="SRE Egineer" company="Storyblok" />
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
            <a href="https://www.levty.com/br" class="sponsor-image-link" target="_blank">
              <img alt="Levty" class="sponsor-image-rectangular" src="@/assets/levty.svg" />
            </a>
          </div>
        </div>
        <div class="sponsor-class">
          <h2 class="section-title">Ouro</h2>
          <div class="sponsors-images">
            <a href="https://www.alura.com.br/" class="sponsor-image-link" target="_blank">
              <img alt="Alura" class="sponsor-image-rectangular" src="@/assets/alura.svg" />
            </a>
            <a href="https://www.instagram.com/oticam3oculos/" class="sponsor-image-link" target="_blank">
              <img alt="M3 Óculos" class="sponsor-image-rectangular" src="@/assets/m3-oculos.png" />
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
            <a href="https://www.instagram.com/cafe_das_minas/" class="sponsor-image-link" target="_blank">
              <img alt="Café das Minas" class="sponsor-image" src="@/assets/cafe-das-minas.png" />
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
import SpeakerAna from '@/assets/ana-carius.png'
import SpeakerDanilo from '@/assets/danilo-oliveira.jpeg'
import SpeakerFran from '@/assets/fran-weidt.jpeg'
import SpeakerRuan from '@/assets/ruan-carlos.jpeg'
import SpeakerCamilla from '@/assets/camilla-martins.jpg'
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
