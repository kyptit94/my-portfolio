import React from 'react';

interface LineProps {
}

const Line: React.FC<LineProps> = () => {

    return (
        <div className='mobile_icon'>
            <span className='mobile_icon__top--line'></span>
            <span className='mobile_icon__middle--line'></span>
            <span className='mobile_icon__bottom--line'></span>
        </div>
    );
};

export default Line;