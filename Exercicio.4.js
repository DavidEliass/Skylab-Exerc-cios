
function experiencia(anos) {
  if (anos <= 1) {
    console.log("O usuario é nivel Iniciante")
  } else if (anos <= 3) {
      console.log("O usuario é nivel Intermediário")
  } else if (anos <= 6 ) {
      console.log("O usuario é nivel Avançado")
  } else if (anos >= 7) {
    console.log("O usuario é nivel Jedi Master")
  }
}

var nivel = experiencia('5')