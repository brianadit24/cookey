"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _clubs = _interopRequireDefault(require("./clubs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataSource =
/*#__PURE__*/
function () {
  function DataSource() {
    _classCallCheck(this, DataSource);
  }

  _createClass(DataSource, null, [{
    key: "searchClub",
    value: function searchClub(keyword) {
      return fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=".concat(keyword)).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        if (responseJson.teams) {
          return Promise.resolve(responseJson.teams);
        } else {
          return Promise.reject("".concat(keyword, " is not found"));
        }
      });
    }
  }]);

  return DataSource;
}();

var _default = DataSource;
exports["default"] = _default;