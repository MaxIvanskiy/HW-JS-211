class Train {
    constructor(dest, id, depTime){
        this.destination = dest;
        this.idNumber = id;
        this.departTime = depTime;
    }
}

class RailwayStation {
    trains = [];

    addTrain(train){
        Array.isArray(train) ? this.trains.push(...train) : this.trains.push(train);
    }
    sortTrainsByID(){
        this.trains.sort(function(a, b){
            if(a.idNumber > b.idNumber) return 1;
            if(a.idNumber < b.idNumber) return -1;
            else return 0;
        });
    }
    sortTrainsByDestination(){
        this.trains.sort(function(a, b){
            if(a.destination > b.destination) return 1;
            if(a.destination < b.destination) return -1;
            if(a.departTime > b.departTime) return 1;
            if(a.departTime < b.departTime) return -1;
            else return 0;
            })
        };
    showTrainInfo(id){
        let result;
        for(let i = 0; i < this.trains.length; i += 1){
            if(this.trains[i].idNumber == id){
                result = this.trains[i];
                console.log(result);
                return result;
            }
        }
        console.log('invalid train ID');
        return false;
    }
}

let train1 = new Train('Lviv', 111, '15:30');
let train2 = new Train('Dnipro', 52, '11:00');
let train3 = new Train('Odessa', 21, '19:00');
let train4 = new Train('Odessa', 1, '17:30');
let train5 = new Train('Kyiv', 225, '21:45');

const allTrains = [train1, train2, train3, train4, train5];

let station = new RailwayStation();

station.addTrain(allTrains);
station.sortTrainsByID();
station.sortTrainsByDestination();
station.showTrainInfo(21);

console.log(station);