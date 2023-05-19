const medidas = {
  tiempo: ["segundos", "minutos", "horas", "días"],
  masa: ["kl", "hl", "dal", "l", "dl", "cl", "ml"],
  volumen: ["kg", "hg", "dag", "g", "dg", "cg", "mg"],
  longitud: ["km", "hm", "dam", "m", "dm", "cm", "mm"]
  };
  
  function crearLista() {
  const medida = document.getElementById("medida").value;
  const opciones = medidas[medida];
  if (opciones) {
  let select = document.createElement("select");
  select.setAttribute("id", "nuevaMedida");
  for (let i = 0; i < opciones.length; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", opciones[i]);
  option.text = opciones[i];
  select.appendChild(option);
  }
  document.getElementById("nuevaLista").innerHTML = "";
  document.getElementById("nuevaLista").appendChild(select);
  } else {
  document.getElementById("nuevaLista").innerHTML = "";
  }
  }
  
  function obtenerValores() {
  const medidaSeleccionada = document.getElementById("nuevaMedida").value;
  const valorIngresado = document.getElementById("valor").value;
  console.log("Medida seleccionada:", medidaSeleccionada);
  console.log("Valor ingresado:", valorIngresado);
  
  // Realizar conversión
  let resultado = 0;
  const unidadOrigen = document.getElementById("medida").value;
  if (unidadOrigen === "tiempo") {
  if (medidaSeleccionada === "segundos") {
  resultado = valorIngresado;
  } else if (medidaSeleccionada === "minutos") {
  resultado = valorIngresado / 60;
  } else if (medidaSeleccionada === "horas") {
  resultado = valorIngresado / 3600;
  } else if (medidaSeleccionada === "días") {
  resultado = valorIngresado / 86400;
  }
  } else if (unidadOrigen === "masa") {
  if (medidaSeleccionada === "kl") {
  resultado = valorIngresado / 1000;
  } else if (medidaSeleccionada === "hl") {
  resultado = valorIngresado / 100;
  } else if (medidaSeleccionada === "dal") {
  resultado = valorIngresado / 10;
  } else if (medidaSeleccionada === "l") {
  resultado = valorIngresado;
  } else if (medidaSeleccionada === "dl") {
  resultado = valorIngresado * 10;
  } else if (medidaSeleccionada === "cl") {
  resultado = valorIngresado * 100;
  } else if (medidaSeleccionada === "ml") {
  resultado = valorIngresado * 1000;
  }
  } else if (unidadOrigen === "volumen") {
  if (medidaSeleccionada === "kg") {
  resultado = valorIngresado * 1000;
  } else if (medidaSeleccionada === "hg") {
  resultado = valorIngresado * 100;
  } else if (medidaSeleccionada === "dag") {
  resultado = valorIngresado * 10;
  } else if (medidaSeleccionada === "g") {
  resultado = valorIngresado;
  } else if (medidaSeleccionada === "dg") {
  resultado = valorIngresado /10000;
} else if (medidaSeleccionada === "cg") {
resultado = valorIngresado / 100000;
} else if (medidaSeleccionada === "mg") {
resultado = valorIngresado / 1000000;
}
} else if (unidadOrigen === "longitud") {
if (medidaSeleccionada === "km") {
resultado = valorIngresado / 1000;
} else if (medidaSeleccionada === "hm") {
resultado = valorIngresado / 100;
} else if (medidaSeleccionada === "dam") {
resultado = valorIngresado / 10;
} else if (medidaSeleccionada === "m") {
resultado = valorIngresado;
} else if (medidaSeleccionada === "dm") {
resultado = valorIngresado * 10;
} else if (medidaSeleccionada === "cm") {
resultado = valorIngresado * 100;
} else if (medidaSeleccionada === "mm") {
resultado = valorIngresado * 1000;
}
}
  // Verificar si resultado es un número válido
  if (isNaN(resultado)) {
    document.getElementById("resultado").innerHTML = "Valor no válido";
  } else {
    document.getElementById("resultado").innerHTML = resultado.toFixed(2) + " " + medidaSeleccionada;
  }
}
