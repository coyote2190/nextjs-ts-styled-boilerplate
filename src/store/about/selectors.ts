import { useAppSelector } from '..';

export const useGetAboutName = (): string => useAppSelector((state) => state.about.name);
