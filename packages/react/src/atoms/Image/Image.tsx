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

const Image: React.FC<ImageProps> = ({ src, alt, width, height, round, responsive, className }) => {
    let classN = `kl_image ${className ?? ""}`

    if (round) {
        classN += " kl_image--round";
    }

    if(responsive) {
        classN += " kl_image--responsive";
    }

    return <img src={src} width={width} height={height} alt={alt} className={classN} />;
};

export default Image;