const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
}

const houses = ["Griffindor", "Hufflepuff", "Ravenclaw", "Slytheran"];

const expel = [];

const formMaker = () => {
    const formString = `
    <div class = "container card">
        <form>
            <div class="form-group">
                <h3>Enter First Year's Name</h3>
                <label for="exampleInputEmail1">Student:</label>
                <input type="email" class="form-control" id="formInput" aria-describedby="emailHelp"
                    placeholder="Enter Name">
            </div>
            <button type="button" class="btn btn-primary" id="inputButton">Sort</button>
        </form>
    </div>
    `;
    printToDom(formString, "form")
    document.getElementById("tron").className = "d-none";
};
document.getElementById("startSorting").addEventListener('click', () => {
    formMaker();
})

const cardMaker = () => {
    const randomHouse = houses[Math.floor(Math.random() *houses.length)];
    let cardInput = document.getElementById("formInput").value;
    let domString =`
    <div class="container card">
        <div class="row">
        <div class="col-sm-6">
        <div class="card">
        <div class="card-body">
            <p class="card-title">${cardInput}</p>
            <p class="card-text">${randomHouse}</p>
            <button type="button" class="btn btn-primary expel">Expel</button>
        </div>
        </div>
        </div>
        </div>
    </div>
    `;
    printToDom(domString, "card"); 
    removeCard()
}


//document.getElementById("inputButton").addEventListener("click", cardMaker);

document.getElementById("form").addEventListener("click", (event) => {
    if (event.target.id === "inputButton"){
        cardMaker()
    } 
})

const removeCard = () => {
    const cardsToRemove = document.getElementsByClassName('expel');
    for(let i = 0; i < cardsToRemove.length; i++) {
        const deleteCard = cardsToRemove[i];
        deleteCard.addEventListener('click', (e) =>{
            const btnClicked = e.target;
            const cardsToRemove = btnClicked.parentNode.parentNode;
            cardsToRemove.remove();
        })
    }
};

//expel Student Event Listener
const expelStudent = () => {
    $(".expel").on('click', removeCard);
}
expelStudent();