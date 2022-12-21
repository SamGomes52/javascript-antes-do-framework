// Forma convencional de função: 
function upperCase(nome) {
  return nome.toUpperCase();
}

// Colocando a função dentro de uma variável ou constante:
const stringLength = function(nome) {
  return nome.length;
}

// Arrow function:
const lowerCase = (nome) => {
  return nome.toLowerCase();
}

// Em uma só linha:
const replaceString = (nome, remove, sub) => nome.replace(remove, sub);

// Exemplo de classe usando arrow function:
class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    this.menuElement.addEventListener("click", event => {
      console.log(this);
      event.target.classList.add(this.activeClass);
    });
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();


class Aviso {
  constructor(aviso) {
    this.avisoElement = document.querySelector(aviso);
    this.visivelClass = "visivel";
  }

  tornaVisivel() {
    this.avisoElement.classList.add(this.visivelClass);
  }
}

class Informacao {
  constructor(informacao) {
    this.informacaoElement = document.querySelector(informacao);
    this.copiadoClass = "copiado";
  }

  addActiveEvent(avisoClass) {
    this.informacaoElement.addEventListener("copy", (event) => {
      console.log(this);
      event.target.classList.add(this.copiadoClass);
      avisoClass.tornaVisivel();
    });
  }
}

const aviso = new Aviso(".invisivel");
const informacao = new Informacao(".texto");
informacao.addActiveEvent(aviso);