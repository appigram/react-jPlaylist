"use strict";var _react=_interopRequireDefault(require("react")),_expect=_interopRequireDefault(require("expect")),_proxyquire=_interopRequireDefault(require("proxyquire")),_reactJplayerUtils=require("@appigram/react-jplayer-utils"),_containerSetup=_interopRequireDefault(require("../../util/specHelpers/containerSetup.spec")),_constants=require("../../util/constants");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}_proxyquire["default"].noCallThru();var id="TestPlayer",mockPlaylist=function(){return _react["default"].createElement("div",null)},PlaylistContainer=(0,_proxyquire["default"])("./playlistContainer",{"./playlist":mockPlaylist})["default"],setup=function(a,b,c){return(0,_containerSetup["default"])(PlaylistContainer,a,b,c)};describe("PlaylistContainer",function(){var a,b;beforeEach(function(){a=_defineProperty({},id,{}),b=_defineProperty({},id,{})}),describe("className",function(){it("is playlist",function(){var c=setup(b,a),d=c.wrapper,e=d.find(mockPlaylist);(0,_expect["default"])(e.prop("className")).toBe(_constants.classes.PLAYLIST)}),it("renders custom as well as default",function(){var c=setup(b,a,{className:"jp-test"}),d=c.wrapper,e=d.find(mockPlaylist);(0,_expect["default"])(e.prop("className")).toContain(_constants.classes.PLAYLIST),(0,_expect["default"])(e.prop("className")).toContain("jp-test")}),it("renders hidden when hidePlaylist is true as well as default",function(){b[id].hidePlaylist=!0;var c=setup(b,a),d=c.wrapper,e=d.find(mockPlaylist);(0,_expect["default"])(e.prop("className")).toContain(_constants.classes.PLAYLIST),(0,_expect["default"])(e.prop("className")).toContain(_reactJplayerUtils.classes.HIDDEN)})})});