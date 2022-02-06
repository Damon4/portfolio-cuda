"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.jsHomeButtonWork').addEventListener('click', function (event) {
    var _document$querySelect;

    event.preventDefault();
    event.stopPropagation();
    (_document$querySelect = document.querySelector('#contact')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.scrollIntoView();
  });
});
//# sourceMappingURL=main.js.map
