export const toggleFullscreen = () => {
	if (!document.fullscreenElement &&    // alternative standard method
		!document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
};

/**
 * Generate four number between 0 to 9
 * @returns {string}
 */
const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

/**
 * Return a guid
 * @returns {string}
 */
export const guid = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
