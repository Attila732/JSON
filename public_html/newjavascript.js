$(document).ready(function () {
    var termekekTomb = [];
    var torlesID = 0;
    $("#gomb").click(function () {
        const leiras = {
            HáztartásiKisgép: "A mai világunkban az otthonunk elképzelhetetlen háztartási eszközök nélkül.",
            AutóMotorAlkatrész: "Minden alkatrész fontos eleme egy egésznek",
            Szépségápolás: "Elsősorban a nők részeként használatos szó összetétel és a legpontosabb értelmében a szó önmagát jelenti az az a szépségünk folyamatos ápolását",
            SzórakoztatóElektronika: "A legjobban fejlődő iparág a 21.században"
        };
        torlesID++;
        var ujTermek = {
            tNev: $('#temekNev').val(),
            tAzon: $('#termekAzon').val(),
            tAr: $('#termekAr').val(),
            tKeszlet: $('#termekKeszlet').val(),
            tKategria: $('#termekKategoria').val(),
            tLeiras: $(' ')
        };

        //Eldontes
        if (ujTermek.tKategria == "haztartasi") {
            ujTermek.tLeiras = leiras.HáztartásiKisgép;
        } else if (ujTermek.tKategria == "auto") {
            ujTermek.tLeiras = leiras.AutóMotorAlkatrész;
        } else if (ujTermek.tKategria == "szépségápolás") {
            ujTermek.tLeiras = leiras.Szépségápolás;
        } else if (ujTermek.tKategria == "Szórakoztató elektronika") {
            ujTermek.tLeiras = leiras.SzórakoztatóElektronika;
        } else {
            ujTermek.tLeiras = "Nem létező leírás";
        }
        

        var tableForma = "<tr>";
        for (var item in ujTermek) {
            tableForma += "<th>" + ujTermek[item] + "</th>";
        }
        var torlesGombID="torles"+torlesID;
        ujTermek['tTorles'] = "#"+torlesGombID;
        tableForma += '<th><input id="'+torlesGombID+'" type="submit" value="törlés">'+"</th></tr>";
        $('table').append(tableForma);
        
        window.alert(ujTermek.tTorles);
        termekekTomb += ujTermek;


    });


});



