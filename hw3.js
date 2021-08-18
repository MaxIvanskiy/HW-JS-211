// -------------- HW3 ------------
// task 1 
 let s = 'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

    const sortList = (list) => {
        // change source List to UPPERCASE
        // & convert source List to array
        let listUpper = list.toUpperCase();
        const listArray = listUpper.split(';');
        // convert each List name to array 
        // & make last name the first element of each array
        for(let i = 0; i < listArray.length; i +=1){
            listArray[i] = listArray[i].split(':');
            [listArray[i][0], listArray[i][1]] = [listArray[i][1], listArray[i][0]];
        }
        // sort list by last names
        for(let i = 0; i < listArray.length; i +=1){
            listArray.sort(function(a, b){
                if(a[0] < b[0]){ return -1; }
                else if(a[0] > b[0]){ return 1; }
                else{
                    if(a[1] < b[1]){ return -1; }
                    if(a[1] > b[1]){ return 1; }
                    return 0;
                }
            });
        }
        // convert sorted Array to String
        let result = '';
        for(let i = 0; i < listArray.length; i += 1){
            result = `${result}(${listArray[i][0]}, ${listArray[i][1]}) `;
        }
        result = result.slice(0, -1);

        return result;
    }

    let listOfGuests = sortList(s);
    console.log(listOfGuests);



// task 2 
// task 3