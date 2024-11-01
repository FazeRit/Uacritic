import { useEffect, useState } from 'react';
import useRequest from '@/hooks/useRequest';
import axios from 'axios';

interface AuthData {
    loggedIn: boolean;
}

const useAuth = () => {
    const [authData, setAuthData] = useState<AuthData>({ loggedIn: false });
    const { data, isLoading: isCheckingAuth, error, fetchData } = useRequest<AuthData>({
        url: '/api/user/check',
        method: 'GET',
        token: '',
        withCredentials: true,
    });

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await fetchData(); 

                if (!data?.loggedIn) {
                    const refreshResponse = await axios.post('/api/user/refresh', { withCredentials: true });

                    if (refreshResponse.data.accessToken) {
                        setAuthData({ loggedIn: true });
                    }
                } else {
                    setAuthData({ loggedIn: true });
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
            }
        };

        checkAuth();
    }, []);

    return { authData, isLoading: isCheckingAuth, error };
};

export default useAuth;
