const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const tab = document.querySelector("table");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    if (Number(cashGiven.value) >=  Number(billAmount.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;  
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Wash Plates");
      tab.style.display="none";

    }
  } else {
    showMessage("Bill amount should be greater than zero");
    tab.style.display="none";
  }

});

function calculateChange(amountToBeReturned) {
   tab.style.display = "inline-table";
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    
    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

