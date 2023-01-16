import { NextApiRequest, NextApiResponse } from 'next';
import { EnvConfig } from '../../contexts/envContext';

const Env = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    const envConfig: EnvConfig = {
      baseURL: process.env.BASE_URL,
      disableReactDevTools: process.env.DISABLE_REACT_DEV_TOOLS,
    };
    res.send(envConfig);
  } catch (error: unknown) {
    // loggerInstance.error(error as Error, 'Cannot reach GraphQL API');
    res.send(500);
  }
};

export default Env;
