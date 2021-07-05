export const isValid = (userInput) => {
    if (parseInt(userInput) > 9 || parseInt(userInput) < 0) {
        return false;
    }
    return true;
};
export const isPostionValid = (userInput, rowId, colId, sudoku) => {
    const row = sudoku[rowId];
    if (row.includes(parseInt(userInput))) return false;
    sudoku.forEach((row, i) => {
        if (row[colId] === parseInt(userInput)) return false;
    });
    let smi = (rowId / 3) * 3;
    let smj = (colId / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudoku[smi + i][smj + j] === parseInt(userInput)) {
                return false;
            }
        }
    }
    return true;
};
