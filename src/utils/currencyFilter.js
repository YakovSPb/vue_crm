export default function currencyFilter(value, currency = "RUB") {
    const symbols = {
        'RUB': '₽',
        'USD': '$',
        'EUR': '€'

    }
    if (value) {
        return value.toLocaleString() + ' ' + symbols[currency]
    }
}
