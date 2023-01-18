import { useAppDispatch } from 'store';
import { updateName, updatePerson } from './slice';
import { UpdatePersonPayload } from './types';

export const useUpdateName = (): ((name: string) => void) => {
  const dispatch = useAppDispatch();
  return (name: string) => {
    dispatch(updateName(name));
  };
};

export const useUpdatePerson = (): ((
  data: UpdatePersonPayload['payload']
) => void) => {
  const dispatch = useAppDispatch();
  return (data: UpdatePersonPayload['payload']) => {
    dispatch(updatePerson(data));
  };
};
