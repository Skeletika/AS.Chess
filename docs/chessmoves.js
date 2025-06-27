
let chessboardPiece = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
    ];



class Piece {
    constructor(name, coord, color){
        this.name = name;
        this.x = coord[0];
        this.y = coord[1];
        this.color = color;
    }

}

// pour move : type de piece / case occuper par adversaire ou allié / reset de la case actuelle / 


    class Pawn extends Piece {
        constructor(name, coord, color, doubleStep){
            super(name, coord, color);
            this.doubleStep = doubleStep;
        }

        possibleMove(chessboard){
            const {coord, color, doubleStep} = this;
            let direction = (color === "white") ? 1 : -1 ;

            let possibleCaseTabTemp = [[this.x + direction, this.y],[this.x + direction, this.y + 1],[this.x + direction, this.y - 1]];
            if(doubleStep){possibleCaseTabTemp.push([this.x + (2 * direction), this.y])}; // ajoute la case double si le pion est sur sa case de départ

            let possibleCaseTab = possibleCaseTabTemp;
            let possible = true;
            console.log(possibleCaseTabTemp);

            possibleCaseTabTemp.forEach((element, index) => {
                if((element[0] >= 0 && element[0] <= 7) && (element[1] >= 0 && element[1] <= 7)){ // case en dehors de l'echequier
                    console.log(element[0] , this.x + direction,  direction);
                    for(let x = element[0] ; x == this.x + (2*direction); x += direction){
                        let possibleCase = chessboard[x][element[1]];
                        let id = convertCoordsToId([element[0],element[1]]);
                        console.log(id);
                    }
                    
                    // if (!possible){possibleCaseTab.splice(index, 1);}    // supprime l'element du tab à l'index, supprime 1 element uniquement.
                }
                else{
                    possibleCaseTab.splice(index, 1);
                }
            })
        possibleCaseTab.forEach(element => {        // ajout du css au case possible de mouvement
            let id = convertCoordsToId(element);
            let cssPointCases = document.getElementById(id);
            cssPointCases.classList.add("possible-case");
        });
    }
}

function clearPossibleMoves() {
    const previousMoves = document.querySelectorAll('.possible-case');
    previousMoves.forEach(el => el.classList.remove('possible-case'));
}

function possibleMove(id) {
    // Convertir l'id en coordonnées (par ex: id 1 → [0, 0]
    //supprime les anciens moves possibles
    clearPossibleMoves();


    const x = Math.floor((id - 1) / 8);
    const y = (id - 1) % 8;

    const piece = chessboardPiece[x][y];

    // Vérifier qu'il y a une pièce
    if (piece) {
        piece.possibleMove(chessboardPiece);
    } else {
        console.log("Aucune pièce sur cette case");
    }
}

//    // Diagonale droite
// if (this.y + 1 <= 7) {
//     if (x1 >= 0 && x1 <= 7) { // Vérifie que x1 est aussi dans les limites
//         let target = chessboard[x1][this.y + 1];
//         if (target && target.color !== this.color) {
//             possibleMoves.push([x1, this.y + 1]);
//         }
//     }
// }

// // Diagonale gauche
// if (this.y - 1 >= 0) {
//     if (x1 >= 0 && x1 <= 7) {
//         let target = chessboard[x1][this.y - 1];
//         if (target && target.color !== this.color) {
//             possibleMoves.push([x1, this.y - 1]);
//         }
//     }
// }

class Knight extends Piece {
    constructor(name, coord, color){
        super(name, coord, color);
    }
}

class Bishop extends Piece {
    constructor(name, coord, color){
        super(name, coord, color);
    }
}

class Rook extends Piece {
    constructor(name, coord, color){
        super(name, coord, color);
    }
}

class Queen extends Piece {
    constructor(name, coord, color){
        super(name, coord, color);
    }
}

class King extends Piece {
    constructor(name, coord, color){
        super(name, coord, color);
    }
}


// Array(2) 0 : (2) [2, 0] 1 : (2) [3, 0]


// function possibleMoveCase() {
//     let possibleCaseTab = myPawn.possibleMoves(chessboardPiece);
//     possibleCaseTab.forEach(element => {
//         let idCase = convertCoordsToId(element);
//         possibleCase = document.getElementById(idCase);
//         possibleCase.classList.add("possible-case");
//         console.log(idCase);
//     });
// }

