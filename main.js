const generateRandomNumber = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
// HM task 1 (return generated login 2-20 symbols)
const randomLogin = () => {
    const MIN_LEN_LOGIN = 2;
    const MAX_LEN_LOGIN = 20;
    const SYMBOLS_LOGIN_UPPER = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const SYMBOLS_LOGIN_LOWER = 'qwertyuiopasdfghjklzxcvbnm0123456789';
    const SYMBOLS_LOGIN_UPPER_LENGTH = SYMBOLS_LOGIN_UPPER.length - 1;
    const SYMBOLS_LOGIN_LOWER_LENGTH = SYMBOLS_LOGIN_LOWER.length - 1;

    const loginLength = generateRandomNumber(MIN_LEN_LOGIN, MAX_LEN_LOGIN);
    let login = '';

    let rand = generateRandomNumber(0, SYMBOLS_LOGIN_UPPER_LENGTH);
    login = `${ login }${ SYMBOLS_LOGIN_UPPER[rand] }`;

    for(let i = 0; i < loginLength-1; i += 1){
        let rand = generateRandomNumber(0, SYMBOLS_LOGIN_LOWER_LENGTH);
        login = `${ login }${ SYMBOLS_LOGIN_LOWER[rand] }`;
    }


    return login;
};
const loginRandom = randomLogin();

console.log('task 2 -> generate random login 2-20 symbols:')
console.log(loginRandom);


// HM task 2 (return generated password 8-12 symbols) 
const randomPassword = () => {
    const MIN_LEN_PASS = 8;
    const MAX_LEN_PASS = 12;
    const SYMBOLS_PASS = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789_-$#!~';
    const SYMBOLS_PASS_LENGTH = SYMBOLS_PASS.length - 1;

    const passwordLength = generateRandomNumber(MIN_LEN_PASS, MAX_LEN_PASS);
    let pass = '';

    for(let i = 0; i < passwordLength; i +=1){
        const rand = generateRandomNumber(0, SYMBOLS_PASS_LENGTH);
        pass = `${ pass }${ SYMBOLS_PASS[rand] }`
    }


    return pass;
};
const passRandom = randomPassword();

console.log('task 2 -> generate random password 8-12 symbols:')
console.log(passRandom);

// HM task 3 (return mixed array)
const mixArray = (array) => {
    let currntIndex = array.length;
    let mixedArray = array;

    while(currntIndex != 0){
        let randomIndex = Math.floor(Math.random() * currntIndex);
        currntIndex--;

        [mixedArray[currntIndex], mixedArray[randomIndex]] = [mixedArray[randomIndex], mixedArray[currntIndex]];
    }

    return mixedArray;
};

const sourceArray = [1, 2, 3, 4, 5];
let mixedArray = mixArray(sourceArray);

console.log('task 3 -> mix array:');
console.log(mixedArray);