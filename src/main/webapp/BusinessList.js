/*Search() {
    //...
}
*/
// fetch datastore, update dom
function fetchBusinessData() {
    fetch("/show-form").then(response => response.json()).then((businesses) => {
        const listTable = document.getElementById("business-list");
        businesses.forEach((business) => {
            listTable.appendChild(createElements(business));
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
    return nameContainer;
}