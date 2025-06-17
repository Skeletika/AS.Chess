const CHESSBOARD = document.getElementById('chessboard'); // Récupération de l'échéquier html
let chessboard_grid = Array.from(CHESSBOARD.children); // Transformation des cases répertoriées dans un tableau


let chessboardColor = [[0,1,0,1,0,1,0,1],        // Matrice de l'échéquier, couleur, états, et position des cases.
                [1,0,1,0,1,0,1,0],
                [0,1,0,1,0,1,0,1],
                [1,0,1,0,1,0,1,0],
                [0,1,0,1,0,1,0,1],
                [1,0,1,0,1,0,1,0],
                [0,1,0,1,0,1,0,1],
                [1,0,1,0,1,0,1,0]
                ]

function ChessColor(chessboard){        // Fonction pour l'affichage des couleurs des cases
    let idSpan = 0;
    chessboard.forEach(element => {
        element.forEach(square => {
        squareElement = chessboard_grid[idSpan];
        if(square == 1){
            squareElement.classList.add('black');
        }
        else{
            squareElement.classList.add('white');
        }
        idSpan++;
        });
    });
}

ChessColor(chessboardColor);

// Initiation des pièces 

function initPawn(){

    placementWhite = [9, 10, 11, 12, 13, 14, 15, 16];
    placementWhite.forEach(id => {
        let pawnWhiteImage = document.createElement('img');
        pawnWhiteImage.src = "pieces/Blanc/Pièces as.chess_Pion-blanc.svg";
        let box = document.getElementById(id);
        box.appendChild(pawnWhiteImage);
    })
    placementBlack = [49, 50, 51, 52, 53, 54, 55, 56];
    placementBlack.forEach(id => {
        let pawnBlackImage = document.createElement('img');
        pawnBlackImage.src = "pieces/Noir/Pièces as.chess_Pion-noir.svg";
        let box = document.getElementById(id);
        box.appendChild(pawnBlackImage);
    })
}

function initKnight() {
    placementWhite = [2, 7];
    placementWhite.forEach((id) => {
        let knightWhiteImage = document.createElement('img');
        knightWhiteImage.src = "pieces/Blanc/Pièces as.chess_Cavalier-blanc.svg";

        let box = document.getElementById(id);
        box.appendChild(knightWhiteImage);
    });

    placementBlack = [58, 63];
    placementBlack.forEach((id) => {
        let knightBlackImage = document.createElement('img');
        knightBlackImage.src = "pieces/Noir/Pièces as.chess_Cavalier-noir.svg";
        let box = document.getElementById(id);
        box.appendChild(knightBlackImage);
    });
}


function initBishop(){

    placementWhite = [3, 6];
    placementWhite.forEach((id) => {
    let bishopWhiteImage = document.createElement('img');
    bishopWhiteImage.src = "pieces/Blanc/Pièces as.chess_Fou-blanc.svg";
    let box = document.getElementById(id);
    box.appendChild(bishopWhiteImage);
    })

    placementBlack = [59, 62];
    placementBlack.forEach((id) => {
    let bishopBlackImage = document.createElement('img');
    bishopBlackImage.src = "pieces/Noir/Pièces as.chess_Fou-noir.svg";
    let box = document.getElementById(id);
    box.appendChild(bishopBlackImage);
    })
}

function initRook(){

    placementWhite = [1, 8];
    placementWhite.forEach((id) => {
    let rookWhiteImage = document.createElement('img');
    rookWhiteImage.src = "pieces/Blanc/Pièces as.chess_Tour-blanc.svg";
    let box = document.getElementById(id);
    box.appendChild(rookWhiteImage);
    })

    placementBlack = [57, 64];
    placementBlack.forEach((id) => {
    let rookBlackImage = document.createElement('img');
    rookBlackImage.src = "pieces/Noir/Pièces as.chess_Tour-noir.svg";
    let box = document.getElementById(id);
    box.appendChild(rookBlackImage);
    })
}

function initQueen(){
    placement = [4, 60];
    let queenWhiteImage = document.createElement('img');
    let queenBlackImage = document.createElement('img');
    queenWhiteImage.src = "pieces/Blanc/Pièces as.chess_Dame-blanc.svg";
    queenBlackImage.src = "pieces/Noir/Pièces as.chess_Dame-noir.svg";
    let queenWhiteBox = document.getElementById(placement[0]);
    let queenBlackBox = document.getElementById(placement[1]);
    queenWhiteBox.appendChild(queenWhiteImage);
    queenBlackBox.appendChild(queenBlackImage);
}

function initKing(chessboard){
    placement = [5, 61];
    let kingWhiteImage = document.createElement('img');
    let kingBlackImage = document.createElement('img');
    kingWhiteImage.src = "pieces/Blanc/Pièces as.chess_Roi-blanc.svg";
    kingBlackImage.src = "pieces/Noir/Pièces as.chess_Roi-noir.svg";
    let kingWhiteBox = document.getElementById(placement[0]);
    let kingBlackBox = document.getElementById(placement[1]);
    kingWhiteBox.appendChild(kingWhiteImage);
    kingBlackBox.appendChild(kingBlackImage);
}

function initChessGame(){
    initPawn();
    initKnight();
    initBishop();
    initRook();
    initQueen();
    initKing();
}

initChessGame();