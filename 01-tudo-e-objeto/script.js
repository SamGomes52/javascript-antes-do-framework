const menu = {
  class: ".principal",
  ativar() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);

    menuElement.classList.add("ativo");
    console.log(menuElement.classList);

    const ativo = document.querySelector(".ativo");
    console.log(ativo);
  }
};

menu.ativar();

const body = document.querySelector("body");
body.classList.add("js");
console.log(body.classList)


