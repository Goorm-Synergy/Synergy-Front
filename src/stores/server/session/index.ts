import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { sessionQueries } from './queries';

export const useSessionList = () => {
  return useSuspenseQuery(sessionQueries.lists());
};

export const useSessionDetail = (sessionId: number, enabled: boolean) => {
  return useQuery({
    ...sessionQueries.details(sessionId),
    enabled,
  });
};
