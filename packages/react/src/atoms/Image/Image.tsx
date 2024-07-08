import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    round?: boolean;
    responsive?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, round, responsive }) => {
    let className = "kl_image"

    if (round) {
        className += " kl_image--round";
    }

    if(responsive) {
        className += " kl_image--responsive";
    }

    return <img src={src} width={width} height={height} alt={alt} className={className} />;
};

export default Image;