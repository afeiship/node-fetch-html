/*!
 * name: @feizheng/node-fetch-html
 * description: Fetch html with node-fetch.
 * homepage: https://github.com/afeiship/node-fetch-html
 * version: 1.1.0
 * date: 2020-07-18T12:46:35.797Z
 * license: MIT
 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _nextSpiderFetch=_interopRequireDefault(require("@feizheng/next-spider-fetch"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default=function(e,t){return(0,_nextSpiderFetch.default)(e,t).then(function(e){return e.text()})};exports.default=_default;