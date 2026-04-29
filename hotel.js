// hotel.js

let total = 0;

function order(item, price) {
    total += price;
    console.log("Ordered: " + item);
    document.getElementById("total").innerText = "Total: ₹" + total;
}