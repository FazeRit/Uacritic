import {useCallback, useState} from "react";
import axios, {AxiosError} from "axios";

interface UseRequestProps {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    params?: Record<string, any>;
    token: string;
    body?: any,
    withCredentials: boolean,
}

const useRequest = <T>({method, url, token, params, body, withCredentials}: UseRequestProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any | null>(null);
    const [data, setData] = useState<T | null>(null);

    const fetchData = useCallback(async () => {
        const controller = new AbortController();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios({
                url,
                method,
                params,
                data: body,
                withCredentials,
                signal: controller.signal,
                headers: {
                    "Accept": "application/json",
                    "Authorization": token
                },
            });

            if (response.status === 200) {
                setData(response.data);
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Request canceled:", error.message);
            } else if (error instanceof AxiosError) {
                setError(error.response?.data || 'An error occurred');
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setIsLoading(false);
        }

        return () => {
            controller.abort();
        };
    }, [method, url, token, params, body, withCredentials]);

    return {data, isLoading, error, fetchData};
};

export default useRequest;
