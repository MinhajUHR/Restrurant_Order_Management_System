let orders = [];
let orderCount = 0;

function addOrder() {
    const orderID = document.getElementById("orderID").value;
    const tableNumber = document.getElementById("tableNumber").value;
    const itemsOrdered = document.getElementById("itemsOrdered").value;
    const quantity = document.getElementById("quantity").value;
    const studentDetails = document.getElementById("studentDetails");

    if (itemsOrdered === "Student-Package") {
        studentDetails.style.display = "block";
        const universityName = document.getElementById("universityName").value;
        const universityID = document.getElementById("universityID").value;

        if (universityName === "" || universityID.length !== 8) {
            alert("Please provide a valid University Name");
            return;
        }
    } else {
        studentDetails.style.display = "none";
    }

    const order = {
        orderID: orderID,
        tableNumber: tableNumber,
        itemsOrdered: itemsOrdered,
        quantity: quantity,
        totalPrice: calculateTotalPrice(itemsOrdered, quantity)
    };

    orders.push(order);
    orderCount++;
    document.getElementById("addOrderForm").reset();
}

function calculateTotalPrice(items, quantity) {
    let total = 0;
    const prices = {
        "Burger": 100,
        "Pizza": 250,
        "Pasta": 200,
        "Noodle": 50,
        "Lucchi": 30,
        "Student-Package": 150,
        "Lunch-Package": 300,
        "Family-Package": 700
    };

    if (prices[items]) {
        total = prices[items] * quantity;
    }
    return total;
}

function searchOrder() {
    const searchOrderID = document.getElementById("searchOrderID").value;
    const ordersList = document.getElementById("orders");
    ordersList.innerHTML = "";

    const foundOrder = orders.find(order => order.orderID == searchOrderID);

    if (foundOrder) {
        const li = document.createElement("li");
        li.textContent = `Order ID: ${foundOrder.orderID}, Table Number: ${foundOrder.tableNumber}, Items Ordered: ${foundOrder.itemsOrdered}, Quantity: ${foundOrder.quantity}, Total Price: ${foundOrder.totalPrice} tk`;
        ordersList.appendChild(li);
    } else {
        const li = document.createElement("li");
        li.textContent = "Order not found!";
        ordersList.appendChild(li);
    }
}

document.getElementById("itemsOrdered").addEventListener("change", function() {
    const itemsOrdered = document.getElementById("itemsOrdered").value;
    const studentDetails = document.getElementById("studentDetails");

    if (itemsOrdered === "Student-Package") {
        studentDetails.style.display = "block";
    } else {
        studentDetails.style.display = "none";
    }
});



