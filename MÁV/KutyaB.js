document.addEventListener('DOMContentLoaded', function() {
    const ticketType = document.getElementById('ticketSelect1');
    const basePrice = document.getElementById('finalPrice1');

    function updatePrice() {
        if (ticketType.value === 'Day1') {
            basePrice.textContent = '500';
        } else if (ticketType.value === 'Month1') {
            basePrice.textContent = '1890';
        }
    }

    ticketType.addEventListener('change', updatePrice);
    updatePrice();
});