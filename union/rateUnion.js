localStorage.setItem("unionInitBeenCalled", false);

function initRateUnion() {
    if(!localStorage.getItem("unionInitBeenCalled")) {
        // gender neutral
        localStorage.setItem("genderNeutralYes", 0);
        localStorage.setItem("genderNeutralNo", 0);
        localStorage.setItem("genderNeutralTotal", 0);
        localStorage.setItem("genderNeutralPercent", 0);

        // vending machines
        localStorage.setItem("vendingMachinesYes", 0);
        localStorage.setItem("vendingMachineNo", 0);
        localStorage.setItem("vendingMachineTotal", 0);
        localStorage.setItem("vendingMachinesPercent", 0);

        // food and drinks
        localStorage.setItem("foodYes", 0);
        localStorage.setItem("foodNo", 0);
        localStorage.setItem("foodTotal", 0);
        localStorage.setItem("foodPercent", 0);

        // standing desks
        localStorage.setItem("standingDesksYes", 0);
        localStorage.setItem("standingDeskslNo", 0);
        localStorage.setItem("standingDesksTotal", 0);
        localStorage.setItem("standingDesksPercent", 0);

        // printers
        localStorage.setItem("printersYes", 0);
        localStorage.setItem("printersNo", 0);
        localStorage.setItem("printersTotal", 0);
        localStorage.setItem("printersPercent", 0);

        // copiers
        localStorage.setItem("copiersYes", 0);
        localStorage.setItem("copiersNo", 0);
        localStorage.setItem("copiersTotal", 0);
        localStorage.setItem("copiersPercent", 0);

        // phone chargers
        localStorage.setItem("chargersYes", 0);
        localStorage.setItem("chargersNo", 0);
        localStorage.setItem("chargersTotal", 0);
        localStorage.setItem("chargersPercent", 0);

        // One Card
        localStorage.setItem("oneCardYes", 0);
        localStorage.setItem("oneCardNo", 0);
        localStorage.setItem("oneCardTotal", 0);
        localStorage.setItem("oneCardPercent", 0);

        // physical accessibility
        localStorage.setItem("totalHAPoints",0);
        localStorage.setItem("totalHARatings", 0);
        localStorage.setItem("haAverage", 0);

         // atmosphere
         localStorage.setItem("totalAtmospherePoints",0);
         localStorage.setItem("totalAtmosphereRatings", 0);
         localStorage.setItem("atmosphereAverage", 0);

        // physical accessibility
        localStorage.setItem("totalSupportPoints",0);
        localStorage.setItem("totalSupportRatings", 0);
        localStorage.setItem("supportAverage", 0);

         // physical accessibility
         localStorage.setItem("totalCovidPoints",0);
         localStorage.setItem("totalCovidRatings", 0);
         localStorage.setItem("covidAverage", 0);

        // changing init var
        localStorage.setItem("unionInitBeenCalled", true);
    }  
    
    console.log("on load of page 3: " + localStorage.getItem("genderNeutralPercent"));
}

