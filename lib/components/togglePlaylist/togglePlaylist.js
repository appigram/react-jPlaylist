"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_constants=require("../../util/constants");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var TogglePlaylist=function(a){var b=a.togglePlaylist,c=a.children;return _react["default"].createElement("button",{className:_constants.classes.TOGGLE_PLAYLIST,onClick:b},c)};TogglePlaylist.propTypes={children:_propTypes["default"].node.isRequired,togglePlaylist:_propTypes["default"].func.isRequired};var _default=TogglePlaylist;exports["default"]=_default;