import React from 'react';
import github from '../assets/github.png';
import girl from '../assets/girl.png';
import dotPattern from '../assets/dot-pattern.png';
import dotPurple from '../assets/dot-purple.png';
import dotYellow from '../assets/dot-yellow.png';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-inner'>
                <div className='banner-left'>
                    <h3 id='logo'>Sudoku Solver</h3>
                    <div className='heading'>
                        <h2>SOLVE yOUR daILY</h2>
                        <h2 className='sudoku'>sUDOKU!</h2>
                    </div>
                    <p>
                        There are about <span>10^21</span> possible solutions to
                        Sudoku . That’s far more than you can imagine.
                    </p>
                    <a href='/'>Explore Them</a>
                </div>
                <div className='banner-right'>
                    <a
                        href='https://github.com/Vspecs/sudoku-visualizer'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img id='github' src={github} alt='' />
                    </a>
                    <div className='girl-bg'>
                        <img id='girl' src={girl} alt='' />
                    </div>

                    <img id='dots' src={dotPattern} alt='' />
                    <img className='purple-dots' src={dotPurple} alt='' />
                    <img className='yellow-dots' src={dotYellow} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;
