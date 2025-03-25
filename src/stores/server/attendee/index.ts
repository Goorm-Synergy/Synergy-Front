import { useSuspenseQuery } from '@tanstack/react-query';
import { attendeeQueries } from './queries';
import { useAuthStore } from '@stores/client/useAuthStore';

export const useAttendeeProfile = () => {
  useAuthStore.getState().setAuth({
    'accessToken': import.meta.env.VITE_AUTH_TOKEN,
    'identifier': 'jiwon.kim@example.com',
    'role': 'ATTENDEE',
    'id': 1,
  });

  const query = useSuspenseQuery(
    attendeeQueries.users(useAuthStore.getState().user.identifier),
  );

  return query;
};

export const useAttendeePoints = () => {
  const query = useSuspenseQuery(
    attendeeQueries.points(useAuthStore.getState().user.identifier),
  );

  return query;
};

export const useAttendeeLinkedRecruiters = () => {
  const query = useSuspenseQuery(
    attendeeQueries.linkedRecruiters(useAuthStore.getState().user.identifier),
  );

  return query;
};

export const useAttendeeDetailInfo = ({
  identifier,
  id,
}: {
  identifier: string | null;
  id: number | null;
}) => {
  const query = useSuspenseQuery(attendeeQueries.detailInfo(identifier, id));

  return query;
};
