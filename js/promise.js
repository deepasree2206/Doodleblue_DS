
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Marvel mission completed!");
    } else {
        reject("Marvel mission failed!");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
