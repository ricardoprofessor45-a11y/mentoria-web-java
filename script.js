
/* PERSONALIZE SOMENTE ESTES DADOS */
const CONFIG = {
  nome: "Professor: Ricardo C. Figueiró",
  whatsapp: "+55 48 93501-0205",
};

// Elemento responsável pelas notificações
const notice = document.querySelector("#notice");
let noticeTimer;

// Exibe notificações na tela
function showNotice(message) {
  if (!notice) return;

  notice.textContent = message;
  notice.classList.add("show");

  clearTimeout(noticeTimer);

  noticeTimer = setTimeout(() => {
    notice.classList.remove("show");
  }, 5000);
}

// Atualiza o nome do professor no site
document.querySelectorAll(".js-name").forEach((el) => {
  el.textContent = CONFIG.nome;
});

// Configura todos os botões do WhatsApp
document.querySelectorAll(".js-whatsapp").forEach((button) => {

  button.addEventListener("click", (event) => {
    event.preventDefault();

    // Remove caracteres especiais do telefone
    const phone = CONFIG.whatsapp.replace(/\D/g, "");

    // Verifica se o telefone está configurado
    if (phone.length < 12) {
      showNotice(
        "Configure um número de WhatsApp válido com DDD."
      );
      return;
    }

    let message;

    // Mensagem específica da mentoria personalizada
    if (button.dataset.plan === "mentoria personalizada") {

      message =
        "Olá, professor! Tenho interesse na Mentoria Web Java. " +
        "Gostaria de conversar sobre os valores, " +
        "a quantidade de aulas e os horários disponíveis.";

    } else {

      // Mensagem padrão dos demais botões
      const plan = button.dataset.plan
        ? ` Tenho interesse no ${button.dataset.plan}.`
        : " Tenho interesse na mentoria de Java e Spring Boot.";

      message =
        `Olá, professor!${plan} ` +
        "Gostaria de saber os horários disponíveis.";
    }

    // Codifica a mensagem para utilização na URL
    const encodedMessage = encodeURIComponent(message);

    // Abre o WhatsApp em uma nova aba
    const whatsappURL =
      `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });

});
