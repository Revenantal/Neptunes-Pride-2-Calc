// Developed by Revenantal
// Sept., 11, 2014
// Based on the game Neptunes Pride 2


// 3 hours per lightyear

function ScanRangeCalc() {
    var intScanLevel = $("#txtScanLevel").val();
    var intScanRangeLY = 0;

    //Initialization
    $("#lblScanLevel").html("");
    $("#txtScanRangeLY").val("");
    $("#txtScanLevel").removeClass("error");

    //Validation
    if (isNaN(parseInt(intScanLevel)) != true) {
        intScanLevel = parseInt(intScanLevel);
        intScanRangeLY = intScanLevel + 2;
        $("#txtScanRangeLY").val(intScanRangeLY + " LY");
    } else {
        //Error report
        $("#lblScanLevel").html("Must be an Integer. Must be above 0.");
        $("#txtScanLevel").addClass("error");

    }

}
function ScanRangeClear() {
    $("#txtScanLevel").val("");
    $("#txtScanRangeLY").val("");
    $("#lblScanLevel").html("");
    $("#txtScanLevel").removeClass("error");
}

function HyperspaceRangeCalc() {
    var intHyperspaceRangeLevel = $("#txtHyperspaceRangeLevel").val();
    var intHyperspaceRangeLY = 0;

    //Initialization
    $("#lblHyperspaceRangeLevel").html("");
    $("#txtHyperspaceRangeLY").val("");
    $("#txtHyperspaceRangeLevel").removeClass("error");

    //Validation
    if (isNaN(parseInt(intHyperspaceRangeLevel)) != true) {
        intHyperspaceRangeLevel = parseInt(intHyperspaceRangeLevel);
        intHyperspaceRangeLY = intHyperspaceRangeLevel + 3;
        $("#txtHyperspaceRangeLY").val(intHyperspaceRangeLY + " LY");
    } else {
        //Error report
        $("#lblHyperspaceRangeLevel").html("Must be an Integer. Must be above 0.");
        $("#txtHyperspaceRangeLevel").addClass("error");

    }

}
function HyperspaceRangeClear() {
    $("#txtHyperspaceRangeLevel").val("");
    $("#txtHyperspaceRangeLY").val("");
    $("#lblHyperspaceRangeLevel").html("");
    $("#txtHyperspaceRangeLevel").removeClass("error");
}

function TerraformingCalc() {
    var intTerraformingLevel = $("#txtTerraformingLevel").val();
    var intNaturalResources = $("#txtNaturalResources").val();
    var intTerraformedResources = 0;
    var error = false;

    //Initialization
    $("#lblTerraformingLevel").html("");
    $("#txtTerraformingLevel").removeClass("error");
    $("#lblNaturalResources").html("");
    $("#txtNaturalResources").removeClass("error");
    $("#txtTerraformedResources").val("");


    //Validation
    if (isNaN(parseInt(intTerraformingLevel)) != true) {
        intTerraformingLevel = parseInt(intTerraformingLevel);
    } else {
        //Error report
        $("#lblTerraformingLevel").html("Must be an Integer. Must be above 0.");
        $("#txtTerraformingLevel").addClass("error");
        error = true;
    }

    if (isNaN(parseInt(intNaturalResources)) != true) {
        intNaturalResources = parseInt(intNaturalResources);
    } else {
        //Error report
        $("#lblNaturalResources").html("Must be an Integer. Must be above 0.");
        $("#txtNaturalResources").addClass("error");
        error = true;
    }

    if (error == false) {
        intTerraformedResources = (intTerraformingLevel * 5) + intNaturalResources;
        $("#txtTerraformedResources").val(intTerraformedResources);
    }

}
function TerraformingClear() {
    $("#txtTerraformingLevel").val("");
    $("#lblTerraformingLevel").html("");
    $("#txtNaturalResources").val("");
    $("#lblNaturalResources").html("");
    $("#txtTerraformedResources").removeClass("error");
    $("#txtNaturalResources").removeClass("error");
}

function ExperimentationCalc() {
    var intExperimentationLevel = $("#txtExperimentationLevel").val();
    var intResearchBonus = 0;

    //Initialization
    $("#lblExperimentationLevel").html("");
    $("#txtExperimentationLevel").removeClass("error");
    $("#txtResearchBonus").val("");

    //Validation
    if (isNaN(parseInt(intExperimentationLevel)) != true) {
        intExperimentationLevel = parseInt(intExperimentationLevel);
        intResearchBonus = intExperimentationLevel * 72;
        $("#txtResearchBonus").val(intResearchBonus);
    } else {
        //Error report
        $("#txtExperimentationLevel").html("Must be an Integer. Must be above 0.");
        $("#txtExperimentationLevel").addClass("error");

    }

}
function HyperspaceRangeClear() {
    $("#txtResearchBonus").val("");
    $("#txtExperimentationLevel").val("");
    $("#txtExperimentationLevel").html("");
    $("#txtExperimentationLevel").removeClass("error");
}

function BankingCalc() {
    var intBankingLevel = $("#txtBankingLevel").val();
    var intIncomeBonus = 0;

    //Initialization
    $("#lblBankingLevel").html("");
    $("#txtBankingLevel").removeClass("error");
    $("#txtIncomeBonus").val("");

    //Validation
    if (isNaN(parseInt(intBankingLevel)) != true) {
        intBankingLevel = parseInt(intBankingLevel);
        intIncomeBonus = intBankingLevel * 75;
        $("#txtIncomeBonus").val(intIncomeBonus);
    } else {
        //Error report
        $("#txtBankingLevel").html("Must be an Integer. Must be above 0.");
        $("#txtBankingLevel").addClass("error");

    }

}
function BankingClear() {
    $("#txtIncomeBonus").val("");
    $("#txtBankingLevel").val("");
    $("#txtBankingLevel").html("");
    $("#txtBankingLevel").removeClass("error");
}

function ManufacturingCalc() {
    var intManufacturingLevel = $("#txtManufacturingLevel").val();
    var intStarIndustry = $("#txtStarIndustry").val();
    var intShipsPerHour = 0;
    var error = false;

    //Initialization
    $("#lblManufacturingLevel").html("");
    $("#txtManufacturingLevel").removeClass("error");
    $("#lblStarIndustry").html("");
    $("#txtStarIndustry").removeClass("error");
    $("#txtShipsPerHour").val("");


    //Validation
    if (isNaN(parseInt(intManufacturingLevel)) != true) {
        intManufacturingLevel = parseInt(intManufacturingLevel);
    } else {
        //Error report
        $("#lblManufacturingLevel").html("Must be an Integer. Must be above 0.");
        $("#txtManufacturingLevel").addClass("error");
        error = true;
    }

    if (isNaN(parseInt(intStarIndustry)) != true) {
        intStarIndustry = parseInt(intStarIndustry);
    } else {
        //Error report
        $("#lblStarIndustry").html("Must be an Integer. Must be above 0.");
        $("#txtStarIndustry").addClass("error");
        error = true;
    }

    if (error == false) {
        intShipsPerHour = (intStarIndustry * (intManufacturingLevel + 5)) / 24;
        intShipsPerHour = intShipsPerHour.toFixed(2);
        $("#txtShipsPerHour").val(intShipsPerHour);
    }

}
function ManufacturingClear() {
    $("#txtManufacturingLevel").val("");
    $("#lblManufacturingLevel").html("");
    $("#txtStarIndustry").val("");
    $("#lblStarIndustry").html("");
    $("#txtManufacturingLevel").removeClass("error");
    $("#txtStarIndustry").removeClass("error");
    $("#txtShipsPerHour").val("");

}