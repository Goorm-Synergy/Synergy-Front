import { useSuspenseQuery, useMutation } from '@tanstack/react-query';
import { sessionQueries } from './queries';
import { createSession } from '@api/session-controller';

export const useSessionList = () => {
  return useSuspenseQuery(sessionQueries.lists());
};

export const useSessionDetail = (sessionId: number) => {
  return useSuspenseQuery(sessionQueries.details(sessionId));
};

export const useCreateSession = () => {
  return useMutation({
    mutationFn: (formData: FormData) => createSession(formData),
  });
};
