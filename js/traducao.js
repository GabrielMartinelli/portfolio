const portugues = document.querySelector("[data-portugues]");
const ingles = document.querySelector("[data-ingles]");
const trocaIdioma = document.querySelectorAll("[data-idioma]");

ingles.addEventListener("click", () => {
  trocaIdioma.forEach((eng) => {
    const comparacao = eng.dataset.idioma;
    switch (comparacao) {
      case "portfolio":
        eng.innerHTML = "Portfolio";
        break;
      case "titulo":
        eng.innerHTML = "Portfolio | Gabriel Martinelli - Software Developer";
        break;
      case "inicio":
        eng.innerHTML = "Home";
        break;
      case "sobre":
        eng.innerHTML = "About";
        break;
      case "formacao":
        eng.innerHTML = "Education";
        break;
      case "projetos":
        eng.innerHTML = "Projects";
        break;
      case "contato":
        eng.innerHTML = "Contact";
        break;
      case "profissao":
        eng.innerHTML = "Software Developer";
        break;
      case "divSobre":
        eng.innerHTML = "About me";
        break;
      case "paragrafoSobre":
        eng.innerHTML =
          "I have a degree in Computer Science from Pontifícia Universidade Católica de Minas Gerais - Poços de Caldas, I am currently studying programming languages for front-end development on the Alura platform.</br></br> I am 30 years old and have worked for 17 years in the tax area. Today I am in a career transition to officially practice my education in software development. </br></br> With a leadership profile and focus on problem-solving, I have extensive experience in customer service and teamwork.";
        break;
      case "habilidades":
        eng.innerHTML = "Skills";
        break;
      case "formacaoTitulo":
        eng.innerHTML = "Education";
        break;
      case "puc":
        eng.innerHTML = "Pontifical Catholic University of Minas Gerais";
        break;
      case "graduacao":
        eng.innerHTML = "Graduation in Computer Science";
        break;
      case "paragrafoGraduacao":
        eng.innerHTML =
          "End of Course Work focused on Augmented Reality, being a system of registrations and web queries with the integration of the augmented reality resource. </br></br>A web application was implemented using the programming and markup languages <b> PHP, HTML, HTML5, CSS,</b> and <b>JavaScript</b>, the libraries of the latter were used: jQuery, three.js, skarf.js, js-aruco.</br></br><b>Database server:</b> MySQL.</br></br><b>Frameworks:</b> WebGL and Bootstrap.</br></br><b>Development Environments:</b> Adobe Dreamweaver CS6, Notepad++, and Blender.";
        break;
      case "graducaoVermais":
        eng.innerHTML = "View more";
        break;
      case "formacaoHtml":
        eng.innerHTML = "HTML and CSS Training";
        break;
      case "paragrafoFormacaoHtml":
        eng.innerHTML =
          "<b>Developed skills:</b> HTML5, CSS3, positioning, lists and navigation, forms, tables, Flexbox, Grid, and mobile-first responsiveness.";
        break;
      case "cargaHtml":
        eng.innerHTML = "Total hours: 65h.";
        break;
      case "certificado":
        eng.innerHTML = "Certificate";
        break;
      case "formacaoJs":
        eng.innerHTML = "Training Developing Web Applications with JavaScript";
        break;
      case "formacaoParagrafoJs":
        eng.innerHTML =
          "<b>Developed skills:</b> DOM manipulation, form validations, voice recognition, consuming and treating data from an API, arrays, and requests.";
        break;
      case "formacaoCargaJs":
        eng.innerHTML = "Total hours: 60h.";
        break;
      case "formacaoTs":
        eng.innerHTML = "Training Dive into JavaScript with TypeScript";
        break;
      case "formacaoParagrafoTs":
        eng.innerHTML =
          "<b>Developed skills:</b> TypeScript installation, compiler settings, modifiers, benefits of static typing, generics, inheritance, abstract class, methods, enumerations, and decorators.";
        break;
      case "formacaoCargaTs":
        eng.innerHTML = "Total hours: 31h.";
        break;
      case "acessar":
        eng.innerHTML = "Access";
        break;
      case "ligacao":
        eng.innerHTML = "whatsapp/call";
        break;
      case "rodape":
        eng.innerHTML = "© All rights reserved - Developed by Gabriel Martinelli";
        break;
    }
  });
});

