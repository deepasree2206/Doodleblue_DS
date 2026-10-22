const numbers = [10, 20, 15, 5];

const result = numbers.some(function(num) {
    return num => 30;
});

console.log(result);