import { PayloadAction } from '@reduxjs/toolkit';

export type AboutState = {
  name: string;
  age: number;
  entreprise: string;
};

export type UpdatePersonPayload = PayloadAction<{
  name: string;
  age: number;
  entreprise: string;
}>;
export type UpdateNamePayload = PayloadAction<string>;