function initPage2() {
    var link = window.location.href;

    if(link.includes("?")) {
        var params = link.split("?");
        var ratings = new Array(8);
        for(let i = 1; i <= 8; i++) {
            console.log(params);
            var gn = params[i];
            console.log(gn);
            var gn2 = gn.split("=")[1];
            console.log(gn2);
            var croppedGn = Math.round(Number(gn2) * 100);
            console.log(croppedGn);
            ratings[i-1] = croppedGn;
        }

        console.log(ratings);
        document.getElementById("genNeu").innerHTML = ratings[0];
        document.getElementById("venMac").innerHTML = ratings[1];
        document.getElementById("foo").innerHTML = ratings[2];
        document.getElementById("staDes").innerHTML = ratings[3];
        document.getElementById("pri").innerHTML = ratings[4];
        document.getElementById("cop").innerHTML = ratings[5];
        document.getElementById("cha").innerHTML = ratings[6];
        document.getElementById("oneCar").innerHTML = ratings[7];

        localStorage.setItem("genderNeutral", ratings[0]);
        localStorage.setItem("vendingMachines", ratings[1]);
        localStorage.setItem("food", ratings[2]);
        localStorage.setItem("standingDesks", ratings[3]);
        localStorage.setItem("printers", ratings[4]);
        localStorage.setItem("copiers", ratings[5]);
        localStorage.setItem("chargers", ratings[6]);
        localStorage.setItem("oneCard", ratings[7]);

        var amenities = new Array(4);
        for(let i = 9; i <= 12; i++) {
            console.log(params[i]);
            var item = params[i];
            console.log(item);
            var item2 = item.split("=")[1];
            console.log(item2);
            amenities[i-9] = Number(item2);
        }

        document.getElementById("ha").innerHTML = amenities[0];
        document.getElementById("a").innerHTML = amenities[1];
        document.getElementById("s").innerHTML = amenities[2];
        document.getElementById("c").innerHTML = amenities[3];

        localStorage.setItem("haAverage", amenities[0]);
        localStorage.setItem("atmosphereAverage", amenities[1]);
        localStorage.setItem("supportAverage", amenities[2]);
        localStorage.setItem("covidAverage", amenities[3]);


    }

    else {
        document.getElementById("genNeu").innerHTML = localStorage.getItem("genderNeutral");
        document.getElementById("venMac").innerHTML = localStorage.getItem("vendingMachines");
        document.getElementById("foo").innerHTML = localStorage.getItem("food");
        document.getElementById("staDes").innerHTML = localStorage.getItem("standingDesks");
        document.getElementById("pri").innerHTML = localStorage.getItem("printers");
        document.getElementById("cop").innerHTML = localStorage.getItem("copiers");
        document.getElementById("cha").innerHTML = localStorage.getItem("chargers");
        document.getElementById("oneCar").innerHTML = localStorage.getItem("oneCard");

        document.getElementById("ha").innerHTML = localStorage.getItem("haAverage");
        document.getElementById("a").innerHTML = localStorage.getItem("atmosphereAverage");
        document.getElementById("s").innerHTML = localStorage.getItem("supportAverage");
        document.getElementById("c").innerHTML = localStorage.getItem("covidAverage");
    }
}

