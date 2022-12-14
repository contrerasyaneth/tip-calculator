function tipCalculator(subtotal, porcenTip, personas) {
  let propina;

  propina = (subtotal * porcenTip) / personas;

  //redondea sin decimales, es decir a numeros enteros
  //propina = Math.round(propina);

  //redondea a cifras decimales
  propina = propina;
}

export default tipCalculator;
