// import { isPostionValid } from './validator';
// const solveSudoku = (sudoku, setSudoku, i, j) => {
//     if (i === sudoku.length) {
//         return console.log(sudoku);
//     }
//     let ni = 0;
//     let nj = 0;
//     if (j === sudoku[0].length - 1) {
//         nj = 0;
//         ni = i + 1;
//     } else {
//         ni = i;
//         nj = j + 1;
//     }

//     if (!sudoku[i][j] || sudoku[i][j] === ' ') {
//         for (let k = 1; k <= 9; k++) {
//             if (isPostionValid(k, i, j, sudoku)) {
//                 sudoku[i][j] = k;
//                 solveSudoku(sudoku, setSudoku, ni, nj);
//                 sudoku[i][j] = 0;
//             }
//         }
//     } else {
//         solveSudoku(sudoku, setSudoku, ni, nj);
//     }
// };
// export default solveSudoku;
