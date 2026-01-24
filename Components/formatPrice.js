export const formatPrice = (amt) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amt);
