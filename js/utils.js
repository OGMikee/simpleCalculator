const MAX_DISPLAY_LENGTH = 12;
const DECIMAL_PLACES = 8;

function isValidNumber(value) {
    return !isNaN(parseFloat(value));
}

function formatDisplayNumber(number) {
    number = (number.length > MAX_DISPLAY_LENGTH)
        ? parseFloat(number).toExponential(MAX_DISPLAY_LENGTH - 5)
        : number;

    const [whole, decimals] = number.split('.');
    const slicedDecimals = (decimals && decimals.length > DECIMAL_PLACES)
        ? decimals.slice(0, DECIMAL_PLACES)
        : decimals;

    const wholeFormatted = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return slicedDecimals ? `${wholeFormatted}.${slicedDecimals}` : wholeFormatted;
}

function sanitizeInput(input) {
    return input.replace(/[^\d.-]/g, '')
        .split('.').slice(0, 2).join('.');
}