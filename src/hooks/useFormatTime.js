const useFormatTime = () => {
    const getHour = (date) => {
        const hour = new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        return hour;
    };

    const getDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const time = new Date(date).toLocaleDateString('en-US', options);
        return time;
    };

    return [getHour, getDate];
};

export default useFormatTime;
