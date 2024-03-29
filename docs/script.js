let turno;
let arr;

function start() {
    turno = "";
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < 9; i++) {
        document.getElementById(`bt${i}`).addEventListener("click", cambia);
    }
    document.getElementById('play').addEventListener("click", () => window.location.reload());
}

//Solo para iterar entre "X" y "O" y controlar que no se repita.
function cambia(e) {
    //Si hubo ganador retorna para que no se pueda jugar mas.
    if (document.getElementById('ganador').firstChild.data !== "A Jugar") return;
    const btnId = e.target.id;
    const content = document.getElementById(btnId);
    if (content.value !== "X" && content.value !== "O") {
        turno === "X" ? turno = "O" : turno = "X";
        content.value = turno;
        ganardor(btnId);
    }
}
//Creando elemento ganador
const elementoWin = (a) => {
    const jugadorX = document.getElementById('jugadorX').value;
    const jugadorO = document.getElementById('jugadorO').value;
    //const ganador = document.createElement('h1')
    //Devuelve quien gana si esta vacio el input
    if (jugadorO === "" || jugadorX === "") {
        // document.getElementById('ganador').innerHTML = `Gano la ${a}`;
        confirm(`Gano la ${a}`);
        window.location.reload();
        //Devuelve quien gana con el valor del input
    } else {
        a == 'X' ?
            (alert(`Gana ${jugadorX}`),
                window.location.reload())
            :
            (alert(`Gana ${jugadorO}`),
                window.location.reload())
    }
}
//Evalua cuando hay linea de tres iguales
const ganardor = (id) => {
    const num = document.getElementById(id).id.slice(2);//bt1
    arr[num] = (document.getElementById(id).value);
    //Horizontales
    if (arr[0] === arr[1] && arr[1] === arr[2]) return elementoWin(arr[0]);
    if (arr[3] === arr[4] && arr[4] === arr[5]) return elementoWin(arr[3]);
    if (arr[6] === arr[7] && arr[7] === arr[8]) return elementoWin(arr[6]);
    //Verticales
    if (arr[0] === arr[3] && arr[3] === arr[6]) return elementoWin(arr[0]);
    if (arr[1] === arr[4] && arr[4] === arr[7]) return elementoWin(arr[1]);
    if (arr[2] === arr[5] && arr[5] === arr[8]) return elementoWin(arr[2]);
    //Diagonales
    if (arr[0] === arr[4] && arr[4] === arr[8]) return elementoWin(arr[0]);
    if (arr[2] === arr[4] && arr[4] === arr[6]) return elementoWin(arr[2]);
}

window.onload = start;
