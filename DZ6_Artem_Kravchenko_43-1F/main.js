var inputText = document.getElementById("inputText");
var addButton = document.getElementById("addButton");
var clearButton = document.getElementById("clearButton");
var arrayText = document.getElementById("arrayText");

var textArray = [];

addButton.addEventListener("click", () => {
  var text = inputText.value;
  if (text.trim()) {
    textArray.push(text);
    addArray();
  }
  inputText.value = "";
});

function addArray() {
  arrayText.innerHTML = "";
  textArray.forEach((text) => {
    var reversedText = text.split("").reverse().join("");
    var div = document.createElement("div");

    div.setAttribute("class", "block_text");
    div.textContent = reversedText;
    arrayText.appendChild(div);
  });
}

clearButton.addEventListener("click", () => {
  textArray = [];
  addArray();
});
