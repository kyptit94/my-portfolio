import React from 'react';

interface LabelProps {
    title: string;
    sub_title: string;
}

const Label: React.FC<LabelProps> = ({ title, sub_title }) => {
    return (
        <div className='kl_label'>
            <div className='kl_label__title'>{title}</div>
            <div className='kl_label__sub_title'>{sub_title}</div>
        </div>
    );
};

export default Label;