var foodieContainer = document.getElementById("food");
var foodie = document.getElementById("foodie");

foodie.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://www.edamam.com/c35f9e5d');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});
function renderHTML(data) {
    foodieContainer.insertAdjacentHTML('beforeend', 'testing 123');
}