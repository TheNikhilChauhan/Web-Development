document.addEventListener("DOMContentLoaded", () => {
  const expenseName = document.getElementById("expense");
  const expenseAmount = document.getElementById("amount");
  const addButton = document.getElementById("addExpense-btn");
  const secondSection = document.getElementById("secondSection");
  const deleteButton = document.getElementById("deleteExp");
  const totalExpense = document.getElementById("totalExpense");
  const showExpense = document.getElementById("showExpense");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  expenses.forEach((exp) => addList(exp));

  addButton.addEventListener("click", () => {
    let name = expenseName.value.trim();
    let amount = parseFloat(expenseAmount.value);

    if (!name || isNaN(amount)) {
      alert("Please enter a valid expense name and amount.");
      return;
    }

    let expense = {
      id: Date.now(),
      name: name,
      amount: amount,
    };

    expenses.push(expense);

    save();

    addList(expense);

    expenseName.value = "";
    expenseAmount.value = "";
  });

  //total Expense
  function totalAmount() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalExpense.textContent = `Rs${total}`;
  }

  //render expense list

  function addList(exp) {
    const list = document.createElement("li");
    list.classList.add("renderExpense");

    list.innerHTML = `
    <span > ${exp.name} - Rs${exp.amount} </span>
    <button id="deleteExp" data-id="${exp.id}">Delete</button>
    `;
    if (list) {
      secondSection.classList.remove("hidden");
    }

    //delete event
    list.querySelector("#deleteExp").addEventListener("click", () => {
      deleteExpense(exp.id, list);
    });

    showExpense.appendChild(list);
    totalAmount();
  }

  function deleteExpense(expenseId, list) {
    expenses = expenses.filter((exp) => exp.id !== expenseId);

    list.remove();
    save();
    totalAmount();
  }

  //save to local storage
  function save() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
});
