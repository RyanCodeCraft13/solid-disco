function calculateLoan(){
    let amount = document.getElementById("amount").value;
    let interest = document.getElementById("interest").value;

    let total = amount * (interest / 100) + parseFloat(amount);

    document.getElementById("result").innerHTML = 
    "Total Payment: ₱" + total.toFixed(2);
}
