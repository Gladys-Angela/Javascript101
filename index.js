countincrement
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    
}
// savebutton
 function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0

    
 }




