const boardSize = 5;
let currentPlayer = 'X';
let board = [];

function createBoard() {
    const boardElement = document.getElementById('game-board');
    boardElement.innerHTML = '';
    board = [];

    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = '';
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.onclick = handleCellClick;
            boardElement.appendChild(cell);
        }
    }

    document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
}

function handleCellClick(e) {
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;

    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        e.target.textContent = currentPlayer;

        if (checkWinner(row, col)) {
            document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
            disableBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner(row, col) {
    row = parseInt(row);
    col = parseInt(col);

    const symbol = board[row][col];

    // Check row
    if (board[row].every(cell => cell === symbol)) return true;

    // Check column
    if (board.every(row => row[col] === symbol)) return true;

    // Check diagonals
    if (row === col && board.every((_, i) => board[i][i] === symbol)) return true;
    if (row + col === boardSize - 1 && board.every((_, i) => board[i][boardSize - 1 - i] === symbol)) return true;

    return false;
}

function disableBoard() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.onclick = null;
    });
}

function resetGame() {
    currentPlayer = 'X';
    createBoard();
}

createBoard();
