import axios from 'axios';
import {Card} from "@/data_models/CardProps";

interface useRequestProps {
    url: string;
    method: string;
    token: string;
}

const useRequest = async ({ url, method, token }: useRequestProps ): Promise<Card | Error> => {
    try{
        const response = await axios({
            url,
            method,
            headers:{
                accept: 'application/json',
                authorization: token
            }
        });

        return response.data;
    }catch(error){
        return Error('An unknown error occurred.');
    }
}

export default useRequest;