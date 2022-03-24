const buttonOnClick = () => {
    let timeEnd = new Date();
    console.log("Time elapsed for congratulations page ", (timeEnd.getTime() - timeBegin.getTime()) / 1000, "seconds");
    window.location.href = "./post_test.html";
}

let timeBegin = new Date();