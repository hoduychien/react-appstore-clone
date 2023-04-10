import { useEffect, useState } from 'react';

const useAsync = (service, dependencies) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(false);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            const data = await service();
            setData(data);
            setLoading(false);
        }

        loadData();
    }, dependencies);

    return [isLoading, data];
};

export default useAsync;
