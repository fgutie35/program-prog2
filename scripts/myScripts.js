const newName = document.getElementById("firstName");
const newNum = document.getElementById("phoneNum");
const addButton = document.getElementById("contactBtn");
const addedList = document.getElementById("addedNames");

addButton.addEventListener("click", addItemFunc);
function addItemFunc(){
    if(newName.value != "") {
        const addItem = document.createElement("li")
        addItem.innerHTML = newName.value
        addedList.appendChild(addItem)

    }
    else {
        alert("Please type in a name onto the First Name field")
    }

}
