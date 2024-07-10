import React, { ReactNode } from 'react';
interface LabelProps {
    title: string;
    sub_title: string;
    icon?: ReactNode;
}
declare const Label: React.FC<LabelProps>;
export default Label;
