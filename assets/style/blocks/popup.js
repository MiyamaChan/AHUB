document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelectorAll(".openLogin");
  const popup = document.getElementById("loginPopup");

  openBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      popup.style.display = "block";
    }),
  );

  window.onclick = function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  };

  const reversalBtnLog = document.getElementById("reversalButtonLog");
  const reversalBtnReg = document.getElementById("reversalButtonReg");

  const myCard = document.getElementById("popupReversal");
  const popupLogin = document.querySelector(".popup-login");
  const popupRegistration = document.querySelector(".popup-registration");

  reversalBtnLog.addEventListener("click", () => {
    myCard.classList.toggle("rotated");
    popupLogin.style.display = "block";
    popupRegistration.style.display = "none";

    reversalBtnLog.style.display = "none";
    reversalBtnReg.style.display = "block";
  });

  reversalBtnReg.addEventListener("click", () => {
    myCard.classList.toggle("rotated");
    popupLogin.style.display = "none";
    popupRegistration.style.display = "block";

    reversalBtnReg.style.display = "none";
    reversalBtnLog.style.display = "block";
  });
});
