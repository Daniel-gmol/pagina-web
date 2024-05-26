// lib/auth.js
import axios from "axios";

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
    const response = await axios.get('http://localhost:3000/api/check-auth', {
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