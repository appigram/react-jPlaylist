"use strict";var _react=_interopRequireDefault(require("react")),_expect=_interopRequireDefault(require("expect")),_proxyquire=_interopRequireDefault(require("proxyquire")),_containerSetup=_interopRequireDefault(require("../../../util/specHelpers/containerSetup.spec"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}_proxyquire["default"].noCallThru();var _onKeyDown,id="TestPlayer",mockKeyControl=function(a){var b=a.keyBindings;return _react["default"].createElement("button",{onKeyDown:function onKeyDown(){return _onKeyDown(b)}})},keyControlContainer=(0,_proxyquire["default"])("./keyControlContainer",{"./keyControl":mockKeyControl})["default"],setup=function(a,b,c){return(0,_containerSetup["default"])(keyControlContainer,a,b,c)};describe("keyControlContainer",function(){var a,b;beforeEach(function(){a=_defineProperty({},id,{current:0,loop:"off",playlist:[{id:0,sources:{mp3:"test.mp3"}},{id:1,sources:{mp3:"testTwo.mp3"}}]}),b=_defineProperty({},id,{})}),describe("custom keyBindings",function(){it("merges custom keyBinding with different name",function(){_onKeyDown=function(a){var b=a.test;return b.fn()};var c=_expect["default"].createSpy(),d=setup(a,b,{keyBindings:{test:{key:20,fn:c}}}),e=d.wrapper;e.simulate("keydown"),(0,_expect["default"])(c).toHaveBeenCalled()}),it("custom keyBinding overwrite default function with same name",function(){_onKeyDown=function(a){var b=a.shuffle;return b.fn()};var c=_expect["default"].createSpy(),d=setup(a,b,{keyBindings:{shuffle:{fn:c}}}),e=d.wrapper;e.simulate("keydown"),(0,_expect["default"])(c).toHaveBeenCalled()})}),describe("next",function(){it("plays next media",function(){_onKeyDown=function(a){var b=a.next;return b.fn()};var c=setup(a,b),d=c.wrapper,e=c.store;d.simulate("keydown");var f=e.getState().jPlaylists[id];(0,_expect["default"])(f.current).toBe(1)})}),describe("next",function(){it("plays previous media",function(){a[id].current=1,_onKeyDown=function(a){var b=a.previous;return b.fn()};var c=setup(a,b),d=c.wrapper,e=c.store;d.simulate("keydown");var f=e.getState().jPlaylists[id];(0,_expect["default"])(f.current).toBe(0)})}),describe("shuffle",function(){it("shuffles the media",function(){_onKeyDown=function(a){var b=a.shuffle;return b.fn()};var c=setup(a,b),d=c.wrapper,e=c.store;d.simulate("keydown");var f=e.getState().jPlaylists[id];(0,_expect["default"])(f.shuffled).toBe(!0)})}),describe("loop",function(){it("loops the media",function(){_onKeyDown=function(a){var b=a.loop;return b.fn()};var c=setup(a,b),d=c.wrapper,e=c.store;d.simulate("keydown");var f=e.getState().jPlaylists[id];(0,_expect["default"])(f.loop).toBe("loop")})})});