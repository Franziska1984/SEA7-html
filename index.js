
// Das ist ein Kommentar //

console.log("Hallo Welt!")

/* Das ist auch ein Kommentar */

var Zahlenwerte = ""

document.getElementById("B0").addEventListener("click",appendNull); /*nimmt den Button raus und verknüpft mit der Funktion*/
document.getElementById("B1").addEventListener("click",appendEins);
document.getElementById("B2").addEventListener("click",appendZwei);
document.getElementById("B3").addEventListener("click",appendDrei);
document.getElementById("B4").addEventListener("click",appendVier);
document.getElementById("B5").addEventListener("click",appendFuenf);
document.getElementById("B6").addEventListener("click",appendSechs);
document.getElementById("B7").addEventListener("click",appendSieben);
document.getElementById("B8").addEventListener("click",appendAcht);
document.getElementById("B9").addEventListener("click",appendNeun);
document.getElementById("Reset").addEventListener("click",appendReset);
document.getElementById("plus").addEventListener("click",appendPlus);
document.getElementById("minus").addEventListener("click",appendMinus);
document.getElementById("mal").addEventListener("click",appendMal);
document.getElementById("durch").addEventListener("click",appendDurch);
document.getElementById("istgleich").addEventListener("click",appendIstgleich);

function adNumberToTheTextbox (Zahl) {                  /*diese Funktion packt die unteren Funktionen überschaubar zusammen */
      Zahlenwerte = Zahlenwerte + Zahl;
      document.getElementById("eingabefeld").value = Zahlenwerte;
      if (a == "links") {
            document.getElementById("linkerOperator").value = Zahlenwerte;
      }
      else {
            document.getElementById("rechterOperator").value = Zahlenwerte;
      }
}

function appendNull() {adNumberToTheTextbox (0);}       /*diese Funktion sagt das die Zahl 0 gesetzt werden soll */
function appendEins() {adNumberToTheTextbox (1);}
function appendZwei() {adNumberToTheTextbox (2);}
function appendDrei() {adNumberToTheTextbox (3);} 
function appendVier() {adNumberToTheTextbox (4);} 
function appendFuenf() {adNumberToTheTextbox (5);}
function appendSechs() {adNumberToTheTextbox (6);}
function appendSieben() {adNumberToTheTextbox (7);}
function appendAcht() {adNumberToTheTextbox (8);}
function appendNeun() {adNumberToTheTextbox (9);}
function appendPlus() {AuswahlZeichen ("+");}
function appendMinus() {AuswahlZeichen ("-");}
function appendMal() {AuswahlZeichen ("*");}
function appendDurch() {AuswahlZeichen ("/");}


function appendIstgleich() {
      var Ergebnis = 0
      var stringLO = document.getElementById("linkerOperator").value;
      var intlo = parseInt (stringLO);
      var stringRO = document.getElementById("rechterOperator").value;
      var intro = parseInt (stringRO);
      switch (Zeichen) {
            
            case "+": Ergebnis = intro + intlo;
            break;
            case "-": Ergebnis = intro - intlo;
            break;
            case "*": Ergebnis = intro * intlo;
            break;
            case "/": Ergebnis = intro / intlo;
            break;
      }
      document.getElementById("ausgabefeld").value = Ergebnis;
      }

      
function appendReset(Zahl) {                /*diese Funktion sagt das das Feld geleehrt werden soll */
      Zahlenwerte = " "; 
      Zeichen = " ";
      document.getElementById("linkerOperator").value = Zahlenwerte;
      document.getElementById("Zeichen").value = Zeichen;
      document.getElementById("rechterOperator").value = Zahlenwerte;
      document.getElementById("eingabefeld").value = Zahlenwerte;
      document.getElementById("ausgabefeld").value = Zahlenwerte;
            var m = 1;
            for(var n = 1; n <= Zahl; n++) {
            m = m * n;
            console.log(m);  
            };
      return m;
}

var Zeichen = " "
var a = "links"
function AuswahlZeichen (Operator) {
      Zeichen =  Operator;
      document.getElementById("Zeichen").value = Zeichen; 
      switch ( a ) {
      case "links": a = "rechts";
      Zahlenwerte = " ";
      break;
      case "rechts": a = "links";
      Zahlenwerte = " ";
      break;
}
}



var linkerOperator = " "
function AuswahlZeichen1 (Operator) {
      linkerOperator =  Operator;
      document.getElementById("linkerOperator").value = linkerOperator;  
}
var rechterOperator = " "
function AuswahlZeichen2 (Operator) {
      rechterOperator =  Operator;
      document.getElementById("rechterOperator").value = rechterOperator;  
}

/* >> das gleiche wie die Funktion darüber, nur mit WHILE
      function faculty( zahl ) {
      var n = 1; // Zum hochzaehlen
      var m = 1; // Ergebnis (Fakultät)
      while ( n <= zahl ) {
	   m = m * n;
	   n = n + 1;
	console.log(m);
      }
      return m;
      }
*/

function ausrechnen() {                    /*diese rechnet das Ergebis der Fakultät aus und schreibt es in das Ausgabefeld */
     var eingabe = document.getElementById("eingabefeld").value;

     var ausgabe = faculty(eingabe);
     document.getElementById("ausgabefeld").value = ausgabe;
}
/*ausrechnen();*/

document.getElementById("Rechner").addEventListener("click",ausrechnen);



/*    for (var i = 0; i < 4; i++){
      console.log(i);
    }      /*                  dies ist die for Schleife
*/

/*  var i = 0;
    while ( i < 4) {
       i = i + 1;
      console.log(i);
    }                     dies ist die while Schleife
*/



















