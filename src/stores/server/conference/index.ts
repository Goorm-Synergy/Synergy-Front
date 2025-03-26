import { useMutation } from '@tanstack/react-query';
import { createConferenceQuery } from './queries';

export const useCreateConferenceMutation = () => {
  return useMutation({
    mutationKey: createConferenceQuery.queryKey,
    mutationFn: createConferenceQuery.queryFn,
    onSuccess: (data) => {
      alert('컨퍼런스가 성공적으로 등록되었습니다.');
    },
    onError: (error: any) => {
      alert(error.message || '컨퍼런스 등록 중 오류가 발생했습니다.');
    },
  });
};
