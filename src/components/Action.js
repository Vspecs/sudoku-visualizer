import React from 'react';
import Table from './Table';

const Action = () => {
    return <div className='action'>
        <div className='action-hero'>
            <div className='action-hero-heading'>
                <h2>Fill puzzle values</h2>
            </div>
            <Table />
        </div>
    </div>;
};

export default Action;
