import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

document.getElementById('wide')
document.getElementById('width')


document.getElementById('pic').width = document.getElementById("width").value;

document.getElementById("inkep").oninput = function() {
    let path = '../src/pics/'+document.getElementById('inkep').value;
    document.getElementById('pic').src = path;
};


document.getElementById("width").oninput = function() {
    document.getElementById('pic').width = document.getElementById("width").value;
};

document.getElementById("wide").oninput = function() {
    if(document.getElementById('color').value == ''){
        document.getElementById('pic').style.border = document.getElementById("wide").value + 'px solid black';
    }else{
        document.getElementById('pic').style.border = document.getElementById("wide").value + 'px solid';
        document.getElementById('pic').style.borderColor = document.getElementById("color").value;
    }
        
};

document.getElementById("color").oninput = function() {
    document.getElementById('pic').style.borderColor = document.getElementById("color").value;
};

document.getElementById('theme').addEventListener('click', function(){
        var element = document.body;
        element.classList.toggle("dark-mode");
     }
);
