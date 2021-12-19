const monthly = document.getElementById('monthly');
const yearly = document.getElementById('yearly');
const monthlyPrices = document.getElementById('monthlyPrices');
const yearlyPrices = document.getElementById('yearlyPrices');

monthly.addEventListener('click', () => {
    monthly.classList.add('active')
    yearly.classList.remove('active')

    monthlyPrices.innerText = '$12.99 / month'
    yearlyPrices.innerText = '$22.99 / month'
})

yearly.addEventListener('click', () => {
    yearly.classList.add('active')
    monthly.classList.remove('active')

    monthlyPrices.innerText = '$9.99 / month'
    yearlyPrices.innerHTML = "$33.99 / yearly"
})