import React, { ReactNode } from 'react';
import { Spacing } from '@kl.e/foundation';

interface MarginProps {
    children: ReactNode;
    size?: keyof typeof Spacing;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
}

const Margin: React.FC<MarginProps> = ({
    children,
    top = false,
    right = false,
    bottom = false,
    left = false,
    size = "xxxs",
}) => {

    let className = ``

    if(!top && !right && !bottom && !left) {
        className = `kp-margin-${size}`;
    }

    if (top) {
        className += ` kp-margin-top-${size}`;
    }

    if (right) {
        className += ` kp-margin-right-${size}`;
    }

    if (bottom) {
        className += ` kp-margin-bottom-${size}`;
    }

    if (left) {
        className += ` kp-margin-left-${size}`;
    }

    return <div className={className}>{children}</div>;
};

export default Margin;