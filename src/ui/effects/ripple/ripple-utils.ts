


export function parseColor(color: string, multiplier : number = 1) : string {

    if (!color) {
        return;
    }
    if (color.indexOf('rgba') === 0) {
        return color.replace(/\d?\.?\d*\s*\)\s*$/, (0.1 * multiplier).toString() + ')');
    }
    if (color.indexOf('rgb') === 0) {
        return rgbToRGBA(color);
    }
    if (color.indexOf('#') === 0) {
        return hexToRGBA(color);
    }
    
}


/**
 * Converts hex value to RGBA string
 * @param color {string}
 * @returns {string}
 */
export function hexToRGBA (color : string) : string {
    var hex   = color[ 0 ] === '#' ? color.substr(1) : color,
        dig   = hex.length / 3,
        red   = hex.substr(0, dig),
        green = hex.substr(dig, dig),
        blue  = hex.substr(dig * 2);
    if (dig === 1) {
        red += red;
        green += green;
        blue += blue;
    }
    return 'rgba(' + parseInt(red, 16) + ',' + parseInt(green, 16) + ',' + parseInt(blue, 16) + ',0.1)';
}

/**
 * Converts an RGB color to RGBA
 * @param color {string}
 * @returns {string}
 */
export function rgbToRGBA (color : string) : string {
    return color.replace(')', ', 0.1)').replace('(', 'a(');
}

export function rgbaToRGB (color : string) : string {
    return color ? color.replace('rgba', 'rgb').replace(/,[^\),]+\)/, ')') : 'rgb(0,0,0)';
}

export function getSize (fit : boolean, x : number, y : number) : number {
    return fit ? Math.max(x, y) : Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export function nextTick(callback : () => void) : number {
    return window.setTimeout(callback, 0);
}