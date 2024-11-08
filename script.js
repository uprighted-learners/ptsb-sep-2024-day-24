// menu items and prices
const prices = {
    burger: 5,
    fries: 3,
    drinks: 2,
    delivery: 5,
}

// access the form and summary div elements
const orderForm = document.getElementById("order-form")
const orderSummary = document.getElementById("summary")

// event listener for form submission
orderForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent for from refreshing the page on submit

    // get the values from the form
    const burgerQuantity = parseInt(document.getElementById('burger').value || 0);
    const friesQuantity = parseInt(document.getElementById('fries').value || 0);
    const drinksQuantity = parseInt(document.getElementById('drinks').value || 0);

    // calculate the total price
    const burgerTotal = burgerQuantity * prices.burger;
    const friesTotal = friesQuantity * prices.fries;
    const drinksTotal = drinksQuantity * prices.drinks;

    // get the delivery option and charge for it!
    const delivery = document.querySelector("input[name='delivery']:checked").value;
    const deliveryCost = delivery === "delivery" ? prices.delivery : 0

    // calculate the total price
    const orderTotal = burgerTotal + friesTotal + drinksTotal + deliveryCost;

    // make an object to hold the order details
    const order = {
        burger: burgerQuantity,
        fries: friesQuantity,
        drinks: drinksQuantity,
        delivery: delivery,
        total: orderTotal
    }

    // display the order summary
    displaySummary(order)
})


// function to display the order summary
function displaySummary(order) {
    orderSummary.innerHTML = `
        <div class="order-summary">
            <h2>Order Summary</h2>
            <p>Burger: ${order.burger}</p>
            <p>Fries: ${order.fries}</p>
            <p>Drinks: ${order.drinks}</p>
            <p>Delivery: ${order.delivery}</p>
            <hr>
            <p>TOTAL: $ ${order.total}</p>
        </div>
    `
}