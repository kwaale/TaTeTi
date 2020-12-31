
let turno = "";
function start(){
    for(let i = 0; i < 9; i++){
        document.getElementById(`bt${i}`).addEventListener("click", cambia)
    }
    
}
//Solo para iterar entre "X" y "O" y controlar que no se repita.
function cambia(e){
    // console.log("Entra en cambio",e.target.id)
    const btnId = e.target.id;
    const content = document.getElementById(btnId);   
    //console.log("Entra en cambio",content.value)
    if (content.value !== "X" && content.value !== "O") {
        turno === "X" ? turno ="O":turno = "X";
        content.value = turno
        ganardor();    
    }
}
const ganardor = ()=>{
    const arr = [];
    for(let i = 0; i < 9; i++){
        arr.push(document.getElementById(`bt${i}`).value);
    }
    console.log(arr, arr[3],arr[4],arr[5])
    //Horizontales
    if(arr[0] === arr[1] && arr[1] === arr[2])return console.log("Ganador",arr[0])
    if(arr[3] === arr[4] && arr[4] === arr[5])return console.log("Ganador",arr[3])
    if(arr[6] === arr[7] && arr[7] === arr[8])return console.log("Ganador",arr[6])
    //Verticales
    if(arr[0] === arr[3] && arr[3] === arr[6])return console.log("Ganador",arr[0])
    if(arr[1] === arr[4] && arr[4] === arr[7])return console.log("Ganador",arr[1])
    if(arr[2] === arr[5] && arr[5] === arr[8])return console.log("Ganador",arr[2])
    //Diagonales
    if(arr[0] === arr[4] && arr[4] === arr[8])return console.log("Ganador",arr[0])
    if(arr[2] === arr[4] && arr[4] === arr[6])return console.log("Ganador",arr[2])
}

window.onload = start;