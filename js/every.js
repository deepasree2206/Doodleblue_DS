const numbers = [10, 20, 30, 40, 50];

const result = numbers.every(function(num) {
    return num > 5;
});

console.log(result);