import React from 'react';
interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    round?: boolean;
    responsive?: boolean;
    className?: string;
}
declare const Image: React.FC<ImageProps>;
export default Image;
