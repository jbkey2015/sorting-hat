const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}

const houses = ["Griffindor", "Hufflepuff", "Ravenclaw", "Slytheran"];

const formMaker = () => {
    const formString = `
    <div class = "container card">
        <form>
            <div class="form-group">
                <h3>Enter First Year's Name</h3>
                <label for="exampleInputEmail1">Student:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter Name">
            </div>
            <button type="button" class="btn btn-primary">Sort</button>
        </form>
    </div>
    `;
    printToDom(formString, "form")
    document.getElementById("tron").className = "d-none";
};
document.getElementById("startSorting").addEventListener('click', () => {
    formMaker();
})