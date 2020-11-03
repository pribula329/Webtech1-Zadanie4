


document.getElementById("tabulka1").style.display = "none";
function kontrolaVstupov(hodnota)
{
    if (hodnota===1) {
        var text = document.getElementById('upozornenieX');
        var hodnotaVstupu = document.getElementById('hodnotaX').value;
    }
    else if (hodnota===2){
        var text = document.getElementById('upozornenieY');
        var hodnotaVstupu = document.getElementById('hodnotaY').value;
    }



    if (hodnotaVstupu<=9 && hodnotaVstupu>=1) {
        text.innerHTML = "Hodnota je validna";
        text.style.color = "#00FF33";
        return true;
    } else {

        text.innerHTML = "Hodnota je zlá";
        text.style.color = "#FF0000";
        return false;
    }
}





function odosliVstupy(){

    var kontrola1 = 1;
    var kontrola2 = 2;
    if (kontrolaVstupov(kontrola1)===false || kontrolaVstupov(kontrola2)===false )
    {
        alert("Chyba skontroluj vstupy");
        return false;
    }
    else{
        return true;
    }


}

function zobraz(){
    if (odosliVstupy()===true){
        document.getElementById("tabulka1").style.display = "block";
        document.getElementById("tabulka1").style.textAlign = "center";
        generuj();
    }
}

function off(){
    var dieta = document.getElementById("tabulka").lastChild;

    document.getElementById("tabulka1").style.display = "none";
    document.getElementById("tabulka").removeChild(dieta);
}


function generuj() {
    var vstup1 = document.getElementById("hodnotaY").value;
    var vstup2 = document.getElementById("hodnotaX").value;




    var tabulka = document.createElement("table");

    for (var x=0;x<=vstup1;x++){
        var riadok = document.createElement("tr");
        console.log(x);
        for (var y=0;y<=vstup2;y++){
            if (x===0 && y===0){

                var stlpec = document.createElement("td");
                var vysledok = document.createTextNode("  ");
                stlpec.appendChild(vysledok);

            }
            else if (x===0 && y>0){
                var vysledok = document.createTextNode("X=" + y);
                var stlpec = document.createElement("td");

                stlpec.appendChild(vysledok);


            }
            else if (x>0 && y==0){
                var vysledok = document.createTextNode("Y=" + x);
                var stlpec = document.createElement("td");
                stlpec.appendChild(vysledok);

            }
            else {
                var hodnota = x * y;
                var vysledok = document.createTextNode(hodnota);
                var stlpec = document.createElement("td");
                stlpec.appendChild(vysledok);

            }

            riadok.appendChild(stlpec);

        }


        tabulka.appendChild(riadok);

    }

    var divtab = document.createElement("div");
    var divtab = document.createElement("div");
    divtab.appendChild(tabulka);

    document.getElementById("tabulka").appendChild(divtab);



}