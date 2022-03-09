const healthySnacks = [ 
    // healthy, path, description
    [1, '../pictures/healthy/apple.png', 'apple'], 
    [1, '../pictures/healthy/banana.png', 'banana'],
    [1, '../pictures/healthy/milk.png', 'milk'],
    [1, '../pictures/healthy/strawberry.png', 'strawberry'],

]

const unhealthySnacks = [
    // unhealthy, path, description
    [0, '../pictures/unhealthy/donut.png', 'donut'],
    [0, '../pictures/unhealthy/french-fries.png', 'French Fries'],
    [0, '../pictures/unhealthy/ice-cream.png', 'Ice Cream'],
    [0, '../pictures/unhealthy/lollipop.png', 'Lollipop'],
]

const snackButtonOnClick = id => {
    if (flag === 1) {
        if ( (id === "btn1" && !isFlip) ||
             (id === "btn2" && isFlip)
        ) {
            //alert("Oops! Wrong Option!")
            document.getElementById("warningMessage").style.visibility = "visible";
            if (!isFlip) {
                document.getElementById("pic1").src = healthySnacks[stage][1];
                document.getElementById("name1").innerHTML = healthySnacks[stage][2];
                document.getElementById("pic2").src = unhealthySnacks[stage][1];
                document.getElementById("name2").innerHTML = unhealthySnacks[stage][2];
            } else {
                document.getElementById("pic1").src = unhealthySnacks[stage][1];
                document.getElementById("name1").innerHTML = unhealthySnacks[stage][2];
                document.getElementById("pic2").src = healthySnacks[stage][1];
                document.getElementById("name1").innerHTML = healthySnacks[stage][2];
            }
            isFlip = !isFlip;
        } else {
            audio.play();
            audio.onended = function() {
                window.location.href = "../html/congratulations.html";
            }
        }
    } else {
        if ((id === "btn1" && !isFlip) ||
            (id === "btn2" && isFlip)
        ) {
            audio.play();
            audio.onended = function() {
                window.location.href = "../html/congratulations.html";
            }
        } else {
            //alert("Oops! Wrong Option!")
            document.getElementById("warningMessage").style.visibility = "visible";
            if (!isFlip) {
                document.getElementById("pic1").src = unhealthySnacks[stage][1];
                document.getElementById("name1").innerHTML = unhealthySnacks[stage][2];
                document.getElementById("pic2").src = healthySnacks[stage][1];
                document.getElementById("name2").innerHTML = healthySnacks[stage][2];
            } else {
                document.getElementById("pic1").src = healthySnacks[stage][1];
                document.getElementById("name1").innerHTML = healthySnacks[stage][2];
                document.getElementById("pic2").src = unhealthySnacks[stage][1];
                document.getElementById("name2").innerHTML = unhealthySnacks[stage][2];
            }
            isFlip = !isFlip;
        }
    }
}

let stage = 3;
let flag;
let isFlip = false;
let audio = new Audio('../audio/correct.mp3');

window.onload = function() {
    document.getElementById(stage.toString()).style.visibility = "visible";
    flag = Math.floor(Math.random() * (2));
    if (flag == 1) {
        document.getElementById("pic1").src = unhealthySnacks[stage][1];
        document.getElementById("name1").innerHTML = unhealthySnacks[stage][2];
        document.getElementById("pic2").src = healthySnacks[stage][1];
        document.getElementById("name2").innerHTML = healthySnacks[stage][2];
    } else {
        document.getElementById("pic1").src = healthySnacks[stage][1];
        document.getElementById("name1").innerHTML = healthySnacks[stage][2];
        document.getElementById("pic2").src = unhealthySnacks[stage][1];
        document.getElementById("name2").innerHTML = unhealthySnacks[stage][2];
    }
}