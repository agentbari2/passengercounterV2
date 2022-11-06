let saveEl = document.getElementById("save-el")
let pastPax = localStorage.getItem("pastPax")
if( pastPax !== null) {
    saveEl.textContent = localStorage.getItem("pastPax")
} else {
    saveEl.textContent = ""
}


let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem( "pastPax", saveEl.textContent )
    countEl.textContent = 0
    count = 0
}

