document.addEventListener('DOMContentLoaded', function() {
    const ticketType1 = document.getElementById('ticketSelect2');
    const basePrice1 = document.getElementById('finalPrice2');

    function updatePrice() {
        if (ticketType1.value === 'Day2') {
            basePrice1.textContent = '500';
        } else if (ticketType1.value === 'Month2') {
            basePrice1.textContent = '4950';
        }
    }

    ticketType1.addEventListener('change', updatePrice);
    updatePrice();
});