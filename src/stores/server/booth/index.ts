import { useSuspenseQuery, useMutation } from '@tanstack/react-query';
import { boothQueries } from './queries';
import { createBooth } from '@api/booth-controller';

export const useBoothList = () => {
  return useSuspenseQuery(boothQueries.lists());
};

export const useBoothDetail = (boothId: number) => {
  return useSuspenseQuery(boothQueries.details(boothId));
};

export const useCreateBooth = () => {
  return useMutation({
    mutationFn: (formData: FormData) => createBooth(formData),
  });
};