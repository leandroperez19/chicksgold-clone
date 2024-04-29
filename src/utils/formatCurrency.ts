export const formatCurrency = (price: number, currency: string = 'USD', country: string = "en-EN", style: string = 'currency') => {
    if(isNaN(price)) return 0
    const result = new Intl.NumberFormat(country, { 
        style: style, 
        currency 
    }).format(price)
    return result
}