console.log("Ja");

function empfaenger1(antwort){
    console.log("Die Daten wurden empfangen");
    console.log(antwort);

    var json = antwort.json();
    return json;
}

function empfaenger2(json) {
    console.log(json);
    console.log(json.vorname);
    console.log(json.nachname);
    console.log(json.strasse);

    var vorname = json.vorname;
    var nachname = json.nachname;
    var strasse = json.strasse;

    document.getElementById("vorname").value = vorname;
    document.getElementById("nachname").value = nachname;
    document.getElementById("strasse").value = strasse;
}

function key_abrufen(){
    //Eingabe (Abholen vom Wert)
    var key = document.getElementById("eingabe").value;

   //Verarbeitung (holt aus den Ordner mit dem Schlüssel die Datei)
   fetch("json/" + key + ".json")
   .then(empfaenger1) //was macht man damit:Paket entgegennehmen
   .then(empfaenger2); //was macht man damit:Daten aus dem Paket entgegennehmen
}

function verschicken() {
    
    // URL:
    // http(s): Hypertext Transfer Protocol (s=secure)
    // ://
    // host: Gastgeber - ein Computer im Netzwerk
    // port: 80, 8000 - Nebenstelle
    // pfad/auf/eine - Verzeichnis
    // datei - "Der Endpunkt"
    //
    var url = "https://host:port/pfad/auf/eine/datei";
    
    var vorname = document.getElementById ("vorname").value;        //die Variable vorname soll das dem Feld vorname genommen werden
    var nachname = document.getElementById ("nachname").value; 
    var nachname = document.getElementById ("strasse").value; 

    var data = {                          //das soll ausgegeben werden
        "vorname": vorname,
        "nachname": nachname,
        "strasse": strasse,
    };
    
    var datajson = JSON.stringify(data); // JSON-Object (data)in einem String umwandeln und in Variable datajson ablegen
    console.log(datajson);               // in der Konsole anzeigen
    // Verschicken der Daten
    fetch( url,
         {
            method: "POST", // das Paket wird an den Server geschickt
            body: datajson
         }
         );
 }
document.getElementById("drueck_mich").addEventListener("click",key_abrufen);
document.getElementById("abschicken").addEventListener("click",verschicken);