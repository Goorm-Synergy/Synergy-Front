import { fetchSessionDetail, fetchSessionList, fetchParticipationRates } from '@api/session-controller';
import { queryOptions } from '@tanstack/react-query';

export const sessionQueries = {
  all: () => ['session'],
  list: () => [...sessionQueries.all(), 'list'],
  lists: () =>
    queryOptions({
      queryKey: [...sessionQueries.list()],
      queryFn: () => fetchSessionList(),
    }),
  detail: (sessionId: number) => [...sessionQueries.all(), 'detail', sessionId],
  details: (sessionId: number) =>
    queryOptions({
      queryKey: [...sessionQueries.detail(sessionId)],
      queryFn: () => fetchSessionDetail(sessionId),
    }),
    participationRates: () =>
      queryOptions({
        queryKey: [...sessionQueries.all(), 'participation'],
        queryFn: () => fetchParticipationRates,
      }),
};
