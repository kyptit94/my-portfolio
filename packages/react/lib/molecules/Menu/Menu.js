import React from 'react';
import Link from '../../atoms/Link/Link.js';

var Menu = function (_a) {
    var items = _a.items;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleMenu = function () {
        setIsOpen(!isOpen);
    };
    var renderMenuItem = function (items, className) { return (React.createElement("ul", { className: className }, items.map(function (item, index) { return (React.createElement("li", { className: "kl_menu__nav__item", key: index },
        React.createElement(Link, { href: item.href }, item.title))); }))); };
    return (React.createElement("div", { className: "kl_menu" },
        React.createElement("button", { className: "kl_menu__button", onClick: toggleMenu }, "Menu"),
        isOpen && renderMenuItem(items, "kl_menu__mobile_nav"),
        renderMenuItem(items, "kl_menu__nav")));
};

export { Menu as default };
//# sourceMappingURL=Menu.js.map
