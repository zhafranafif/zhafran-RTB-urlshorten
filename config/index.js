import development from '@config/development';
import production from '@config/production';

const nodeENV = process.env.NODE_ENV || 'development';

const env = { production, development }[nodeENV];

const config = {
  api: {
    host: env.API_HOST,
  },
  key: {
    host: env.VITE_API_KEY,
  },
};

export default config;
