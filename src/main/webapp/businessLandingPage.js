/* create a page to display the information of a business.
option 1 is to use java to create the page
option 2 is to create the page in an html doc and use script to load all dynamic information
*/

const theId = localStorage.getItem('id');
console.log(theId)
// option 2 (in use)
// This function loads database info into a premade html page for individual business data
async function uniqueInfo(){
    // hardcoded for test purposes
    // const request = {website:"https://www.google.com", street:"Street address", city:"Brooklyn", state:"NY", zipcode:"11437", email:"hello@google.com", tel:"8008812315", description:"About business and all other necessary information", apprenticeship:"Apprenticeship information displayed in this box"}


    // request the information that was logged to database
    // encapsulate information as json

    const request = await fetch("/show-form");
    const responseFromServer =  await request.json();
    console.log(responseFromServer[0])

function findIndexOfId(response){
    var i;
    for (i = 0; i < response.length; i++){
        if(response[i].id==theId){
            console.log("I found the id index " + i)
            return i;
        }
    }
    
}    
    
var idIndex = responseFromServer[findIndexOfId(responseFromServer)];
console.log("the entire block = " + idIndex.name)

    // get placeholder tag that information will be displayed in
    // use the information for dynamic data
    const name = idIndex.name;
    const nameId = document.getElementById("name");
    nameId.innerText = name;

    const street = idIndex.street;
    const streetId = document.getElementById("street");
    streetId.innerText = street;

    const city = idIndex.city;
    const state = idIndex.state;
    const zip = idIndex.zipcode;
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
    tel.href = "tel:"+ telNum;
    // Business description
    // const aboutId = document.getElementById("about-b");
    // const about = idIndex.description;
    // aboutId.innerText = about;

    // Availabilty needs much work. waiting on sample POST to complete.
    // const availabiltyId = document.getElementById("working-days");

}
// _______________________________END SCRIPT FOR BUSINESS LANDING PAGE (businessLandingPage.html)________________________________//

// function getId(){
//     //grab the Id that was clicked from BusinessList.html
//     const requestId = await fetch("/BusinessList.html")
//     const responsefromB = requestId.json();
//     console.log(responsefromB)
// }
// function fetchIdData(){
//     //Grab the index of the block that has the id that was clicked

// }
