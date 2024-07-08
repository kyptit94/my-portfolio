import React from 'react';

interface LineProps {
    color: string;
    thickness: number;
    width?: number;
}

const Line: React.FC<LineProps> = ({ color, thickness, width }) => {
    const lineStyle = {
        backgroundColor: color,
        height: thickness,
        width: width || '100%',
    };

    return <span style={lineStyle}></span>;
};

export default Line;