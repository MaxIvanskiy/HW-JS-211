const transactions = [15, 150, 1500, 50000, 350, 13000, 2500, 24000];

const transactionsReview = transactions.reduce((acc, el) => {
    acc.sum += el;

    let limitType = el >= 1000 ? 'over' : 'under';
    acc.limit[limitType].total += 1;
    acc.limit[limitType].sum += el;
    acc.limit[limitType].operations.push(el);

    return acc;
}, {
    sum : 0,
    limit : {
        over : {
            total : 0,
            sum : 0,
            operations : []
        },
        under : {
            total : 0,
            sum : 0,
            operations : []
        }
    }
});

//Отфильтровать транзакции, получить только суммы, больше 1000
const operations = [15, 250, 300, 15000, 15000, 500, 12, 6000, 1500];

const operationsOverLimit = operations.filter(el => el >= 1000);
console.log('overLimit:' ,operationsOverLimit);

const operationsUnderLimit = operations.filter(el => el <= 1000);
console.log('undeLimit:', operationsUnderLimit);