import {useEffect, useState} from 'react';
import useRequest from '@/hooks/useRequest';

interface AuthData {
    loggedIn: boolean;
}

const useAuth = () => {
    const [authData, setAuthData] = useState<AuthData>({loggedIn: false});
    const {data, isLoading, error, fetchData} = useRequest<AuthData>({
        url: '/api/user/check',
        method: 'GET',
        token: '',
        withCredentials: true,
    });

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        setAuthData({loggedIn: !!data});
    }, [data]);

    return {authData, isLoading, error};
};

export default useAuth;
