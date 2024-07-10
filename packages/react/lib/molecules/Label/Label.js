import React from 'react';

var Label = function (_a) {
    var title = _a.title, sub_title = _a.sub_title, icon = _a.icon;
    return (React.createElement("div", { className: 'kl_label' },
        React.createElement("div", { className: 'kl_label__icon' }, icon),
        React.createElement("div", { className: 'kl_label__title' }, title),
        React.createElement("div", { className: 'kl_label__sub_title' }, sub_title)));
};

export { Label as default };
//# sourceMappingURL=Label.js.map
