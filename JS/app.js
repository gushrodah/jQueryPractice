var txt;

function preload(){
    txt = loadStrings("ajax/data.txt");
}

function setup(){
    //console.log(txt);
    input = createInput();
    input.changed(newText);
}

function newText(){
    console.log(input.value);
}
