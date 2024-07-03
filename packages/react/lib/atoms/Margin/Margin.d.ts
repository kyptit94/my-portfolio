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
declare const Margin: React.FC<MarginProps>;
export default Margin;
