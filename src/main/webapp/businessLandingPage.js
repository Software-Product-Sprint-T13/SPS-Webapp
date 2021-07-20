/* create a page to display the information of a business.
option 1 is to use java to create the page
option 2 is to create the page in an html doc and use script to load all dynamic information
*/


// option 2 (in use)
// This function loads database info into a premade html page for individual business data
function uniqueInfo(){
    // hardcoded for test purposes
    const request = {website:"https://www.google.com", street:"Street address", city:"Brooklyn", state:"NY", zipcode:"11437", email:"hello@google.com", tel:"8008812315", description:"About business and all other necessary information", apprenticeship:"Apprenticeship information displayed in this box"}


    // request the information that was logged to database
    // encapsulate information as json

    // const request = await fetch("/url");
    const responseFromServer = request;
    console.log(responseFromServer);

    // get placeholder tag that information will be displayed in
    // use the information for dynamic data
    const street = responseFromServer.street;
    const streetId = document.getElementById("street");
    streetId.innerText = street;

    const city = responseFromServer.city;
    const state = responseFromServer.state;
    const zip = responseFromServer.zipcode;
    const cityStateZip = city + ", " + state + " " + zip;
    const addressId = document.getElementById("city-state-zip");
    addressId.innerText = cityStateZip;

    const webId = document.getElementById("website");
    const websiteAdd = responseFromServer.website;
    webId.innerText = websiteAdd;
    // dynamic href
    webId.href = websiteAdd;

    const email = document.getElementById("email");
    const emailAdd = responseFromServer.email;
    email.innerText = emailAdd;
    email.href = "mailto:" + emailAdd;


    const tel = document.getElementById("tel");
    const telNum = responseFromServer.tel;
    tel.innerText = telNum;
    tel.href = "tel:"+ telNum;
    // Business description
    const aboutId = document.getElementById("about-b");
    const about = responseFromServer.description;
    aboutId.innerText = about;

    // Availabilty needs much work. waiting on sample POST to complete.
    const availabiltyId = document.getElementById("working-days");


}
// _______________________________END SCRIPT FOR BUSINESS LANDING PAGE (businessLandingPage.html)________________________________//