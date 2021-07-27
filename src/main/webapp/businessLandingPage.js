/* create a page to display the information of a business.*/
const theId = localStorage.getItem('id');
// This function loads database info into a premade html page for individual business data
async function uniqueInfo() {
    // request the information that was logged to database
    // encapsulate information as json
    const request = await fetch("/show-form");
    const responseFromServer = await request.json();

    function findIndexOfId(response) {
        var i;
        for (i = 0; i < response.length; i++) {
            if (response[i].id == theId) {
                return i;
            }
        }
    }

    var idIndex = responseFromServer[findIndexOfId(responseFromServer)];
    const name = idIndex.name;
    const nameId = document.getElementById("name");
    nameId.innerText = name;

    const street = idIndex.street;
    const streetId = document.getElementById("street");
    streetId.innerText = street;

    const city = idIndex.city;
    const state = idIndex.state;
    const zip = idIndex.zip;
    const cityStateZip = city + ", " + state + " " + zip;
    const addressId = document.getElementById("city-state-zip");
    addressId.innerText = cityStateZip;

    const webId = document.getElementById("website");
    const websiteAdd = idIndex.website;
    webId.innerText = websiteAdd;
    // dynamic href
    webId.href = websiteAdd;

    const email = document.getElementById("email");
    const emailAdd = idIndex.email;
    email.innerText = emailAdd;
    email.href = "mailto:" + emailAdd;


    const tel = document.getElementById("tel");
    const telNum = idIndex.tel;
    tel.innerText = telNum;
    tel.href = "tel:" + telNum;

    // Business description
    const aboutId = document.getElementById("about-b");
    const about = idIndex.description;
    aboutId.innerText = about;
    // apprenticeship information
    const apprenticeshipId = document.getElementById("apprenticeship");
    const apprenticeship = idIndex.apprenticeship;
    apprenticeshipId.innerText = apprenticeship;

    // business weekly availability
    const sunFromId = document.getElementById("sun-from");
    const sunFrom = idIndex.sun1;
    sunFromId.innerText = sunFrom;

    const sunToId = document.getElementById("sun-to");
    const sunTo = idIndex.sun2;
    sunToId.innerText = sunTo;

    const monFromId = document.getElementById("mon-from");
    const monFrom = idIndex.mon1;
    monFromId.innerText = monFrom;

    const monToId = document.getElementById("mon-to");
    const monTo = idIndex.mon2;
    monToId.innerText = monTo;

    const tueFromId = document.getElementById("tue-from");
    const tueFrom = idIndex.tue1;
    tueFromId.innerText = tueFrom;

    const tueToId = document.getElementById("tue-to");
    const tueTo = idIndex.tue2;
    tueToId.innerText = tueTo;

    const wedFromId = document.getElementById("wed-from");
    const wedFrom = idIndex.wed1;
    wedFromId.innerText = wedFrom;

    const wedToId = document.getElementById("wed-to");
    const wedTo = idIndex.wed2;
    wedToId.innerText = wedTo;

    const thurFromId = document.getElementById("thur-from");
    const thurFrom = idIndex.thur1;
    thurFromId.innerText = thurFrom;

    const thurToId = document.getElementById("thur-to");
    const thurTo = idIndex.thur2;
    thurToId.innerText = thurTo;

    const friFromId = document.getElementById("fri-from");
    const friFrom = idIndex.fri1;
    friFromId.innerText = friFrom;

    const friToId = document.getElementById("fri-to");
    const friTo = idIndex.fri2;
    friToId.innerText = friTo;

    const satFromId = document.getElementById("sat-from");
    const satFrom = idIndex.sat1;
    satFromId.innerText = satFrom;

    const satToId = document.getElementById("sat-to");
    const satTo = idIndex.sat2;
    satToId.innerText = satTo;
}