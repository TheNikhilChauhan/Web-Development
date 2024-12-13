//example 1

/* document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this);

    //this points to the current context who is calling it.
  }); */

/* document.getElementById("changeTextButton").addEventListener("click", () => {
  console.log(this);

  //this points to the `global this`
}); */

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed";
  });

//Example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let list = document.getElementById("citiesList");
    list.firstElementChild.classList.add("highlight");
  });

/* 
  HTML is a markup language

  DOM is a processed Elements in document tree in memory.
  */

// Example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let order = document.getElementById("coffeeType").textContent;

  if (order === "Latte") {
    let coffee = document.getElementById("coffeeType");

    coffee.textContent = "Espresso";
    coffee.style.backgroundColor = "brown";
    coffee.style.padding = "5px";

    document.getElementById("changeOrder").innerHTML = "Change Order to Latte";
  } else {
    let coffee = document.getElementById("coffeeType");

    coffee.textContent = "Latte";
    coffee.style.backgroundColor = "blue";
    coffee.style.padding = "5px";

    document.getElementById("changeOrder").innerHTML =
      "Change Order to Espresso";
  }
});

// Example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  let list = document.getElementById("shoppingList");
  list.appendChild(newItem);
});

//Example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let lastChild = document.getElementById("taskList").lastElementChild;

    document.getElementById("taskList").removeChild(lastChild);
  });
