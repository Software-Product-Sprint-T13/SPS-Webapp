/*Search() {
    //...
}
*/
// fetch datastore, update dom
function fetchBusinessData() {
    fetch("/show-form").then(response => response.json()).then((businesses) => {
        const listTable = document.getElementById("business-list");
        // console.log(businesses)
        // console.log(businesses[0].name)

        businesses.forEach((business) => {
            listTable.appendChild(createElements(business));
            console.log(business.id)
        })
    });
}

function createElements(business) {
    const nameContainer = document.createElement("li");
    const nameElement = document.createElement('a');
    nameElement.href = "businessLandingPage.html";
    const id = business.id;
    nameElement.id = id;
    nameContainer.appendChild(nameElement);
    nameElement.innerText = business.name;
    return nameContainer;
}

// let link = document.querySelector('.selected');
//         if (link) {
//             let id = link.getAttribute('id');
//             console.log(id);
//         }

function getId(id) {
    alert(id.getAttribute("id"));
}