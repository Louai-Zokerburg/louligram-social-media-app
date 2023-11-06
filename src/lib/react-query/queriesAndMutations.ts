import { INewUser } from '@/types';
import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { createUserAccount } from '../appwrite/api';

export const useCreateUserAccountMutaion = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};
