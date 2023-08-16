// data/rabbit-db.js

//these are all real bunnies
//i have known from the animal shelter!
const rabbits = [
    {rabbit: 'Flush', adopted: true},
    {rabbit: 'Carona', adopted: false},
    {rabbit: 'Bob', adopted: true},
    {rabbit: 'Emily', adopted: false},
    {rabbit: 'Sheepsquash', adopted: false},
    {rabbit: 'Mapingauti', adopted: true},
    {rabbit: 'Huey', adopted: true},
    {rabbit: 'Nate', adopted: false},
    {rabbit: 'Boma', adopted: true},
    {rabbit: 'Fennel', adopted: false}
];

module.exports = {
    getAll: function() {
        return rabbits;
    }
}