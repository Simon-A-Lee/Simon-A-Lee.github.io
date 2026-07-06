/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(t,n){var o,u=t.jQuery||t.Cowboy||(t.Cowboy={});u.throttle=o=function(t,o,e,i){function r(){function u(){c=+new Date,e.apply(f,g)}function r(){a=n}var f=this,d=+new Date-c,g=arguments;i&&!a&&u(),a&&clearTimeout(a),i===n&&d>t?u():!0!==o&&(a=setTimeout(i?r:u,i===n?t-d:t))}var a,c=0;return"boolean"!=typeof o&&(i=e,e=o,o=n),u.guid&&(r.guid=e.guid=e.guid||u.guid++),r},u.debounce=function(t,u,e){return e===n?o(t,u,!1):o(t,e,!1!==u)}}(this);