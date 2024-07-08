import React from 'react';
import Link from '../../atoms/Link';
import Line from '../../atoms/Line';
import Margin from '../../atoms/Margin';

interface MenuItem {
    title: string;
    href: string;
}

interface MenuProps {
    items: MenuItem[];
    // Define props here
}

const Menu: React.FC<MenuProps> = ({ items }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isHover, setIsHover] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenuIcon = () => {
        setIsHover(!isHover);
    }

    const renderMenuItem = (items: MenuItem[], className: string) => (
        <ul className={className}>
            {items.map((item, index) => (
                <li className="kl_menu__nav__item" key={index}>
                    <Link href={item.href}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    )

    return (
        <div className="kl_menu">
            <button className={`kl_menu__button`} onClick={toggleMenu} onMouseEnter={toggleMenuIcon} onMouseLeave={toggleMenuIcon}>
                <Line width={32} color='#213547' thickness={2} />
                <Line width={32} color='#213547' thickness={2} />
                <Line width={32} color='#213547' thickness={2} />
            </button>
            {isOpen && renderMenuItem(items, "kl_menu__mobile_nav")}
            {renderMenuItem(items, "kl_menu__nav")}
        </div>
    );
};

export default Menu;