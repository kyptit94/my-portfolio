import React from 'react';
import Text from '../../atoms/Text/Text.js';
import Image from '../../atoms/Image/Image.js';
import Link from '../../atoms/Link/Link.js';
import Heading from '../../atoms/Heading/Heading.js';

var Card = function (_a) {
    var title = _a.title, image = _a.image, href = _a.href, description = _a.description, background = _a.background, border = _a.border, rtl = _a.rtl;
    return (React.createElement("div", { className: "kl_card", style: {
            background: background,
            border: border,
            direction: (rtl ? 'rtl' : 'ltr')
        } },
        React.createElement(Link, { className: 'kl_card__title', href: href },
            React.createElement(Heading, { level: 2 }, title)),
        React.createElement(Text, { className: "kl_card__description", text: description }),
        React.createElement(Image, { className: "kl_card__image ".concat(rtl ? 'rtl' : ''), src: image, alt: title })));
};

export { Card as default };
//# sourceMappingURL=Card.js.map
