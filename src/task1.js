const chees = (width, height, symbol) => {
    let result = '';
    
    for (let i = 0; i < height; i += 1) {
        for (let j = 0; j < width; j += 1) {
            result = `${result}${symbol} `;
        }
        i % 2 ? result = `${result}\n` : result = `${result}\n `
    }

    return result;
}

const ch = chees(10, 5, '*');
console.log(ch);