let changeRate = { USD: 26, CHF: 28, EUR: 30 };
let stepValue = 10;
let startValue = 10;
let endValue = 100;

function convertCurrencyToUAH(changeRate, stepValue, startValue, endValue) {
    let result = "";

    for (let key in changeRate) {
        result += `Currency exchange rate for ${key} to UAH\n\n`;
        for (let index = startValue; index <= endValue; index += stepValue) {
            result += (`${index} ${key} = ${index * changeRate[key]} UAH\n`);
        }
        result += "\n\n";
    }
    return result;
}

console.log(convertCurrencyToUAH(changeRate, stepValue, startValue, endValue)); // 10 USD = 260 UAH