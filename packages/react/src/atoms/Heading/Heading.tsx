import React from 'react';

interface HeadingProps {
    level: number;
    children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return <Tag>{children}</Tag>;
};

export default Heading;