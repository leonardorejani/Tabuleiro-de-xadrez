document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("chessboard");

    // Definição das peças na posição inicial
    const initialBoard = [
        ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
        ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
        ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
    ];

    let selectedPiece = null;

    function createBoard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement("div");
                square.classList.add("square", (row + col) % 2 === 0 ? "light" : "dark");
                square.dataset.row = row;
                square.dataset.col = col;

                if (initialBoard[row][col] !== "") {
                    const pieceElement = document.createElement("span");
                    pieceElement.textContent = initialBoard[row][col];
                    pieceElement.classList.add("piece");
                    square.appendChild(pieceElement);
                }

                square.addEventListener("click", movePiece);
                board.appendChild(square);
            }
        }
    }

    function movePiece(event) {
        const square = event.currentTarget;

        if (selectedPiece) {
            square.innerHTML = "";
            square.appendChild(selectedPiece);
            selectedPiece = null;
        } else if (square.firstChild) {
            selectedPiece = square.firstChild;
        }
    }

    createBoard();
});
