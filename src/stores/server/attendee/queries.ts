import { fetchMyProfile } from '@api/attendee-controller';
import { fetchLinkedRecruiters } from '@api/attendee-controller/fetchLinkedRecruiters';
import { fetchMyPoints } from '@api/point-controller/fetchMyPoints';
import { queryOptions } from '@tanstack/react-query';

export const attendeeQueries = {
  all: () => ['attendee'],
  user: (identifier: string | null) => [...attendeeQueries.all(), identifier],
  users: (identifier: string | null) =>
    queryOptions({
      queryKey: [...attendeeQueries.user(identifier)],
      queryFn: () => fetchMyProfile(),
    }),
  points: (identifier: string | null) =>
    queryOptions({
      queryKey: [...attendeeQueries.user(identifier), 'my-point'],
      queryFn: () => fetchMyPoints(),
    }),
  linkedRecruiters: (identifier: string | null) =>
    queryOptions({
      queryKey: [...attendeeQueries.user(identifier), 'linked-recruiters'],
      queryFn: () => fetchLinkedRecruiters(),
    }),
};
