import React from 'react';
import Link from '../../atoms/Link/Link.js';

var Navbar = function (_a) {
    var items = _a.items;
    return (React.createElement("nav", null,
        React.createElement("ul", null, items.map(function (item, index) { return (React.createElement("li", { key: index },
            React.createElement(Link, { href: item.href }, item.title))); }))));
};

export { Navbar as default };
//# sourceMappingURL=Navbar.js.map
