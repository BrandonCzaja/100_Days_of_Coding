// Demonstrating clean code

const nemo = ["nemo"];

const findNemo = (array) => {
    let startTime = time.time();
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "nemo") {
            console.log("Found Nemo!");
        }
    }
    let endTime = time.time();
    console.log(`It took ${startTime - endTime} milliseconds to run my code`);
};

findNemo(nemo);
