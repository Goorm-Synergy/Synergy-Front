import {
  useSuspenseQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { boothQueries } from './queries';
import { createBooth, deleteBooth } from '@api/booth-controller';
import { dashboardQueries } from '../dashboard/queries';
import { modifySession } from '@api/session-controller';

export const useBoothList = () => {
  return useSuspenseQuery(boothQueries.lists());
};

export const useBoothDetail = (boothId: number) => {
  return useSuspenseQuery(boothQueries.details(boothId));
};

export const useCreateBooth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createBooth(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(dashboardQueries.booths());
      alert('부스가 생성되었습니다.');
    },
  });
};

export const useDeleteBooth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (boothId: number) => deleteBooth(boothId),
    onSuccess: () => {
      queryClient.invalidateQueries(dashboardQueries.boothDetail());
      alert('부스가 삭제되었습니다.');
    },
  });
};

export const useModifyBooth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      boothId,
      formData,
    }: {
      boothId: number;
      formData: FormData;
    }) => modifySession(boothId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries(dashboardQueries.boothDetail());
      alert('부스가 수정되었습니다.');
    },
  });
};
