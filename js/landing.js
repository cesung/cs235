const buttonOnClick = () => {
    let timeEnd = new Date();
    console.log("Time elapsed for landing page ", (timeEnd.getTime() - timeBegin.getTime()) / 1000, "seconds");
    window.location.href = "./prev_test.html";
}

let timeBegin = new Date();