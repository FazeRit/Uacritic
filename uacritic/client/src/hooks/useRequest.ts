import {useCallback, useState} from "react";
import axios from "axios";

interface UseRequestProps {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    params?: Record<string, any>;
    token: string;
    withCredentials: boolean,
}

const useRequest = <T>({method, url, token, params, withCredentials}: UseRequestProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios({
                url,
                method,
                params,
                withCredentials,
                headers: {
                    "Accept": "application/json",
                    "Authorization": token
                },
            });

            if (response.status === 200) {
                setData(response.data);
            }
        } catch (error) {
            setError('Помилка завантаження даних');
        } finally {
            setIsLoading(false);
        }

    }, [method, url, token, params]);

    return {data, isLoading, error, fetchData};
};

export default useRequest;