const useStatus = () => {
    const getStatus = (status) => {
        switch (status) {
            case 1:
                return 'Pending';
            case 2:
                return 'Progress';
            case 3:
                return 'Completed';
            case 4:
                return 'Cancelled';
            default:
                break;
        }
    };

    return [getStatus];
};

export default useStatus;
