"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _reactJplayerUtils=require("@appigram/react-jplayer-utils"),_lodash=_interopRequireDefault(require("lodash.merge")),_keyControl=_interopRequireDefault(require("./keyControl")),_actions=require("../../../actions/actions"),_getLoopState=_interopRequireDefault(require("../../../util/loop/getLoopState"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var mapStateToProps=function(a,b){var c=a.jPlaylists,d=b.id;return{loop:c[d].loop}},mergeProps=function(a,b,c){var d=b.dispatch,e=c.keyBindings,f=c.children,g=c.id;return{keyBindings:(0,_lodash["default"])({next:{key:221,// ]
fn:function fn(){return d((0,_actions.next)(g))}},previous:{key:219,// [
fn:function fn(){return d((0,_actions.previous)(g))}},shuffle:{key:83,// s
fn:function fn(){return d((0,_actions.shuffle)(g,void 0,!0))}},loop:{key:76,// l
fn:function fn(){var b=(0,_getLoopState["default"])(a.loop);d((0,_actions.setOption)(g,"loop",b))}}},e),children:f}},_default=(0,_reactJplayerUtils.connectWithId)(mapStateToProps,null,mergeProps)(_keyControl["default"]);exports["default"]=_default;