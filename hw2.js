// ----------------- HW2 ------------------
// task 1
const numeralCodes = [['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']];
const convertNum = (num) => {
    let result = '';
    const digits = num.toString().split('').reverse();
    
    for(let i = 0; i < digits.length; i += 1){
        result = `${numeralCodes[i][parseInt(digits[i])]}${result}`;
    }

    return result;
}

const conNum = convertNum(20);
// console.log(conNum);

// task 2
const tempConvert = (num, from, to) => {
    let result = 0;

    let convert = `${from}${to}`;
    console.log(convert);

    const xc = 32;
    const yc = 1.8;
    const xk = 459.67;
    const yk = 1.8;
    const zk = 273.15;

    if(convert == 'fc'){
        result = (num - xc) / yc;
    }else if(convert == 'cf'){
        result = num * yc + xc;
    }else if(convert == 'fk'){
        result = (num + xk) / yk;
    }else if(convert == 'kf'){
        result = num * yk - xk;
    }
    else if(convert == 'ck'){
        result = num + zk;
    }else if(convert == 'kc'){
        result = num - zk;
    }else{
        result = false;
    }
    
    return result;
}
let conv = tempConvert(100, 'c', 'f');
console.log(conv);