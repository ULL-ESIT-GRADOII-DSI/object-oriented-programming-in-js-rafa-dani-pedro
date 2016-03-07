(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
    this.valor = valor;
    this.tipo = tipo;
  }

  function Temperatura(valor,tipo)
  {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    this.valor = valor;
    this.tipo = tipo;
  }

  exports.Temperatura = Temperatura;

  exports.convertir = function() {
    var elemento_cel  = document.getElementById('converted_cel'),
        elemento_far  = document.getElementById('converted_far'),
        elemento_kel  = document.getElementById('converted_kel'),
        elemento_met  = document.getElementById('converted_met'),
        elemento_pul  = document.getElementById('converted_pul'),
        /* Extienda la RegeExp a la especificación. use una XRegExp */

    if (valor) {
      var numero = valor[1],
          tipo   = valor[2].toLowerCase();

      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);

      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento_cel.innerHTML = numero.toFixed(2) + " Celsius";
          elemento_far.innerHTML = celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
          elemento_kel.innerHTML = celsius.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'f':
          var fahrenheit = new Fahrenheit(numero);
          elemento_cel.innerHTML = fahrenheit.toCelsius().toFixed(2) + " Celsius";
          elemento_far.innerHTML = numero.toFixed(2) + " Fahrenheit";
          elemento_kel.innerHTML = fahrenheit.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'k':
          var kelvin = new Kelvin(numero);
          elemento_cel.innerHTML = kelvin.toCelsius().toFixed(2) + " Celsius";
          elemento_far.innerHTML = kelvin.toFahrenheit().toFixed(2) + " Fahrenheit";
          elemento_kel.innerHTML = numero.toFixed(2) + " Kelvin";
          break;
        case 'm':
          var metro = new Metro(numero);
          elemento_pul.innerHTML = metro.toPulgada().toFixed(2) + " Pulgadas";
          elemento_met.innerHTML = numero.toFixed(2) + " Metros";
          break;
        case 'p':
          var pulgada = new Pulgada(numero);
          elemento_met.innerHTML = pulgada.toMetro().toFixed(2) + " Metros";
          elemento_pul.innerHTML = numero.toFixed(2) + " Pulgadas";
          break;
        default:
          elemento_cel.innerHTML = "";
          elemento_far.innerHTML = "";
          elemento_kel.innerHTML = "";
          elemento_met.innerHTML = "";
          elemento_pul.innerHTML = "";
      }
    }
    else{
      elemento_cel.innerHTML = "";
      elemento_far.innerHTML = "";
      elemento_kel.innerHTML = "";
      elemento_met.innerHTML = "";
      elemento_pul.innerHTML = "";
    }
  }
})(this);
