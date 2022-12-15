import tipCalculator from "./modules/tipcalculator.js";
import totalFinal from "./modules/TotalFinal.js";

// constantes de los elementos de HTML
const main = document.getElementById("main");
const form = document.getElementById("main-form");

//guardar valores en variables
const subtotal = document.getElementById("total-bill");
const porcenDiv = document.getElementById("form-btns");
const personas = document.getElementById("total-people");

//variable para almacenar el valor porcentual selecionado
let porcenTip;

//evento para escuchar a que boton le estamos dando click
porcenDiv.addEventListener("click", (e) => {
  porcenTip = e.target;
  console.log(porcenTip);

  //condicion para escuchar el custom
  if (e.target.id === "custom-tip") {
    console.log("si soy custom");
  }
});

// crear un evento de submit para la forma
form.addEventListener("submit", (e) => {
  //evitar la accio por defecto
  e.preventDefault();

  //crear objeto constante con los valores de la forma
  const formulario = {
    subTotalF: parseFloat(subtotal.value),
    porcenTipF: parseFloat(porcenTip.value),
    personasF: parseFloat(personas.value),
  };

  console.log(formulario);

  const { subTotalF, porcenTipF, personasF } = formulario;

  const tipFinal = tipCalculator(subTotalF, porcenTipF, personasF);

  console.log(tipFinal);

  const totalF = totalFinal(subTotalF, personasF, tipFinal);

  console.log(totalF);
});
