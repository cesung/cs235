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

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const snackButtonOnClick = id => {
    button = document.getElementById(id);

    if (!button.style.borderColor) {
        if (numButtonSelected < 3) {
            button.style.border = "5px solid lightblue";
            numButtonSelected += 1
            snacksSelected.add(id);
            warningMessage.style.display = "none";
        } else {
            warningMessage = document.getElementById("warningMessage");
            warningMessage.style.display = "block";
        }
    } else {
        button.style.border = '';
        numButtonSelected -= 1
        snacksSelected.delete(id)
        warningMessage.style.display = "none";
    }    
}

const submitButtonOnClick = () => {

    if (snacksSelected.size == 0) {
        warningMessage = document.getElementById("warningMessage");
        warningMessage.innerHTML = "Oops! Choose at least one snack";
        warningMessage.style.display = "block";
        return ;
    }

    snacksSelectedIter = snacksSelected.values();
    while (true) {
        next = snacksSelectedIter.next()
        if (next.done) {
            break;
        }
        console.log(snacks[next.value])
    }

    window.location.href = "../html/ending.html";
}

let numButtonSelected = 0;
let snacksSelected = new Set();
let snacks;
const numSnacks = 8;

// on windows reload 
window.onload = function() {
    
    snacks = healthySnacks.concat(unhealthySnacks)
    console.log(snacks)

    // reset the selected button
    numButtonSelected = 0;

    shuffleArray(snacks)

    for (let idx = 0; idx < numSnacks; idx++) {
        document.getElementById(idx.toString() + "_name").innerHTML=snacks[idx][2]
        document.getElementById(idx.toString() + "_img").src=snacks[idx][1]
    }
}

  
