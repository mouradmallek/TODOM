let inputElement = document.getElementById("ToDoInput")
inputElement.focus()


document.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        addToDo()
    }
});

let id = 0

function addToDo() {
    let inputElement = document.getElementById("ToDoInput")
    let text = inputElement.value.trim()
    if (!text) return

    // new div
    let newDiv = document.createElement("div")
    newDiv.id = "Div-" + id
    newDiv.classList.add("newDivClass")

    //new span
    let newSpan = document.createElement("span");
    newSpan.id = "Span-" + id
    newSpan.classList.add("newSpan")
    newDiv.classList.add("newDivClass")
    newSpan.innerHTML = text;

    //new square icon
    let newSquare = document.createElement("i");
    newSquare.id = "Square-" + id
    newSquare.classList.add("fas", "fa-square")
    newSquare.addEventListener("click", function () {
        check(newSquare.id)
    })

    //new trush icon
    let newTrush = document.createElement("i");
    newTrush.id = "trush-" + id
    newTrush.classList.add("fas", "fa-trash")
    newTrush.addEventListener("click", function () {
        deleteDiv(newDiv.id)
    })

    newDiv.appendChild(newSpan)
    newDiv.appendChild(newSquare)
    newDiv.appendChild(newTrush)

    let parentDiv = document.getElementById("toDoList")
    parentDiv.appendChild(newDiv);
    id++;

    //clear and focus input
    inputElement.value = ""
    inputElement.focus()
}

function check(idParam) {
    let square = document.getElementById(idParam);
    square.classList.toggle("fa-check-square")
    square.classList.toggle("fa-square")
    let num = idParam.split('-')[1]
    let span = document.getElementById("Span-" + num);
    span.classList.toggle("span-line-through");
}

function deleteDiv(idParam) {
    var result = confirm("Are you sure that you want to delete this todo?");
    console.log(idParam);
    if (result) {
        document.getElementById(idParam).remove()
    }
}