type TTheme = {
	body: HTMLBodyElement | null;
	theme: HTMLImageElement | null;
}

const sunSvg: string = require('../../images/theme/sun.svg');
const moonSvg: string = require('../../images/theme/moon.svg');

export { TTheme, sunSvg, moonSvg };