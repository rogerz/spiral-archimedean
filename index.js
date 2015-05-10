'use strict';
function SpiralArchimedean(width, height) {
	var e = width / height;
	return function (t) {
		return {
			width: e * t * Math.cos(t),
			height: t * Math.sin(t)
		};
	};
}

module.exports = SpiralArchimedean;