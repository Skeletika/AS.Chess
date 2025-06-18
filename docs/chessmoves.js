
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

     moveTo(newX, newY, board) {
        let legalMoves = this.possibleMoves(board);
        let isLegal = false;

        for (let i = 0; i < legalMoves.length; i++) {
            let move = legalMoves[i];
            if (move[0] === newX && move[1] === newY) {
                isLegal = true;
                break;
            }
        }

        if (!isLegal) {
            console.log("Coup illégal pour", this.name);
            return false;
        }

        // Déplacement
        board[this.x][this.y] = 0; // libère ancienne case
        board[newX][newY] = this;  // nouvelle case occupée
        this.x = newX;
        this.y = newY;

        console.log(this.name + " se déplace en [" + newX + "," + newY + "]");
        return true;
    }
}


class Pawn extends Piece {
    constructor(name, coord, color){
        super(name, coord, color);
    }

     possibleMoves(board) {
        let moves = [];
        let direction;

        if (this.color === "white") {
            direction = 1;
        } else if (this.color === "black") {
            direction = -1;
        } else {
        console.log("Couleur non reconnue !");
        return moves;
    }

        let nextX = this.x + direction;

        console.log("Direction :", direction, "NextX :", nextX);

        // Avancer d'une case
        if (nextX >= 0 && nextX < 8 && board[nextX][this.y] === 0) {
            console.log("Case devant :", board[nextX][this.y]);
            moves.push([nextX, this.y]);

            // Avancer de deux cases si en position initiale
            if (this.color === "white" && this.x === 1 && board[this.x + 2][this.y] === 0) {
                moves.push([this.x + 2, this.y]);
            } else if (this.color === "black" && this.x === 6 && board[this.x - 2][this.y] === 0) {
                moves.push([this.x - 2, this.y]);
            }
        }

        // Captures diagonales
        for (let dy of [-1, 1]) {
            let newY = this.y + dy;
            if (newY >= 0 && newY < 8 && nextX >= 0 && nextX < 8) {
                let target = board[nextX][newY];
                if (target !== 0 && target.color !== this.color) {
                    moves.push([nextX, newY]);
                }
            }
        }

        return moves;
    }
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



pawnWhitePosition.forEach(coord => {
    let x = coord[0][0];
    let y = coord[0][1];
    chessboardPiece[x][y] = new Pawn(coord[1], coord[0], "white");
});

pawnBlackPosition.forEach(coord => {
    let x = coord[0][0];
    let y = coord[0][1];
    chessboardPiece[x][y] = new Pawn(coord[1], coord[0], "black");
});

console.log(chessboardPiece);

let myPawn = chessboardPiece[1][0]; // PA2
console.log("Coups possibles pour", myPawn.name, ":", myPawn.possibleMoves(chessboardPiece));
myPawn.moveTo(2, 0, chessboardPiece);