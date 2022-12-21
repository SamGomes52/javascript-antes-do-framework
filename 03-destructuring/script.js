function handleMouseMove({ clientX, clientY }) {
  const bolinhaColoridaElement = document.querySelector(".ponto-colorido");

  let posX = clientX - 50;
  let posY = clientY - 50;
  
  bolinhaColoridaElement.style.left = posX + "px";
  bolinhaColoridaElement.style.top = posY + "px";

}

document.documentElement.addEventListener("mousemove", handleMouseMove);

const frutas = ["Banana", "Uva"];

const [fruta1, fruta2] = frutas;

const useState = [
  "blue",
  function(color) {
    useState[0] = color;
  }
];

const [color, setColor] = useState;

