const buttonOnClick = () => {
    let timeEnd = new Date();
    console.log("Time elapsed for instructions page ", (timeEnd.getTime() - timeBegin.getTime()) / 1000, "seconds");
    window.location.href = "./train.html";
}

let timeBegin = new Date();