function submit() {
    // gender neutral
    if(document.getElementById("genderNeutralYes").checked) {
        localStorage.setItem("genderNeutralYes", Number(localStorage.getItem("genderNeutralYes"))+1);
        localStorage.setItem("genderNeutralTotal", Number(localStorage.getItem("genderNeutralTotal"))+1);
        localStorage.setItem("genderNeutralPercent", Number(localStorage.getItem("genderNeutralYes")) / Number(localStorage.getItem("genderNeutralTotal")));
    }

    else if(document.getElementById("genderNeutralNo").checked) {
        localStorage.setItem("genderNeutralNo", Number(localStorage.getItem("genderNeutralNo"))+1);
        localStorage.setItem("genderNeutralTotal", Number(localStorage.getItem("genderNeutralTotal"))+1);
        localStorage.setItem("genderNeutralPercent", Number(localStorage.getItem("genderNeutralYes")) / Number(localStorage.getItem("genderNeutralTotal")));
    }

    // vending machines
    if(document.getElementById("vendingMachinesYes").checked) {
        localStorage.setItem("vendingMachinesYes", Number(localStorage.getItem("vendingMachinesYes"))+1);
        localStorage.setItem("vendingMachinesTotal", Number(localStorage.getItem("vendingMachinesTotal"))+1);
        localStorage.setItem("vendingMachinesPercent", Number(localStorage.getItem("vendingMachinesYes")) / Number(localStorage.getItem("vendingMachinesTotal")));
    }

    else if(document.getElementById("vendingMachinesNo").checked) {
        localStorage.setItem("vendingMachinesNo", Number(localStorage.getItem("vendingMachinesNo"))+1);
        localStorage.setItem("vendingMachinesTotal", Number(localStorage.getItem("vendingMachinesTotal"))+1);
        localStorage.setItem("vendingMachinesPercent", Number(localStorage.getItem("vendingMachinesYes")) / Number(localStorage.getItem("vendingMachinesTotal")));
    }

    // food and drinks
    if(document.getElementById("foodYes").checked) {
        localStorage.setItem("foodYes", Number(localStorage.getItem("foodYes"))+1);
        localStorage.setItem("foodTotal", Number(localStorage.getItem("foodTotal"))+1);
        localStorage.setItem("foodPercent", Number(localStorage.getItem("foodYes")) / Number(localStorage.getItem("foodTotal")));
    }

    else if(document.getElementById("foodNo").checked) {
        localStorage.setItem("foodNo", Number(localStorage.getItem("foodNo"))+1);
        localStorage.setItem("foodTotal", Number(localStorage.getItem("foodTotal"))+1);
        localStorage.setItem("foodPercent", Number(localStorage.getItem("foodYes")) / Number(localStorage.getItem("foodTotal")));
    }

    // standing desks
    if(document.getElementById("standingDesksYes").checked) {
        localStorage.setItem("standingDesksYes", Number(localStorage.getItem("standingDesksYes"))+1);
        localStorage.setItem("standingDesksTotal", Number(localStorage.getItem("standingDesksTotal"))+1);
        localStorage.setItem("standingDesksPercent", Number(localStorage.getItem("standingDesksYes")) / Number(localStorage.getItem("standingDesksTotal")));
    }

    else if(document.getElementById("standingDesksNo").checked) {
        localStorage.setItem("standingDesksNo", Number(localStorage.getItem("standingDesksNo"))+1);
        localStorage.setItem("standingDesksTotal", Number(localStorage.getItem("standingDesksTotal"))+1);
        localStorage.setItem("standingDesksPercent", Number(localStorage.getItem("standingDesksYes")) / Number(localStorage.getItem("standingDesksTotal")));
    }

    // printers
    if(document.getElementById("printersYes").checked) {
        localStorage.setItem("printersYes", Number(localStorage.getItem("printersYes"))+1);
        localStorage.setItem("printersTotal", Number(localStorage.getItem("printersTotal"))+1);
        localStorage.setItem("printersPercent", Number(localStorage.getItem("printersYes")) / Number(localStorage.getItem("printersTotal")));
    }

    else if(document.getElementById("printersNo").checked) {
        localStorage.setItem("printersNo", Number(localStorage.getItem("printersNo"))+1);
        localStorage.setItem("printersTotal", Number(localStorage.getItem("printersTotal"))+1);
        localStorage.setItem("printersPercent", Number(localStorage.getItem("printersYes")) / Number(localStorage.getItem("printersTotal")));
    }

    // copiers
    if(document.getElementById("copiersYes").checked) {
        localStorage.setItem("copiersYes", Number(localStorage.getItem("copiersYes"))+1);
        localStorage.setItem("copiersTotal", Number(localStorage.getItem("copiersTotal"))+1);
        localStorage.setItem("copiersPercent", Number(localStorage.getItem("copiersYes")) / Number(localStorage.getItem("copiersTotal")));
    }

    else if(document.getElementById("copiersNo").checked) {
        localStorage.setItem("copiersNo", Number(localStorage.getItem("copiersNo"))+1);
        localStorage.setItem("copiersTotal", Number(localStorage.getItem("copiersTotal"))+1);
        localStorage.setItem("copiersPercent", Number(localStorage.getItem("copiersYes")) / Number(localStorage.getItem("copiersTotal")));
    }

    // chargers
    if(document.getElementById("chargersYes").checked) {
        localStorage.setItem("chargersYes", Number(localStorage.getItem("chargersYes"))+1);
        localStorage.setItem("chargersTotal", Number(localStorage.getItem("chargersTotal"))+1);
        localStorage.setItem("chargersPercent", Number(localStorage.getItem("chargersYes")) / Number(localStorage.getItem("chargersTotal")));
    }

    else if(document.getElementById("chargersNo").checked) {
        localStorage.setItem("chargersNo", Number(localStorage.getItem("chargersNo"))+1);
        localStorage.setItem("chargersTotal", Number(localStorage.getItem("chargersTotal"))+1);
        localStorage.setItem("chargersPercent", Number(localStorage.getItem("chargersYes")) / Number(localStorage.getItem("chargersTotal")));
    }

    // One Card
    if(document.getElementById("oneCardYes").checked) {
        localStorage.setItem("oneCardYes", Number(localStorage.getItem("oneCardYes"))+1);
        localStorage.setItem("oneCardTotal", Number(localStorage.getItem("oneCardTotal"))+1);
        localStorage.setItem("oneCardPercent", Number(localStorage.getItem("oneCardYes")) / Number(localStorage.getItem("oneCardTotal")));
    }

    else if(document.getElementById("oneCardNo").checked) {
        localStorage.setItem("oneCardNo", Number(localStorage.getItem("oneCardNo"))+1);
        localStorage.setItem("oneCardTotal", Number(localStorage.getItem("oneCardTotal"))+1);
        localStorage.setItem("oneCardPercent", Number(localStorage.getItem("oneCardYes")) / Number(localStorage.getItem("oneCardTotal")));
    }

    // physical accessibility
    if(document.getElementById("accessibilityStar5").checked) {
        console.log("checkeeeeeeeddddddddddddd!");
        localStorage.setItem("totalHAPoints", Number(localStorage.getItem("totalHAPoints")) + 5);
        localStorage.setItem("totalHARatings", Number(localStorage.getItem("totalHARatings")) + 1);
    }

    else if(document.getElementById("accessibilityStar4").checked) {
        localStorage.setItem("totalHAPoints", Number(localStorage.getItem("totalHAPoints")) + 4);
        localStorage.setItem("totalHARatings", Number(localStorage.getItem("totalHARatings")) + 1);
    }

    else if(document.getElementById("accessibilityStar3").checked) {
        localStorage.setItem("totalHAPoints", Number(localStorage.getItem("totalHAPoints")) + 3);
        localStorage.setItem("totalHARatings", Number(localStorage.getItem("totalHARatings")) + 1);
    }

    else if(document.getElementById("accessibilityStar2").checked) {
        localStorage.setItem("totalHAPoints", Number(localStorage.getItem("totalHAPoints")) + 2);
        localStorage.setItem("totalHARatings", Number(localStorage.getItem("totalHARatings")) + 1);
    }

    else if(document.getElementById("accessibilityStar1").checked) {
        localStorage.setItem("totalHAPoints", Number(localStorage.getItem("totalHAPoints")) + 1);
        localStorage.setItem("totalHARatings", Number(localStorage.getItem("totalHARatings")) + 1);
    }

    // atmosphere
    if(document.getElementById("atmosphereStar5").checked) {
        localStorage.setItem("totalAtmospherePoints", Number(localStorage.getItem("totalAtmospherePoints")) + 5);
        localStorage.setItem("totalAtmosphereRatings", Number(localStorage.getItem("totalAtmosphereRatings")) + 1);
    }

    else if(document.getElementById("atmosphereStar4").checked) {
        localStorage.setItem("totalAtmospherePoints", Number(localStorage.getItem("totalAtmospherePoints")) + 4);
        localStorage.setItem("totalAtmosphereRatings", Number(localStorage.getItem("totalAtmosphereRatings")) + 1);
    }

    else if(document.getElementById("atmosphereStar3").checked) {
        localStorage.setItem("totalAtmospherePoints", Number(localStorage.getItem("totalAtmospherePoints")) + 3);
        localStorage.setItem("totalAtmosphereRatings", Number(localStorage.getItem("totalAtmosphereRatings")) + 1);
    }

    else if(document.getElementById("atmosphereStar2").checked) {
        localStorage.setItem("totalAtmospherePoints", Number(localStorage.getItem("totalAtmospherePoints")) + 2);
        localStorage.setItem("totalAtmosphereRatings", Number(localStorage.getItem("totalAtmosphereRatings")) + 1);
    }

    else if(document.getElementById("atmosphereStar1").checked) {
        localStorage.setItem("totalAtmospherePoints", Number(localStorage.getItem("totalAtmospherePoints")) + 1);
        localStorage.setItem("totalAtmosphereRatings", Number(localStorage.getItem("totalAtmosphereRatings")) + 1);
    }

    // support
    if(document.getElementById("supportStar5").checked) {
        localStorage.setItem("totalSupportPoints", Number(localStorage.getItem("totalSupportPoints")) + 5);
        localStorage.setItem("totalSupportRatings", Number(localStorage.getItem("totalSupportRatings")) + 1);
    }

    else if(document.getElementById("supportStar4").checked) {
        localStorage.setItem("totalSupportPoints", Number(localStorage.getItem("totalSupportPoints")) + 4);
        localStorage.setItem("totalSupportRatings", Number(localStorage.getItem("totalSupportRatings")) + 1);
    }

    else if(document.getElementById("supportStar3").checked) {
        localStorage.setItem("totalSupportPoints", Number(localStorage.getItem("totalSupportPoints")) + 3);
        localStorage.setItem("totalSupportRatings", Number(localStorage.getItem("totalSupportRatings")) + 1);
    }

    else if(document.getElementById("supportStar2").checked) {
        localStorage.setItem("totalSupportPoints", Number(localStorage.getItem("totalSupportPoints")) + 2);
        localStorage.setItem("totalSupportRatings", Number(localStorage.getItem("totalSupportRatings")) + 1);
    }

    else if(document.getElementById("supportStar1").checked) {
        localStorage.setItem("totalSupportPoints", Number(localStorage.getItem("totalSupportPoints")) + 1);
        localStorage.setItem("totalSupportRatings", Number(localStorage.getItem("totalSupportRatings")) + 1);
    }

    // covid
    if(document.getElementById("covidStar5").checked) {
        localStorage.setItem("totalCovidPoints", Number(localStorage.getItem("totalCovidPoints")) + 5);
        localStorage.setItem("totalCovidRatings", Number(localStorage.getItem("totalCovidRatings")) + 1);
    }

    else if(document.getElementById("covidStar4").checked) {
        localStorage.setItem("totalCovidPoints", Number(localStorage.getItem("totalCovidPoints")) + 4);
        localStorage.setItem("totalCovidRatings", Number(localStorage.getItem("totalCovidRatings")) + 1);
    }

    else if(document.getElementById("covidStar3").checked) {
        localStorage.setItem("totalCovidPoints", Number(localStorage.getItem("totalCovidPoints")) + 3);
        localStorage.setItem("totalCovidRatings", Number(localStorage.getItem("totalCovidRatings")) + 1);
    }

    else if(document.getElementById("covidStar2").checked) {
        localStorage.setItem("totalCovidPoints", Number(localStorage.getItem("totalCovidPoints")) + 2);
        localStorage.setItem("totalCovidRatings", Number(localStorage.getItem("totalCovidRatings")) + 1);
    }

    else if(document.getElementById("covidStar1").checked) {
        localStorage.setItem("totalCovidPoints", Number(localStorage.getItem("totalCovidPoints")) + 1);
        localStorage.setItem("totalCovidRatings", Number(localStorage.getItem("totalCovidRatings")) + 1);
    }

    // resetting all averages
    localStorage.setItem("haAverage", Number(localStorage.getItem("totalHAPoints"))/Number(localStorage.getItem("totalHARatings")));
    localStorage.setItem("atmosphereAverage", Number(localStorage.getItem("totalAtmospherePoints")/localStorage.getItem("totalAtmosphereRatings")));
    localStorage.setItem("supportAverage", Number(localStorage.getItem("totalSupportPoints")/localStorage.getItem("totalSupportRatings")));
    localStorage.setItem("covidAverage", Number(localStorage.getItem("totalCovidPoints")/localStorage.getItem("totalCovidRatings")));

    // returning to page 2
    window.location.href="pageUnion.html?genderNeutral=" + localStorage.getItem("genderNeutralPercent") + 
    "?vendingMachines=" + localStorage.getItem("vendingMachinesPercent") + 
    "?food=" + localStorage.getItem("foodPercent") + 
    "?standingDesks=" + localStorage.getItem("standingDesksPercent") + 
    "?printers=" + localStorage.getItem("printersPercent") + 
    "?copiers=" + localStorage.getItem("copiersPercent") + 
    "?chargers=" + localStorage.getItem("chargersPercent") + 
    "?oneCard=" + localStorage.getItem("oneCardPercent") +
    "?accessibility=" + localStorage.getItem("haAverage") +
    "?atmosphere=" + localStorage.getItem("atmosphereAverage") + 
    "?support=" + localStorage.getItem("supportAverage") +
    "?covid=" + localStorage.getItem("covidAverage");
}