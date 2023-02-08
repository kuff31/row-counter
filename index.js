let count = 0;
let rows = document.getElementById("count");



function add() {
    rows.innerText = count += 1
}

function reset() {
    count = 0;
    rows.innerText = 0;
    
}