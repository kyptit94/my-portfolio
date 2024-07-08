import React from 'react';
interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    round?: boolean;
    responsive?: boolean;
}
declare const Image: React.FC<ImageProps>;
export default Image;
