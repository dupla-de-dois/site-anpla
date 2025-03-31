function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );
  
      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  
  window.addEventListener("load", initSwiper);
  
  const icB = [
    {
      delay: "200",
      iconName: "bi-hourglass-split",
      title: "Experiência que inspira",
      text: "Com 15 anos no mercado, nossa fundadora lidera uma equipe especializada e comprometida em cada detalhe.",
    },
    {
      delay: "300",
      iconName: "bi-person-lock",
      title: "Proteção personalizada",
      text: "Seguros feitos para você: atendemos pessoas e empresas com soluções personalizadas.",
    },
    {
      delay: "400",
      iconName: "bi-emoji-smile",
      title: "Confiança e transparência",
      text: "Metodologia eficaz e transparente, garantindo confiança em cada etapa do processo.",
    },
    {
      delay: "500",
      iconName: "bi-clipboard-heart",
      title: "Planejamento estratégico",
      text: "Cada necessidade é compreendida com atenção visando alinhar expectativas e realidade de forma estratégica.",
    },
  ];
  
  const iconBoxes = document.querySelector(".icon-boxes");
  
  icB.forEach((ic) => {
    const iconBox = document.createElement("div");
    iconBox.classList.add("col-md-6");
    iconBox.setAttribute("data-aos", "fade-up");
    iconBox.setAttribute("data-aos-delay", ic.delay);
  
    iconBox.innerHTML = `
      <div class="icon-box">
      <i class= "bi ${ic.iconName}"></i>
      <h3>${ic.title}</h3>
      <p>
        ${ic.text}
      </p>
    </div>
      `;
  
    iconBoxes.appendChild(iconBox);
  });
  
  const sIt = [
    {
      delay: "100",
      iconName: "bi-person-add",
      color: "#4233ff",
      title: "SEGURO DE VIDA",
      span: "(INDIVIDUAL | EM GRUPO)",
      spanClass: "",
    },
    {
      delay: "200",
      iconName: "bi-piggy-bank",
      color: "#29cc61",
      title: "PREVIDÊNCIA PRIVADA",
      span: "",
      spanClass: "",
    },
    {
      delay: "600",
      iconName: "bi-house-lock",
      color: "#4233ff",
      title: "SEGURO PATRIMONIAL",
      span: "",
      spanClass: "",
    },
    {
      delay: "300",
      iconName: "bi-shield-lock",
      color: "#29cc61",
      title: "BLINDAGEM PATRIMONIAL",
      span: "",
      spanClass: "",
    },
    {
      delay: "400",
      iconName: "bi-diagram-3",
      color: "#29cc61",
      title: "PLANEJAMENTO SUCESSÓRIO",
      span: "",
      spanClass: "",
    },
    {
      delay: "800",
      iconName: "bi-mortarboard",
      color: "#4233ff",
      title: "SEGURO UNIVERSITÁRIO",
      span: `Cote <a href="/details.html" class="pe-auto">aqui</a>`,
      spanClass: "univ",
    },
    {
      delay: "700",
      iconName: "bi-list-check",
      color: "#29cc61",
      title: "CONSÓRCIO",
      span: "",
      spanClass: "",
    },
    {
      delay: "600",
      iconName: "bi-building-fill-lock",
      color: "#4233ff",
      title: "SEGURO EMPRESARIAL",
      span: "",
      spanClass: "",
    },
    {
      delay: "900",
      iconName: "bi-luggage",
      color: "#4233ff",
      title: "SEGURO VIAGEM",
      span: "",
      spanClass: "",
    },
    {
      delay: "500",
      iconName: "bi-heart-pulse",
      color: "#29cc61",
      title: "PLANO DE SAÚDE (PF | PJ)",
      span: "",
      spanClass: "",
    },
    {
      delay: "1000",
      iconName: "bi-ev-front",
      color: "#4233ff",
      title: "SEGURO AUTO",
      span: "",
      spanClass: "",
    },
    {
      delay: "1200",
      iconName: "bi-plus-lg",
      color: "#29cc61",
      title: "E muito mais",
      span: "",
      spanClass: "",
    },
  ];
  
  const servicesItems = document.querySelector(".services-items");
  
  sIt.forEach((si) => {
    const serviceItem = document.createElement("div");
    serviceItem.classList.add("col-lg-3", "col-md-4");
  
    serviceItem.setAttribute("data-aos", "fade-up");
    serviceItem.setAttribute("data-aos-delay", si.delay);
  
    serviceItem.innerHTML = `
      <div class="services-item">
                    <i class="bi ${si.iconName}" style="color: ${si.color}"></i>
                    <h3 class="${si.textClass}">
                        ${si.title}
                        <span class="d-block ${si.spanClass}">${si.span}</span>
                    </h3>
                  </div>
      `;
  
    servicesItems.appendChild(serviceItem);
  });
  
  const partnersSection = document.querySelector(".partners");
  const partnersContainer = document.createElement("div");
  partnersContainer.classList.add("partners-items", "d-flex", "align-items-center");
  
  let totalImgs = 28;
  const imgWidth = 120 + 10;
  partnersSection.appendChild(partnersContainer);
  
  for (let j = 0; j < 2; j++) {
    for (let i = 1; i <= totalImgs; i++) {
      const partnersItem = document.createElement("img");
      partnersItem.classList.add("partners-item");
      partnersItem.setAttribute("src",`assets/imgs/partners/${i}.png`)
      partnersContainer.appendChild(partnersItem);
    }
  }
  
  const reviews = [
    {
      initial: "L",
      name: "Luiz Eduardo Araujo",
      text: "Clareza e veracidade nas informações com velocidade no fechamento dos contratos.",
    },
    {
      initial: "T",
      name: "Telma Santos",
      text: "Excelente. Faço seguros dos veiculos e residências da família e sempre tenho excelente atendimento!",
    },
    {
      initial: "G",
      name: "Guilherme Luis Bogo",
      text: "Ótimo atendimento, tudo personalizado, com boas explicações, e domínio de assunto, atendimento com respeito tendo sempre como prioridade os interesses do cliente, não visa marcas, e sim benefícios, recomendo.",
    },
    {
      initial: "T",
      name: "Tania Bicchieri",
      text: "Só tenho elogios para essa equipe atenciosa e competente. ANPLA foi a melhor corretora com quem já trabalhei, excelentes e atenciosos desde o primeiro contato. Indico de olhos fechados.",
    },
    {
      initial: "K",
      name: "Klaw Sylva",
      text: "Profissionais atenciosos..assessoria perfeita .. tranquilidade e segurança no controle das finanças... Recomendo",
    },
  ];
  
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  
  reviews.forEach((re) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.innerHTML = `
     <div class="review-item">
                  <div class="review-initial">${re.initial}</div>
                      <h3>${re.name}</h3>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i
                        ><i class="bi bi-star-fill"></i>
                      </div>
                   
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        <span
                          >${re.text}</span
                        >
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
      `;
    swiperWrapper.appendChild(swiperSlide);
  });
  
  const members = [
    {
      img: "ana",
      name: "Ana Paula Antunes",
      role: "Fundadora",
      text: "Com quase duas décadas de atuação no mercado de seguros, a expertise e o compromisso de Ana garantem que os clientes sempre recebam as melhores opções e soluções para suas demandas.",
    },
    {
      img: "yuri",
      name: "Yuri Ribeiro",
      role: "Sócio",
      text: "O jovem e determinado Yuri agrega com sua agilidade para inovar e otimizar processos. Formado em Sistemas de Informação, ele é responsável por integrar tecnologias e garantir eficiência nos serviços.",
    },
  ];
  
  const teamSection = document.querySelector(".team .container .row");
  members.forEach((m) => {
    const member = document.createElement("div");
    member.classList.add("col-lg-3", "col-md-6");
    member.setAttribute("data-aos", "fade-up");
    member.setAttribute("data-aos-delay", "100");
    member.innerHTML = `
          <div class="member mx-auto">
                    <div class="pic">
                      <img
                        class="bg-img-member"
                        src="assets/imgs/bg/logotipo.png"
                        alt=""
                      />
                      <img src="assets/imgs/members/${m.img}-alt.png" class="main-img" alt="${m.img}" />
                    </div>
                    <div class="member-info">
                      <h4>${m.name}</h4>
                      <hr />
                      <span class="mb-2">${m.role}</span>
                      <p>
                        ${m.text}
                      </p>
                    </div>
                  </div>
      `;
    teamSection.appendChild(member);
  });
  