function calc() {
    var a = document.getElementById("nb1").value;
    var b = document.getElementById("nb2").value;
    var ope = document.getElementById("ope").value;
    var resultat;
  
    switch (ope) {
      case "+":
        resultat = a + b;
        break;
      case "-":
        resultat = a - b;
        break;
      case "*":
        resultat = a * b;
        break;
      case "%":
        if (b === 0) {
          resultat = "Division par zéro impossible";
        }
        resultat = a % b;
        break;
      case "/":
        if (b === 0) {
          resultat = "Division par zéro impossible";
        }
        resultat = a / b;
        break;
      default:
        resultat = "Opération non valide";
    }
    document.getElementById("result").innerText = resultat;
  }