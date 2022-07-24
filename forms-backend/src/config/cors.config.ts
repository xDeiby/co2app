import { CorsOptions } from 'cors';

const whiteList = ['http://127.0.0.1:5173'];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whiteList.includes(origin)) callback(null, true);
    else callback(new Error('Not allowed origin by CORS'));
  },
};

export default corsOptions;
