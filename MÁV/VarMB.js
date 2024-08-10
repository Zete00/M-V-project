const eredetiPrice = 9450;
const napiTicketPrice = 999;
const jegyTypeSelect = document.getElementById('jegyKival')
const kedvezTypeSelect = document.getElementById('kedvezmenyKival')
const veglegPriceSpan = document.getElementById('veglegAr')

 // Function to calculate the final price
 function calculatePrice() {
    const ticketType = jegyTypeSelect.value;
    const discount = parseFloat(kedvezTypeSelect.value);
    
    // Determine the base price based on ticket type
    let basePrice = ticketType === 'Napi' ? napiTicketPrice : eredetiPrice;

    // Calculate the final price
    let finalPrice = basePrice * (1 - discount);
    
    // Ensure final price is not negative
    if (finalPrice < 0) {
        finalPrice = 0;
    }

    // Display final price, rounded to two decimal places
    veglegPriceSpan.textContent = finalPrice === 0 ? "0.00" : finalPrice.toFixed(2);
}

// Function to check ticket type and manage discount options
function handleTicketTypeChange() {
    if (jegyTypeSelect.value === 'Napi') {
        // Disable discount options and reset price
        for (let i = 0; i < kedvezTypeSelect.options.length; i++) {
            kedvezTypeSelect.options[i].disabled = true;
        }
        kedvezTypeSelect.value = '0'; // Set discount to 'None'
        veglegPriceSpan.textContent = napiTicketPrice.toFixed(2); // Reset to Napi Jegy price
    } else {
        // Enable discount options
        for (let i = 0; i < kedvezTypeSelect.options.length; i++) {
            kedvezTypeSelect.options[i].disabled = false;
        }
        calculatePrice(); // Recalculate the price based on selected discount
    }
}

// Event listeners for ticket type and discount type changes
jegyTypeSelect.addEventListener('change', handleTicketTypeChange);
kedvezTypeSelect.addEventListener('change', calculatePrice);

// Initialize the final price
calculatePrice();