import React from 'react';
import Image from '../../atoms/Image/Image.js';
import Heading from '../../atoms/Heading/Heading.js';

var About = function (_a) {
    var imageProfile = _a.imageProfile, name = _a.name, role = _a.role, description = _a.description;
    return (React.createElement("section", { id: "about", className: 'kl_about' },
        React.createElement(Image, { className: 'kl_about__image', src: imageProfile, height: 300, width: 300, responsive: true, round: true, alt: "teacher" }),
        React.createElement(Heading, { level: 1 }, name),
        React.createElement(Heading, { level: 2 }, role),
        React.createElement("div", { className: 'kl_about__description' }, description)));
};

export { About as default };
//# sourceMappingURL=About.js.map
