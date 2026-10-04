/* PERSONALIZE SOMENTE ESTES DADOS */
const CONFIG = {
  nome: "Professor: Ricardo C. Figueiró",
  whatsapp: "+55 48 93501-0205",
};

const notice = document.querySelector("#notice");
let noticeTimer;

function showNotice(message) {
  notice.textContent = message;
  notice.classList.add("show");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => notice.classList.remove("show"), 5000);
}

document.querySelectorAll(".js-name").forEach((el) => { el.textContent = CONFIG.nome; });
document.querySelectorAll(".js-whatsapp").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const phone = CONFIG.whatsapp.replace(/\D/g, "");
    if (phone.length < 12) {
      showNotice("Envie seu número com DDD para ativarmos o agendamento pelo WhatsApp.");
      return;
    }
    const plan = button.dataset.plan ? ` Tenho interesse no ${button.dataset.plan}.` : " Tenho interesse na mentoria de Java e Spring Boot.";
    const message = encodeURIComponent(`Olá, professor!${plan} Gostaria de saber os horários disponíveis.`);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
  });
});

