import React from 'react';

interface HeadingProps {
    level: number;
    text: string;
}

const Heading: React.FC<HeadingProps> = ({ level, text }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return <Tag>{text}</Tag>;
};

export default Heading;