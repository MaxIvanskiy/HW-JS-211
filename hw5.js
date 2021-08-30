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
                return result;
            }
        }
        result = 'invalid train ID';
        return result;
    }
}

let train1 = new Train('Lviv', 111, '15:30');
let train2 = new Train('Dnipro', 52, '11:00');
let train3 = new Train('Odessa', 21, '19:00');
let train4 = new Train('Odessa', 1, '17:30');
let train5 = new Train('Kyiv', 225, '21:45');
let train6 = new Train('TEST', 226, '23:45');

const allTrains = [train1, train2, train3, train4, train5];

let station = new RailwayStation(train6);

station.addTrain(allTrains);
console.log('Station Info : ', station);

station.sortTrainsByID();
station.sortTrainsByDestination();
let trainInfo = station.showTrainInfo(225);
console.log('Train info : ', trainInfo);

console.log('-------------------');
console.log('-------------------');

// --------------------------------------------------------------------

class HomeLibrary{
    books = [];
    static idCounter = 0;
    addBook(title, author, genre, year, language){
        HomeLibrary.idCounter += 1;
        let book = {
            id : HomeLibrary.idCounter,
            title : title,
            author : author,
            genre : genre,
            year : year,
            language : language
        };
        this.books.push(book);
    }
    deleteBook(id){
        for( let i = 0; i < this.books.length; i += 1){
            if(this.books[i].id == id){
                this.books.splice(i, 1);
                return true;
            }
        }
    }    
    findByYear(year){
        let result = [];
        for( let i = 0; i < this.books.length; i += 1){
            if(this.books[i].year == year){
                result.push(this.books[i]);
            }
        }
        return result;
    }
    findByAuthor(author){
        let result = [];
        for( let i = 0; i < this.books.length; i += 1){
            if(this.books[i].author == author){
                result.push(this.books[i]);
            }
        }
        return result;
    }
    findByTitle(title){
        let result = [];
        for( let i = 0; i < this.books.length; i += 1){
            if(this.books[i].title == title){
                result.push(this.books[i]);
            }
        }
        return result;
    }
    findByGenre(genre){
        let result = [];
        for( let i = 0; i < this.books.length; i += 1){
            if(this.books[i].genre == genre){
                result.push(this.books[i]);
            }
        }
        return result;
    }
    findBook(prop, value){
        let result = [];
        for( let i = 0; i < this.books.length; i += 1){
            if(this.books[i][prop] == value){
                result.push(this.books[i]);
            }
        }
        return result;
    }
    sortBooks(prop){
        let sortedBooks = this.books.slice();
        sortedBooks.sort(function(a, b){
            if(a[prop] > b[prop]) return 1;
            if(a[prop] < b[prop]) return -1;
            else return 0;
        });
        return sortedBooks;
    }
}

let lib = new HomeLibrary();

lib.addBook('Elon Musk [Paperback]', 'Vance A.', 'Biography', 2020, 'English');
lib.addBook('The Mythology Book', 'Dorling Kindersley', 'History', 2018, 'English');
lib.addBook('To Kill A Mockingbird', 'Harper Lee', 'American Classics', 1989, 'English');
lib.addBook('Grisha trilogy Book 1: Shadow and Bone', 'Leigh Bardugo', 'Fantasy', 2018, 'English');
lib.addBook('Fire and Blood: 300 Years Before A Game of Thrones', 'George Martin', 'Fantasy', 2020, 'English');
lib.addBook('THE HOBBIT & THE LORD OF THE RINGS BOXED SET', 'J. R. R. Tolkien', 'Fantasy', 2011, 'English');
lib.addBook('#GIRLBOSS', 'Sophia Amoruso', 'Biography', 2015, 'English');
lib.addBook('1001 Albums You Must Hear Before You Die', 'Robert Dimery', 'Non-Fiction Reading', 2018, 'English');
lib.addBook('1001 Beers You Must Try Before You Die', 'Adrian Tierney-Jones', 'Lifestyle', 2018, 'English');
lib.addBook('11.22.63', 'Stephen King', 'Thriller', 2012, 'English');

const booksByYear = lib.findByYear(2018);
const booksByAuthor = lib.findByAuthor('Stephen King');
const booksByGenre = lib.findByGenre('Fantasy');
const booksByTitle = lib.findByTitle('To Kill A Mockingbird');

const findBook = lib.findBook('year', 2018);

console.log('library info :', lib);

console.log('-------------------');
console.log('find by Year : ',booksByYear);
console.log('find by Author : ', booksByAuthor);
console.log('find by Genre : ', booksByGenre);
console.log('find by Title', booksByTitle);
console.log('-------------------');
console.log('find book : ', findBook);

console.log('-------------------');

const sortedB = lib.sortBooks('year');
console.log('library sorted :', sortedB);