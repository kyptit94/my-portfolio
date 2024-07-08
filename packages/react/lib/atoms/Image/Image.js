import React from 'react';

var Image = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, round = _a.round, responsive = _a.responsive;
    var className = "kl_image";
    if (round) {
        className += " kl_image--round";
    }
    if (responsive) {
        className += " kl_image--responsive";
    }
    return React.createElement("img", { src: src, width: width, height: height, alt: alt, className: className });
};

export { Image as default };
//# sourceMappingURL=Image.js.map
