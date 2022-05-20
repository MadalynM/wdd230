const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function() {
    userInput = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const itemButton = document.createElement("button");

    listItem.textContent = userInput;
    itemButton.textContent = "❌"; 
    
    listItem.appendChild(itemButton);
    list.appendChild(listItem);

    itemButton.addEventListener("click", function() {
        list.removeChild(listItem);
    });

    input.focus();
});