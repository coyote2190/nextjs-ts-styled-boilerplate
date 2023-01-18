import { useAppSelector } from 'store';

export const useGetAboutName = (): string =>
  useAppSelector((state) => state.about.name);
