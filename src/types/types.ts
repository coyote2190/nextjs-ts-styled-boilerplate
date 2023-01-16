import { NextPage } from 'next';
import React, { ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type DSFC = {
  children?: ReactNode;
};
