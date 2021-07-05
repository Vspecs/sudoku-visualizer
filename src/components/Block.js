import React from 'react';

const Block = ({ id, sudoku, setSudoku }) => {
    // idx = [
    //     [0, 1, 2, 3, 4, 5, 6, 7, 8],
    //     [9, 10, 11, 12, 13, 14, 15, 16, 17],
    //     [18, 19, 20, 21, 22, 23, 24, 25, 26],
    //     [27, 28, 29, 30, 31, 32, 33, 34, 35],
    //     [36, 37, 38, 39, 40, 41, 42, 43, 44],
    //     [45, 46, 47, 48, 49, 50, 51, 52, 53],
    //     [54, 55, 56, 57, 58, 59, 60, 61, 62],
    //     [63, 64, 65, 66, 67, 68, 69, 70, 71],
    //     [72, 73, 74, 75, 76, 77, 78, 79, 80]
    // ]
    const changeHandler = (e) => {
        const tileId = e.target.id;
        const rowId = parseInt(tileId / 9);
        const colId = parseInt(tileId % 9);
        console.log(sudoku[rowId][colId]);
        const newSudoku = sudoku.map((row, i) => {
            return row.map((col, j) => {
                if (i === rowId && j === colId) {
                    console.log(e.target.value);
                    return e.target.value;
                } else {
                    return sudoku[i][j];
                }
            });
        });
        setSudoku(newSudoku);

        console.log(sudoku[rowId][colId]);
    };
    const getTileId = (block, row, col) => {
        return (parseInt(block / 3) * 3 + row) * 9 + ((id % 3) * 3 + col);
    };
    const getTileValue = (block, row, col) => {
        let val = sudoku[parseInt(block / 3) * 3 + row][(id % 3) * 3 + col];
        return val === 0 ? '-' : val;
    };
    return (
        <div className={id % 2 === 0 ? 'block-even' : 'block-odd'}>
            <div className='col'>
                <div className='row'>
                    {/* id = (row) * 9 + (col) */}
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 0, 0)}
                        value={getTileValue(id, 0, 0)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 1, 0)}
                        value={getTileValue(id, 1, 0)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 2, 0)}
                        value={getTileValue(id, 2, 0)}
                    />
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 0, 1)}
                        value={getTileValue(id, 0, 1)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 1, 1)}
                        value={getTileValue(id, 1, 1)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 2, 1)}
                        value={getTileValue(id, 2, 1)}
                    />
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 0, 2)}
                        value={getTileValue(id, 0, 2)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 1, 2)}
                        value={getTileValue(id, 1, 2)}
                    />
                </div>
                <div className='row'>
                    <input
                        className='tile'
                        type='number'
                        onChange={changeHandler}
                        id={getTileId(id, 2, 2)}
                        value={getTileValue(id, 2, 2)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Block;
