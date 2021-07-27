/*Search() {
    //...
}
*/
// fetch datastore, update dom
function fetchBusinessData() {
    fetch("/show-form").then(response => response.json()).then((businesses) => {
        const listTable = document.getElementById("business-list");
<<<<<<< HEAD
        const businessInfo = document.getElementById("businessInfo")
        // console.log(businesses)
        // console.log(businesses[0].name)

        businesses.forEach((business) => {
            listTable.appendChild(createElements(business));
            //businessInfo.appendChild(createInfoElements(business))
            //console.log(business.id)
=======
        businesses.forEach((business) => {
            listTable.appendChild(createElements(business));
>>>>>>> 15861cfba3396802c8e26d58dbc85772385a9314
        })
    });
}

function createElements(business) {
    const nameContainer = document.createElement("li");
    const nameElement = document.createElement('a');
    nameElement.href = "businessLandingPage.html";
    nameElement.className = "business";
    nameElement.addEventListener("click", function (){
        // alert(this.id);
        var myId = this.id;
        localStorage.setItem('id', myId);
    });
    // const id = business.id;
    nameElement.id = business.id;
    nameContainer.appendChild(nameElement);
    nameElement.innerText = business.name;

    const businessInfo =  document.createElement("p");
    const text = document.createTextNode("This is the location for a business description ");
    businessInfo.appendChild(text);
    nameContainer.appendChild(businessInfo);


 
    return nameContainer;
}
/*
function createInfoElements(business) {
    const nameContainer = document.createElement('p');
    const text = document.createTextNode("Tutorix is the best e-learning platform");
    nameContainer.appendChild(text);
    return nameContainer;

    nameContainer.appendChild(nameElement);

    const nameElement = document.createElement("p");
    nameElement.innerText = "Hi";
    return nameContainer;
<<<<<<< HEAD

}
*/


// let link = document.querySelector('.selected');
//         if (link) {
//             let id = link.getAttribute('id');
//             console.log(id);
//         }

function getId(id) {
    alert(id.getAttribute("id"));
=======
>>>>>>> 15861cfba3396802c8e26d58dbc85772385a9314
}