import { useState } from 'react';
import Table from './Table';
import { easy, medium, hard } from '../utility/randomSudoku';
const Action = () => {
    const blankSudoku = new Array(9);
    for (let i = 0; i < blankSudoku.length; i++) {
        blankSudoku[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    const [sudoku, setSudoku] = useState(easy());
    const [used, setUsed] = useState(true);
    const clearSudoku = () => {
        setUsed(false);
        return setSudoku(blankSudoku);
    };
    const generateRandom = () => {
        setUsed(true);
        return setSudoku(easy());
    };
    return (
        <div className='action'>
            <div className='action-hero'>
                <div className='action-hero-heading'>
                    <h2>Fill puzzle values</h2>
                </div>
                <Table sudoku={sudoku} setSudoku={setSudoku} />
                <div className='action-hero-btns'>
                    <div className='btn'>
                        <button disabled={used} onClick={generateRandom}>
                            NEW
                        </button>
                    </div>
                    <div className='btn'>
                        <button onClick={clearSudoku}>CleAr</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Action;
