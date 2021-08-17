// HM task 1 (return generated login 2-20 symbols)


// HM task 2 (return generated password 8-12 symbols) 


// HM task 3 (return mixed array)
function mixArray(array){
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
console.log(mixedArray);