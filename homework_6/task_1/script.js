function removeSymbols(inputPhrase, symbols) {
    if (typeof inputPhrase !== 'string' || !Array.isArray(symbols)) {
        return 'Invalid input';
    }
    const result = inputPhrase.split('').filter((symbol) => !symbols.includes(symbol)).join('');
    return result;

}

let phrase = prompt('Enter a phrase:');

if (!phrase) {
    alert('Please enter a valid phrase');
} else {
    let symbolsInput = prompt('Enter symbols to remove, separate without spaces:');
    
    if (!symbolsInput) {
        alert('Please enter symbols to remove');
    } else {
        let symbols = symbolsInput.split('');
        alert(removeSymbols(phrase, symbols));
    }
}