import React from 'react';

var Line = function (_a) {
    var color = _a.color, thickness = _a.thickness, width = _a.width;
    var lineStyle = {
        backgroundColor: color,
        height: thickness,
        width: width || '100%',
    };
    return React.createElement("span", { style: lineStyle });
};

export { Line as default };
//# sourceMappingURL=Line.js.map
