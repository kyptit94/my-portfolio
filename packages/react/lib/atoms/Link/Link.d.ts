import React from 'react';
interface LinkProps {
    href: string;
    target?: string;
    rel?: string;
    className?: string;
    children: React.ReactNode;
}
declare const Link: React.FC<LinkProps>;
export default Link;
