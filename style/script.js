
var mred = "#FF6974"
var mora = "#FF9252"
var myel = "#FFE879"
var mgre = "#AAEB6D"
var mblu = "#7591FF"


var waypoint = new Waypoint({
    element: document.getElementById('line1'),
    handler: function (direction) {
        if (direction == "down") {
            changeColor(mred, 'white');
        }
        else {
            changeColor('white', 'black');
            console.log("up 1");
        }

    }
}
)

var waypoint = new Waypoint({
    element: document.getElementById('line2'),
    handler: function (direction) {
        if (direction == "down") {
            changeColor(mora, 'white');
        }
        else {

            changeColor(mred, 'white');
            console.log("up 2");
        }

    }
}
)

var waypoint = new Waypoint({
    element: document.getElementById('line3'),
    handler: function (direction) {
        if (direction == "down") {
            changeColor(myel, 'white');
        }
        else {
            console.log("up 3");
            changeColor(mora, 'white');
        }

    }
}
)

var waypoint = new Waypoint({
    element: document.getElementById('line4'),
    handler: function (direction) {
        if (direction == "down") {
            changeColor(mgre, 'white');
        }
        else {
            console.log("up 4");
            changeColor(myel, 'white');
        }

    }
}
)
var waypoint = new Waypoint({
    element: document.getElementById('line5'),
    handler: function (direction) {
        if (direction == "down") {

            changeColor(mblu, 'white');

        }
        else {
            console.log("up 5");
            changeColor(mgre, 'white');
        }

    }
}
)


function changeColor(back, text) {
    // document.getElementById(id).style.property = new style 
    document.body.style.background = back;
    document.body.style.color = text;
}