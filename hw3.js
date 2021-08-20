// -------------- HW3 ------------
// task 1 
 let s = 'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

    const sortList = (list) => {
        const listArray = list.toUpperCase().split(';').map(el => el = el.split(':').reverse());

        listArray.sort(function(a, b){
            if(a[0] < b[0]){ return -1; }
            if(a[0] > b[0]){ return 1; }
            if(a[1] < b[1]){ return -1; }
            if(a[1] > b[1]){ return 1; }
            return 0;
        });

        let result = '';

        result = listArray.reduce((acc, el) => `${acc}(${el[0]}, ${el[1]}) ` , '');
        result = result.trim();

        return result;
    }

    let listOfGuests = sortList(s);
    console.log(listOfGuests);

// task 2
    const rooms = [['XXX', 4], ['XXXXXX', 9], ['XX', 5]];

    const meeting = (rooms, need) => {
        let result;
        if(need === 0){
            result = 'Game on';
        }else {
            const freeChairs = [];
            let total = 0;
            for(let i = 0; i < rooms.length; i += 1){
                let occupants = rooms[i][0].length;
                let chairs = rooms[i][1];
                let free = chairs - occupants;
                freeChairs.push(free);                    
                total += free;
                if(total >= need){
                    return freeChairs;
                }
            }
            if(total < need){
                result = 'Not enough!';
            }else{
                result = freeChairs;
            }
        }
        return result;
    }

    console.log(meeting(rooms, 5));


// task 3
    const dots = [  [2,2],  
                    [2,8],
                    [5,5],
                    [6,3],
                    [6,7],
                    [7,4],
                    [7,8]   ];

    const findClosest = (array) => { 
        let distance = Infinity; 
        let result = []; 
        for(let i = 0; i < array.length-1; i += 1){ 
            for(let j = i+1; j < array.length; j += 1){ 
                    const a = Math.pow(array[i][0] - array[j][0], 2);
                    const b = Math.pow(array[i][1] - array[j][1], 2); 
                    const x = Math.sqrt(a + b); 
                    if(distance > x){ 
                        distance = x; 
                        result = [array[i], array[j]];                  
                }
            }
        }
        return result; 
    } 

    const closestDots = findClosest(dots);
    console.log(closestDots);
