import { fetchMyProfile } from '@api/attendee-controller';
import { fetchMyPoints } from '@api/point-controller/fetchMyPoints';
import { queryOptions } from '@tanstack/react-query';

export const attendeeQueries = {
  all: () => ['attendee'],
  user: (identifier: string | null) =>
    queryOptions({
      queryKey: [...attendeeQueries.all(), identifier],
      queryFn: () => fetchMyProfile(),
    }),
  points: (identifier: string | null) =>
    queryOptions({
      queryKey: [...attendeeQueries.all(), 'my-point', identifier],
      queryFn: () => fetchMyPoints(),
    }),
};
