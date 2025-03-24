import { fetchMyProfile } from '@api/attendee-controller';
import { queryOptions } from '@tanstack/react-query';

export const attendeeQueries = {
  all: () => ['attendee'],
  user: (identifier: string | null) =>
    queryOptions({
      queryKey: [...attendeeQueries.all(), identifier],
      queryFn: () => fetchMyProfile(),
    }),
};
