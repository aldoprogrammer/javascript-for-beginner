// nested loops

let symbol = window.prompt("Enter simmbol here");
let rows    = window.prompt("Enter number of rows");
let columns = window.prompt("enter number of columns");

for (let i =1; i <= rows; i+=1){
    for(let j=1; j<=columns; j++){
        document.getElementById("nested").innerHTML += symbol;
    }
    document.getElementById('nested').innerHTML += "<br/>"
}