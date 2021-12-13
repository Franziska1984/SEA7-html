
// Das ist ein Kommentar
//
//

console.log("Hallo Welt!")

/* Das ist auch ein Kommentar
 *
*/

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

function ausrechnen() {
     var eingabe = document.getElementById("eingabefeld").value;
     	
     var ausgabe = faculty(eingabe);
     document.getElementById("ausgabefeld").value = ausgabe;
}
/*ausrechnen();*/

document.getElementById("Rechner").addEventListener("click",ausrechnen);







