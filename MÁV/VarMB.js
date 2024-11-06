const eredetiPrice = 9450;
const napiTicketPrice = 999;
const jegyTypeSelect = document.getElementById('jegyKival')
const kedvezTypeSelect = document.getElementById('kedvezmenyKival')
const veglegPriceSpan = document.getElementById('veglegAr')

 function calculatePrice() {
    const ticketType = jegyTypeSelect.value;
    const discount = parseFloat(kedvezTypeSelect.value);
    
    let basePrice = ticketType === 'Napi' ? napiTicketPrice : eredetiPrice;

    let finalPrice = basePrice * (1 - discount);
    
    if (finalPrice < 0) {
        finalPrice = 0;
    }

    veglegPriceSpan.textContent = finalPrice === 0 ? "0.00" : finalPrice.toFixed(2);
}

function handleTicketTypeChange() {
    if (jegyTypeSelect.value === 'Napi') {
        for (let i = 0; i < kedvezTypeSelect.options.length; i++) {
            kedvezTypeSelect.options[i].disabled = true;
        }
        kedvezTypeSelect.value = '0';
        veglegPriceSpan.textContent = napiTicketPrice.toFixed(2);
    } else {
        for (let i = 0; i < kedvezTypeSelect.options.length; i++) {
            kedvezTypeSelect.options[i].disabled = false;
        }
        calculatePrice();
    }
}

jegyTypeSelect.addEventListener('change', handleTicketTypeChange);
kedvezTypeSelect.addEventListener('change', calculatePrice);

calculatePrice();