// ajouterElementAvant()



//Placement des pions dans la matrice


function convertCoordsToId(coords){
    let idCase = (coords[0]*8) + (coords[1]) + 1;
    return idCase;
}

let pawnWhitePosition = [
  [[1, 0], "PA2"],
  [[1, 1], "PB2"],
  [[1, 2], "PC2"],
  [[1, 3], "PD2"],
  [[1, 4], "PE2"],
  [[1, 5], "PF2"],
  [[1, 6], "PG2"],
  [[1, 7], "PH2"]
];

let pawnBlackPosition = [
  [[6, 0], "PA7"],
  [[6, 1], "PB7"],
  [[6, 2], "PC7"],
  [[6, 3], "PD7"],
  [[6, 4], "PE7"],
  [[6, 5], "PF7"],
  [[6, 6], "PG7"],
  [[6, 7], "PH7"]
];

//Placement des cavaliers dans la matrice

let knightWhitePosition = [
  [[0, 1], "NB1"],
  [[0, 6], "NG1"]
];

let knightBlackPosition = [
  [[7, 1], "NB7"],
  [[7, 6], "NG7"]
];

//Placement des fou dans la matrice

let bishopWhitePosition = [

  [[0, 2], "BC2"],
  [[0, 5], "BF2"]
];

let bishopBlackPosition = [
  [[7, 2], "BC7"],
  [[7, 5], "BF7"]
];

//Placement des tours dans la matrice

let rookWhitePosition = [
  [[0, 0], "RA2"],
  [[0, 7], "RH2"]
];

let rookBlackPosition = [
  [[7, 0], "RA7"],
  [[7, 7], "RH7"]
];

//Placement des dames dans la matrice

let queenWhitePosition = [
  [[0, 3], "QD2"]
];

let queenBlackPosition = [
  [[7, 3], "QD7"],
];

//Placement des roi dans la matrice

let kingWhitePosition = [
  [[0, 4], "KE2"]
];

let kingBlackPosition = [
  [[7, 4], "KE7"]
];

pawnWhitePosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Pawn(coord[1], coord[0], "white", true);
});

pawnBlackPosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Pawn(coord[1], coord[0], "black", true);
});



knightWhitePosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Knight(coord[1], coord[0], "white");
});

knightBlackPosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Knight(coord[1], coord[0], "black");
});




bishopWhitePosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Bishop(coord[1], coord[0], "white");
});

bishopBlackPosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Bishop(coord[1], coord[0], "black");
});



rookWhitePosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Rook(coord[1], coord[0], "white");
});

rookBlackPosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Rook(coord[1], coord[0], "black");
});


queenWhitePosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Queen(coord[1], coord[0], "white");
});

queenBlackPosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new Queen(coord[1], coord[0], "black");
});



kingWhitePosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new King(coord[1], coord[0], "white");
});

kingBlackPosition.forEach(coord => {
    chessboardPiece[coord[0][0]][coord[0][1]] = new King(coord[1], coord[0], "black");
});

console.log(chessboardPiece);

// let pion = chessboardPiece[1][0];

// pion.possibleMove(chessboardPiece);







function chesstimer(color) {
    let counterValue = (color == 'white') ? document.getElementById('chesstimerwhite') :  document.getElementById('chesstimerblack');
    counter = counterValue.dataset.value; 
    timer = setInterval(() => {
    if (counter <= 0 ) {
        clearInterval(timer);
    }
    let minutes = Math.floor(counter / 60);
    let secondes = Math.floor(counter % 60);
    counter--;
    counterValue.dataset.value = counter;
    let minutesText = (color == "white") ? document.querySelector('.white-minutes #minutes') : document.querySelector('.black-minutes #minutes');
    let secondesText = (color == "white") ? document.querySelector('.white-secondes #secondes') : document.querySelector('.black-secondes #secondes');
    
    minutesText.textContent = minutes;
    secondesText.textContent = secondes;
    console.log(`${minutes}m : ${secondes}s`);
    }, 1000);
}
function Stoptimer() {
    clearInterval(timer);
}
// document.getElementById("start-button").addEventListener("click", chesstimer);
// document.getElementById("stop-button").addEventListener("click", Stoptimer);

