import React from 'react';
interface CardProps {
    title: string;
    image: string;
    background?: string;
    border?: string;
    href: string;
    rtl?: boolean;
    description: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
