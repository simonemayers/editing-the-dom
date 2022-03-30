// Update the 'Apples' item to say 'Granny Smith Apples'
// Remove 'Oat Milk' from the list
// Add an item 'Kombucha'
// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
// Add the class 'important' to the almonds item.
let testArray = ['protein bars', 'almonds', 'peanut butter']; 

function replaceItem(oldLi, newLi){
    let list = Array.from(document.querySelector("#list").children)
    return list.map((l) => {if(l.innerHTML === oldLi){ l.innerHTML = newLi}})
}

function removeItem(listItem){
    let list = Array.from(document.querySelector("#list").children)
    return list.find(item => item.innerHTML === listItem).remove()
}

function addItem(listItem){
    let addedItem = document.createElement("li")
    addedItem.innerHTML = listItem;
    return document.querySelector("#list").appendChild(addedItem)
}

function removeAll(){
    return Array.from(document.querySelector("#list").children).map(i => i.remove())
}

function addArray(arr){
    for(i = 0; i < arr.length; i ++){ 
        addItem(arr[i])}
}

function star(listItem){
    let list = Array.from(document.querySelector("#list").children)
    list.find(m => m.innerHTML === listItem).className = "important"
}


replaceItem("Apples", "Granny Smith Apples")
removeItem("Oat Milk")
addItem("Kombucha")
removeAll()
addArray(testArray)
star("almonds")
