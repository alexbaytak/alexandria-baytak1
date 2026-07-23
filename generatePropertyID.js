let propertyCounter = 1;


function generatePropertyID(type) {

    let code = "GEN";


    switch (type) {

        case "شقة":
            code = "APT";
            break;

        case "فيلا":
            code = "VIL";
            break;

        case "أرض":
            code = "LND";
            break;

        case "محل":
            code = "SHP";
            break;

        case "مكتب":
            code = "OFF";
            break;

        case "شاليه":
            code = "CHL";
            break;

        default:
            code = "GEN";

    }


    const number = String(propertyCounter++)
        .padStart(6, "0");


    return `ABR-${code}-${number}`;

}


module.exports = generatePropertyID;