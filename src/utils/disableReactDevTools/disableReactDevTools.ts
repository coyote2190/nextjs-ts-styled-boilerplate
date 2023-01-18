// Heavily inspired from : https://github.com/fvilers/disable-react-devtools/blob/master/index.js

import envStringToBoolean from 'utils/envStringToBoolean';

declare var window: any;

export const disableReactDevTools = (
  mustDisableReactDevTools = 'true'
): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'object') {
    return;
  }

  if (envStringToBoolean(mustDisableReactDevTools)) {
    // Replace all global hook properties with a no-op function or a null value
    for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      if (prop === 'renderers') {
        // prevents console error when dev tools try to iterate of renderers
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
        continue;
      }
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] =
        typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] === 'function'
          ? Function.prototype
          : null;
    }
  }
};
