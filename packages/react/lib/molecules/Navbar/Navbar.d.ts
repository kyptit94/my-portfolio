import React from 'react';
interface NavbarItem {
    title: string;
    href: string;
}
interface NavbarProps {
    items: NavbarItem[];
}
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
