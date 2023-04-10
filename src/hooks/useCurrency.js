const useCurrency = () => {
    const formatCurrency = (num) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(num);
    };

    return [formatCurrency];
};

export default useCurrency;