portugues.addEventListener("click", () => {
  trocaIdioma.forEach((pt) => {
    const comparacao = pt.dataset.idioma;
    switch (comparacao) {
      case "portfolio":
        pt.innerHTML = "Portfólio";
        break;
      case "titulo":
        pt.innerHTML = "Portfolio | Gabriel Martinelli - Desenvolvedor Front-end";
        break;
      case "inicio":
        pt.innerHTML = "Início";
        break;
      case "sobre":
        pt.innerHTML = "Sobre";
        break;
      case "formacao":
        pt.innerHTML = "Formação";
        break;
      case "projetos":
        pt.innerHTML = "Projetos";
        break;
      case "contato":
        pt.innerHTML = "Contato";
        break;
      case "profissao":
        pt.innerHTML = "Desenvolvedor Front-end";
        break;
      case "divSobre":
        pt.innerHTML = "Sobre mim";
        break;
      case "paragrafoSobre":
        pt.innerHTML =
          "Formado em Ciência da Computação pela Pontifícia Universidade Católica de Minas Gerais - Poços de Caldas, atualmente estudo linguagens de programação voltadas ao desenvolvimento front-end, na plataforma Alura.</br></br> Tenho 30 anos de idade e trabalhei por 17 anos na área tributária. Hoje estou em transição de carreira para exercer oficialmente a minha formação, na área de desenvolvimento de software.</br></br> Com perfil de liderança e foco em resolução de problemas, tenho vasta experiência em atendimento ao cliente e trabalho em equipe.";
        break;
      case "habilidades":
        pt.innerHTML = "Habilidades";
        break;
      case "formacaoTitulo":
        pt.innerHTML = "Formação";
        break;
      case "puc":
        pt.innerHTML = "Pontifícia Universidade Católica de Minas Gerais";
        break;
      case "graduacao":
        pt.innerHTML = "Graduação em Ciência da Computação";
        break;
      case "paragrafoGraduacao":
        pt.innerHTML =
          "Trabalho de Conclusão de Curso com foco em Realidade Aumentada,  sendo um sistema de cadastros e consultas web com a integração do recurso de realidade aumentada.</br></br> Foi implementada uma aplicação web, através da utilização das linguagens de programação e marcação <b>PHP, HTML, HTML5, CSS</b> e <b>JavaScript</b>, sendo as bibliotecas utilizadas desse último: jQuery, three.js, skarf.js, js-aruco.</br></br><b>Servidor de banco de dados:</b> MySQL.</br></br><b>Frameworks:</b> WebGL e Bootstrap.</br></br><b>Ambientes de desenvolvimento:</b>Adobe Dreamweaver CS6, Notepad++ e Blender.";
        break;
      case "graducaoVermais":
        pt.innerHTML = "Ver mais";
        break;
      case "formacaoHtml":
        pt.innerHTML = "Formação HTML e CSS";
        break;
      case "paragrafoFormacaoHtml":
        pt.innerHTML =
          "<b>Competências desenvolvidas:</b> HTML5, CSS3, posicionamento, listas e navegação, formulários, tabelas, Flexbox, Grid e responsividade mobile-first.";
        break;
      case "cargaHtml":
        pt.innerHTML = "Carga horária: 65h.";
        break;
      case "certificado":
        pt.innerHTML = "Certificado";
        break;
      case "formacaoJs":
        pt.innerHTML = "Formação Desenvolva aplicações Web com JavaScript";
        break;
      case "formacaoParagrafoJs":
        pt.innerHTML =
          "<b>Competências desenvolvidas:</b> Manipulação do DOM, validações de formulários, reconhecimento de voz, consumindo e tratando dados de uma API, arrays e requisições.";
        break;
      case "formacaoCargaJs":
        pt.innerHTML = "Carga horária: 60h.";
        break;
      case "formacaoTs":
        pt.innerHTML = "Formação Mergulhe no javaScript com TypeScript";
        break;
      case "formacaoParagrafoTs":
        pt.innerHTML =
          "<b>Competências desenvolvidas:</b> Instalação do TypeScript, configurações do compilador, modificadores, benefícios da tipagem estática, generics, herança, classe abstrata, métodos, enumerations e decorators.";
        break;
      case "formacaoCargaTs":
        pt.innerHTML = "Carga horária: 31h.";
        break;
      case "acessar":
        pt.innerHTML = "Acessar";
        break;
      case "ligacao":
        pt.innerHTML = "whatsapp/ligação";
        break;
      case "rodape":
        pt.innerHTML = "© Todos os direitos reservados - Desenvolvido por Gabriel Martinelli";
        break;
    }
  });
});
