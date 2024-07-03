import React from 'react';

var Margin = function (_a) {
    var children = _a.children, _b = _a.top, top = _b === void 0 ? false : _b, _c = _a.right, right = _c === void 0 ? false : _c, _d = _a.bottom, bottom = _d === void 0 ? false : _d, _e = _a.left, left = _e === void 0 ? false : _e, _f = _a.size, size = _f === void 0 ? "xxxs" : _f;
    var className = "";
    if (!top && !right && !bottom && !left) {
        className = "kp-margin-".concat(size);
    }
    if (top) {
        className += " kp-margin-top-".concat(size);
    }
    if (right) {
        className += " kp-margin-right-".concat(size);
    }
    if (bottom) {
        className += " kp-margin-bottom-".concat(size);
    }
    if (left) {
        className += " kp-margin-left-".concat(size);
    }
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
