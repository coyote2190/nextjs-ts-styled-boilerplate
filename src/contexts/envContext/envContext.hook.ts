import React from "react";

import EnvContext from "./envContext.context";
import { EnvConfig } from "./types";

export const useEnvContext = (): EnvConfig => {
  const context = React.useContext(EnvContext);

  if (context === undefined) {
    throw new Error("useEnvContext must be used within a EnvConfigProvider");
  }

  return context;
};
