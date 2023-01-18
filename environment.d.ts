export {};

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: Record<
      string,
      Map<any, any> | (() => any)
    >;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Record<
      string,
      Map<any, any> | (() => any)
    >;
  }
}

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly ENV_VARIABLE: string;
    readonly NEXT_PUBLIC_ENV_VARIABLE: string;

    readonly DEVELOPMENT_ENV_VARIABLE: string;
    readonly NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE: string;

    readonly ENV_LOCAL_VARIABLE: string;
    readonly NEXT_PUBLIC_ENV_LOCAL_VARIABLE: string;

    readonly PRODUCTION_ENV_VARIABLE: string;
    readonly NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE: string;

    readonly NEXT_PUBLIC_DISABLE_REACT_DEV_TOOLS: string;
    readonly NEXT_PUBLIC_GRAPHQL_ENDPOINT: string;
  }
}
