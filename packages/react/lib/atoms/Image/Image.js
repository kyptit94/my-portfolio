import React from 'react';

var Image = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, round = _a.round, responsive = _a.responsive, className = _a.className;
    var classN = "kl_image ".concat(className !== null && className !== void 0 ? className : "");
    if (round) {
        classN += " kl_image--round";
    }
    if (responsive) {
        classN += " kl_image--responsive";
    }
    return React.createElement("img", { src: src, width: width, height: height, alt: alt, className: classN });
};

export { Image as default };
//# sourceMappingURL=Image.js.map
