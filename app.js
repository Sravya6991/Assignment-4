const ratingData = [
    {restaurant: 'KFC', rating: 5}, 
    {restaurant: 'Burger King', rating: 4}, 
    {restaurant: 'KFC', rating: 3}, 
    {restaurant: 'Domino', rating: 2}, 
    {restaurant: 'Subway', rating: 3}, 
    {restaurant: 'Domino', rating: 1}, 
    {restaurant: 'Subway', rating: 4}, 
    {restaurant: 'Pizza Hut', rating: 5}
];

// find distict restaurants

let distinct = [];

for(let i = 0; i < ratingData.length; i++) {
    // -1 = doesnt exist
    if(distinct.indexOf(ratingData[i].restaurant) === -1) {
        distinct.push(ratingData[i].restaurant);
    }
}
console.log(distinct); // ['KFC', 'Burger King', 'Domino', 'Subway', 'Pizza hut'];

// ------------------------------------------------------
// calculate average rating for all restaurants

let newRatingData = [];

function getAverage() {
    let avg = 0;
    let count, rating;
    for(let i = 0; i < distinct.length; i++) {
        count = 0;
        rating = 0;
        for(let j = 0; j < ratingData.length; j++) {
            if(distinct[i] == ratingData[j].restaurant) {
                rating += ratingData[j].rating;   // kfc = 8; bk = 4; dominio = 3; subwy = 7; pizzhut = 5 
                count = count + 1;;
            }
        }
        // console.log(` ${distinct[i]} => Rating: ${rating}`);
        avg = rating/count;

        let myObj = {};
        myObj.restaurant = distinct[i];
        myObj.averageRating = avg;
        newRatingData.push(myObj);
    }
    console.log(newRatingData);
}

console.log(getAverage());

// avg rating greater than 4

let newRatingData_GreaterThan4 = [];
newRatingData.filter((item) => {
    if(item.averageRating >= 4) {
        newRatingData_GreaterThan4.push(item);
    }
});
console.log(newRatingData_GreaterThan4);

// -----------------------------------------------------------------------------------------
const baseTable = document.getElementById('base_table');

for(i = 0; i < ratingData.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = ratingData[i].restaurant;
    let td1 = document.createElement('td');
    td1.innerText = ratingData[i].rating;
    tr.appendChild(td);
    tr.appendChild(td1);
    baseTable.appendChild(tr);
}

const table = document.getElementById('table');

for(i = 0; i < newRatingData.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = newRatingData[i].restaurant;
    let td1 = document.createElement('td');
    td1.innerText = newRatingData[i].averageRating;
    tr.appendChild(td);
    tr.appendChild(td1);
    table.appendChild(tr);
}

const table1 = document.getElementById('table1');

for(i = 0; i < newRatingData_GreaterThan4.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = newRatingData_GreaterThan4[i].restaurant;
    let td1 = document.createElement('td');
    td1.innerText = newRatingData_GreaterThan4[i].averageRating;
    tr.appendChild(td);
    tr.appendChild(td1);
    table1.appendChild(tr);
}
