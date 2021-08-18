// // ----------------- HW2 ------------------
// // task 1
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

// // task 2
const tempConvert = (num, from, to) => {
    let result = 0;

    let convert = `${from}${to}`;

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
    }else if(convert == 'ck'){
        result = num + zk;
    }else if(convert == 'kc'){
        result = num - zk;
    }else{
        result = false;
    }
    
    return result;
}
let conv = tempConvert(100, 'c', 'f');
// console.log(conv);


// task 1 copy from VladBraga
function convert(num) { 
    if(num < 1){ return "";}
    if(num >= 1000){ return "M" + convert(num - 1000);}
    if(num >= 900){ return "CM" + convert(num - 900);}
    if(num >= 500){ return "D" + convert(num - 500);}
    if(num >= 400){ return "CD" + convert(num - 400);}  
    if(num >= 100){ return "C" + convert(num - 100);}
    if(num >= 90){ return "XC" + convert(num - 90);}
    if(num >= 50){ return "L" + convert(num - 50);}
    if(num >= 40){ return "XL" + convert(num - 40);}
    if(num >= 10){ return "X" + convert(num - 10);}
    if(num >= 9){ return "IX" + convert(num - 9);}
    if(num >= 5){ return "V" + convert(num - 5);}
    if(num >= 4){ return "IV" + convert(num - 4);}
    if(num >= 1){ return "I" + convert(num - 1);}  
  }

//   console.log(convert(10));

// task 2 copy from Daria Frantsevich
const convertValue = (value, from, to) => { 
  
    const condition = {
      cf: value => (value * 9 / 5) + 32, 
      ck: value => value + 273.15, 
      fc: value => (value - 32) * 5 / 9, 
      kc: value => value - 273.15
    }   
    return condition[from + to]?.(value);
  } 

  // console.log(convertValue(10, 'c', 'f'));