import axios, {AxiosError} from 'axios';

export default async function handler(req: { url: string; method: any; headers: any; body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) {
  const apiUrl = 'https://proxy-rock.onrender.com' + req.url;
  try {
    const response = await axios({
      method: req.method,
      url: apiUrl,
      headers: {
        ...req.headers,
        host: new URL(apiUrl).host,
      },
      data: req.body
    });

    res.status(response.status).json(response.data);
  } catch (error: unknown ) {
    if (error instanceof AxiosError) {
      res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: 'Internal Server Error' });
    }
  }
}
