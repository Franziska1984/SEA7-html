console.log("Ja"); //die Überprüfung auf der Webseite ob es geschrieben wird

function VornameNachname(){      
    // Eingabe
    var Vorname = document.getElementById ("Vorname").value;  
    //setzt für den Vornamen eine Variable und zieht den Wert aus dem Feld Vorname

    var Nachname = document.getElementById ("Nachname").value;  
    //setzt für den Nachnamen eine Variable und zieht den Wert aus dem Feld Nachname
    
    // Verarbeitung
    if (Vorname == "") {     //wenn das Feld Vorname leer ist
        var Name = Nachname; //dann schreibe nur den Nachnamen rein
    }
    else {  // ansonsten machen das 
         var Name = Vorname +" "+ Nachname; //fügt Vorname und Nachname zusammen
    }
       // Ausgabe
    document.getElementById("Name").value = Name;  //AusgabeOrt = was soll rein geschrieben werden
}

document.getElementById("drueckmich").addEventListener("click",VornameNachname)
//wenn Button gedrückt wird, wird die Funktion VornameNachname ausgeführt
 
/*Info Variablen > ausgeschrieben:
    var Name = "";
    Name = Vorname + Nachname;

    verkürzt:
    var Name = Vorname + Nachname
*/

function NachnameVorname () {
    var Vorname = document.getElementById ("Vorname").value;  
    var Nachname = document.getElementById ("Nachname").value;  

    var NachnameVorname = Nachname + "," + Vorname;
    
    document.getElementById("NachnameVorname").value = NachnameVorname;
}
document.getElementById("zusammengesetzt").addEventListener("click",NachnameVorname)