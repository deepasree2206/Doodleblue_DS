
setTimeout(() => {
    console.log("Step 1: Login");

    setTimeout(() => {
        console.log("Step 2: Get Profile");

        setTimeout(() => {
            console.log("Step 3: Get Courses");

            setTimeout(() => {
                console.log("Step 4: Complete");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);
