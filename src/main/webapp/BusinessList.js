/*Search() {
    //...
}
*/
// fetch datastore, update dom
function fetchBusinessData(){
    fetch("/show-form").then(response => response.json()).then((businesses)=>{
        const listTable = document.getElementById("business-list");
        console.log(businesses)
        console.log(businesses[0].name)

        businesses.forEach((business) => {
            listTable.appendChild(createElements(business))
    })
    });
}

function createElements(business){
    const nameContainer = document.createElement("li");
    const nameElement = document.createElement('a');
    nameContainer.appendChild(nameElement)
    nameElement.innerText = business.name;
    return nameContainer;
}