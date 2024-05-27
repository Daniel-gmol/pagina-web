
import { parseCookies } from "nookies";
import jwt from "jsonwebtoken";

export async function withAuth(context, defaultRedirect) {
  const cookies = parseCookies(context);
  const token = cookies.authToken;

  if (!token) {
    if (defaultRedirect) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else {
      return {
        props: { user: null },
      };
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return {
      props: { user: decoded },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}