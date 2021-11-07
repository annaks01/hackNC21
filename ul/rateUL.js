localStorage.setItem("initBeenCalled", false);

function initRateUL() {
    if(!localStorage.getItem("initBeenCalled")) {
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

        // changing init var
        localStorage.setItem("initBeenCalled", true);
    }  
    
    console.log("on load of page 3: " + localStorage.getItem("genderNeutralPercent"));
}

function initPage2() {
    console.log("init page 2: " + localStorage.getItem("genderNeutralPercent"));
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

    // returning to page 2
    console.log(localStorage.getItem("copiersPercent"));
    window.location.href="pageUL.html?genderNeutral=" + localStorage.getItem("genderNeutralPercent") + 
    "?vendingMachines=" + localStorage.getItem("vendingMachinesPercent") + 
    "?food=" + localStorage.getItem("foodPercent") + 
    "?standingDesks=" + localStorage.getItem("standingDesksPercent") + 
    "?printers=" + localStorage.getItem("printersPercent") + 
    "?copiers=" + localStorage.getItem("copiersPercent") + 
    "?chargers=" + localStorage.getItem("chargersPercent") + 
    "?oneCard=" + localStorage.getItem("oneCardPercent");
}