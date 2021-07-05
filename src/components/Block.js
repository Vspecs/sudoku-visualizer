import React from 'react';

const Block = ({ id }) => {
    return <div className={id % 2 === 0 ? 'block-even' : 'block-odd'}>
        <div className='cols'>
            <div className='rows'>

            </div>
            <div className='rows'>

            </div>
            <div className='rows'>

            </div>
        </div>
        <div className='cols'>
            <div className='rows'>

            </div>
            <div className='rows'>

            </div>
            <div className='rows'>

            </div>
        </div>
        <div className='cols'>
            <div className='rows'>

            </div>
            <div className='rows'>

            </div>
            <div className='rows'>

            </div>
        </div>
    </div>
};

export default Block;
