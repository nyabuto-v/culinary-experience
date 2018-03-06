var selectedFile = document.getElementById('input').files[0];
    <input type="file" id="input" multiple onchange="handleFiles(this.files)"></input>

    //Dynamically adding a change listener
var inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
}
