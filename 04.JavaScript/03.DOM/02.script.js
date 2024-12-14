//example 6

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Welcome");
  });

// Example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    console.log(event.target);
    alert("You selected: " + event.target.textContent);
  }
});

//Example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    // console.log(feedback);

    document.getElementById("feedbackDisplay").textContent =
      "Feedback is: " + feedback;

    document.getElementById("feedbackInput").value = "";
  });

// Example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let element = document.getElementById("descriptionText");

    element.classList.toggle("highlight");
  });
