const originalPrice = 18900;
const dailyTicketPrice = 4900;
const ticketTypeSelect = document.getElementById('ticketSelect')
const discountTypeSelect = document.getElementById('discountSelect')
const finalPriceSpan = document.getElementById('finalPrice')

 function calculatePrice() {
    const ticketType = ticketTypeSelect.value;
    const discount = parseFloat(discountTypeSelect.value);
    
    let basePrice = ticketType === 'Day' ? dailyTicketPrice : originalPrice;

    let finalPrice = basePrice * (1 - discount);
    
    if (finalPrice < 0) {
        finalPrice = 0;
    }

    finalPriceSpan.textContent = finalPrice === 0 ? "0.00" : finalPrice.toFixed(2);
}

function handleTicketTypeChange() {
    if (ticketTypeSelect.value === 'Day') {
        for (let i = 0; i < discountTypeSelect.options.length; i++) {
            discountTypeSelect.options[i].disabled = true;
        }
        discountTypeSelect.value = '0';
        finalPriceSpan.textContent = dailyTicketPrice.toFixed(2);
    } else {
        for (let i = 0; i < discountTypeSelect.options.length; i++) {
            discountTypeSelect.options[i].disabled = false;
        }
        calculatePrice(); 
    }
}

ticketTypeSelect.addEventListener('change', handleTicketTypeChange);
discountTypeSelect.addEventListener('change', calculatePrice);

calculatePrice();