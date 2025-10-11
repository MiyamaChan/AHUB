document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuDrop = document.querySelector(".menu__drop");
  const menuIcon = document.querySelector(".menu__icon");

  menu.addEventListener("click", () => {
    menuDrop.classList.toggle("menu__drop-open");
    menu.classList.toggle("menu-open");
    menuIcon.classList.replace("fa-bars", "fa-xmark")
      ? (menuIcon.src = "/assets/img/xmark.svg")
      : menuIcon.classList.replace("fa-xmark", "fa-bars")
      ? (menuIcon.src = "/assets/img/menu.svg")
      : "";
  });

  const create = document.querySelector(".create");
  const createDrop = document.querySelector(".create__drop");

  create.addEventListener("click", () => {
    createDrop.classList.toggle("create__drop-open");
  });

  const user = document.querySelector(".user");
  const userDrop = document.querySelector(".user__drop");

  user.addEventListener("click", () => {
    userDrop.classList.toggle("user__drop-open");
  });
});
