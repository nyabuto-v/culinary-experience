//Business logic

var selectedFile = document.getElementById('input').files[0];
    <input type="file" id="input" multiple onchange="handleFiles(this.files)"></input>

    //Dynamically adding a change listener
var inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
}

// The function below initiates the tab to open a recipe

$("button#search").click(function (event) {
    //Make sure .nav-bar-menu is the name of the button for this to work
    $(".nav-bar-menu").hide();

    //this initiates the clearing part of the function

    clearValues();
    player2.newGame(); //in place of player 2  and newGame replace these with values that this is t execute in the html

    //Here paste the tab names i.e. search box, find box, etc and include identifires e.g. class=(.), id=(#)
    $("#").empty();
    $("#").empty();
    $("#").empty();
    $(".").show();

});

// End of ths recipe function

//To hide elements in the HTML document

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}


//User Interface
$(document).ready(function () {
    $('#des').css('visibility', 'hidden');
});