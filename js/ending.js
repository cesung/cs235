const buttonOnClick = () => {
    let timeEnd = new Date();
    console.log("Time elapsed for ending page ", (timeEnd.getTime() - timeBegin.getTime()) / 1000, "seconds");
    window.location.href = "./landing.html";
}

let timeBegin = new Date();