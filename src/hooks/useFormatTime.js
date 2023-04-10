const useFormatTime = () => {
    const getHour = (date) => {
        const hour = new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        return hour;
    };

    return [getHour];
};

export default useFormatTime;
