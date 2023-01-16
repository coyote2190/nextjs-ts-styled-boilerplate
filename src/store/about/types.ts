import { PayloadAction } from '@reduxjs/toolkit';

export type AboutState = {
  name: string;
};

export type UpdateNamePayload = PayloadAction<{ name: string }>;
