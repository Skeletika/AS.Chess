
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
    constructor(name, coord){
        this.name = name;
        this.x = coord[0];
        this.y = coord[1];
    }
}

class Pawn extends Piece {
    constructor(name, coord){
        super(name, coord);
    }

    move() {
 
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
    chessboardPiece[x][y] = new Piece(coord[1], coord[0]);
});

pawnBlackPosition.forEach(coord => {
    let x = coord[0][0];
    let y = coord[0][1];
    chessboardPiece[x][y] = new Piece(coord[1], coord[0]);
});


console.log(chessboardPiece);

