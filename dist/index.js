/*!
 * name: @jswork/node-fetch-html
 * description: Fetch html with node-fetch.
 * homepage: https://github.com/afeiship/node-fetch-html
 * version: 1.0.0
 * date: 2020-12-06 13:53:32
 * license: MIT
 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _nodeFetch=_interopRequireDefault(require("node-fetch"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default=function(e,t){return(0,_nodeFetch.default)(e,t).then(function(e){return e.text()})};exports.default=_default;