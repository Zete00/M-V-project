const originalPrice = 18900;
const dailyTicketPrice = 4900;
const ticketTypeSelect = document.getElementById('ticketSelect')
const discountTypeSelect = document.getElementById('discountSelect')
const finalPriceSpan = document.getElementById('finalPrice')

 // Function to calculate the final price
 function calculatePrice() {
    const ticketType = ticketTypeSelect.value;
    const discount = parseFloat(discountTypeSelect.value);
    
    // Determine the base price based on ticket type
    let basePrice = ticketType === 'Day' ? dailyTicketPrice : originalPrice;

    // Calculate the final price
    let finalPrice = basePrice * (1 - discount);
    
    // Ensure final price is not negative
    if (finalPrice < 0) {
        finalPrice = 0;
    }

    // Display final price, rounded to two decimal places
    finalPriceSpan.textContent = finalPrice === 0 ? "0.00" : finalPrice.toFixed(2);
}

// Function to check ticket type and manage discount options
function handleTicketTypeChange() {
    if (ticketTypeSelect.value === 'Day') {
        // Disable discount options and reset price
        for (let i = 0; i < discountTypeSelect.options.length; i++) {
            discountTypeSelect.options[i].disabled = true;
        }
        discountTypeSelect.value = '0'; // Set discount to 'None'
        finalPriceSpan.textContent = dailyTicketPrice.toFixed(2); // Reset to Napi Jegy price
    } else {
        // Enable discount options
        for (let i = 0; i < discountTypeSelect.options.length; i++) {
            discountTypeSelect.options[i].disabled = false;
        }
        calculatePrice(); // Recalculate the price based on selected discount
    }
}

// Event listeners for ticket type and discount type changes
ticketTypeSelect.addEventListener('change', handleTicketTypeChange);
discountTypeSelect.addEventListener('change', calculatePrice);

// Initialize the final price
calculatePrice();