let num = 0;

let counter = document.createElement("h2");
counter.id = "num";
counter.innerHTML = num;
document.body.appendChild(counter);

var buttons = document.createElement('div');
buttons.className = "buttons";
buttons.id = "buttons";
document.body.appendChild(buttons);


var add = document.createElement('button');
add.innerHTML = "+";
add.className = "add";
document.getElementById('buttons').appendChild(add);


var sub = document.createElement('button');
sub.innerHTML = "-";
sub.className = "subtract";
document.getElementById('buttons').appendChild(sub);


add.addEventListener('click', function() {
    num++;
    document.getElementById("num").innerHTML = num;
});

sub.addEventListener('click', function() {
    num--;
    document.getElementById("num").innerHTML = num;
});