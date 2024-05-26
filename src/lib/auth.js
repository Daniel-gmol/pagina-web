// lib/auth.js
import axios from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function withAuth(context, cookie) {
  if (!cookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  try {
    const response = await axios.get(`${API_URL}api/check-auth`, {
      headers: {
        Cookie: cookie,
      },
      withCredentials: true,
    });
    return {
      props: { isAuthenticated: response.data.isAuthenticated },
    };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}