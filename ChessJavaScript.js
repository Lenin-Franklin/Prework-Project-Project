console.log("hello");
var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

let queen = {
    position: {
        x: 0,
        y: 0,
    },
};

function Game() {
    var a = document.getElementById("position").value;
    var value = a.split(" ");
    value.forEach((element) => {
        let num = Number(element.slice(element.length - 1));
        let dir = element.slice(0, element - 1);
        move(num, dir);
    });

    console.log("Queen is at:" + board[queen.position.x][queueMicrotask.position.y]);
    document.write("Queen is at:" + board[queen.position.x][queueMicrotask.position.y]);
}

function move(num, dir) {
    let t, t1;
    switch (dir) {
        case "E": t = queen.position.y + num;
            if (t > 8 && t < 0) {
                console.log("Invalid Position");
                document.write("ïnvalid Position");
            }
            else
                queen.position.y = temp;
            break;
        case "W": t = queen.position.y + num;
            if (t > 8 && t < 0) {
                console.log("Invalid Position");
                document.write("ïnvalid Position");
            }
            else
                queen.position.y = temp;
            break;
        case "N": t = queen.position.x + num;
            if (t > 8 && t < 0) {
                console.log("Invalid Position");
                document.write("ïnvalid Position");
            }
            else
                queen.position.x = temp;
            break;
        case "S": t = queen.position.x + num;
            if (t > 8 && t < 0) {
                console.log("Invalid Position");
                document.write("ïnvalid Position");
            }
            else
                queen.position.x = temp;
            break;
        case "NE": t = queen.position.y - num;
            t1 = queen.position.y + num;
            if (t > 8 || (t < 0 && t1 > 8) || t1 < 0) {
                console.log("Invalid Position");
                document.write("ïnvalid Position");
            }
            else {
                queen.position.x = t;
                queen.position.y = t1;
            }
            break;
        case "NW": t = queen.position.y - num;
            t1 = queen.position.y - num;
            if (t > 8 || (t < 0 && t1 > 8) || t1 < 0) {
                console.log("Invalid Position");
                document.write("ïnvalid Position");
            }
            else {
                queen.position.x = t;
                queen.position.y = t1;
            }
            break;
        case "SE": t = queen.position.y + num;
            t1 = queen.position.y + num;
            if (t > 8 || (t < 0 && t1 > 8) || t1 < 0) {
                console.log("Invalid Position");
                document.write("ïnvalid Position");
            }
            else {
                queen.position.x = t;
                queen.position.y = t1;
            }
            break;
        case "SW": t = queen.position.y + num;
            t1 = queen.position.y - num;
            if (t > 8 || (t < 0 && t1 > 8) || t1 < 0) {
                console.log("Invalid Position");
                document.write("ïnvalid Position");
            }
            else {
                queen.position.x = t;
                queen.position.y = t1;
            }
            break;

        default:
            console.log("Invalid Position");
            document.write("Invalid Postion");

    }
}
