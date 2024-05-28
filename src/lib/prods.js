import axios from 'axios';

export async function getProds(context){
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    try{
        const response = await axios.get(`${API_URL}/api/products`)
        return {
            props: { data: response.data }
        }
    }catch(error){
        console.error(error.response?.data || "Something went wrong")
        return {
            props: { data: null }
        }
    }


}