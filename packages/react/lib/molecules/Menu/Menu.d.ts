import React from 'react';
interface MenuItem {
    title: string;
    href: string;
}
interface MenuProps {
    items: MenuItem[];
}
declare const Menu: React.FC<MenuProps>;
export default Menu;
