/**
 * This context is used to feed client-side with runtime config.
 * For now with Next.js 12's SWC compiler, runtime environment variables on client side can no longer be accessed using (now badly) named publicRuntimeConfig
 * See : https://github.com/vercel/next.js/issues?q=is%3Aissue+publicruntimeconfig
 */
import React from 'react';

import { EnvConfig } from './types';

export const initialContext: EnvConfig = {
  basePath: '',
  disableReactDevTools: false,
};

const EnvContext = React.createContext(initialContext);

export const EnvProvider = EnvContext.Provider;

export default EnvContext;
