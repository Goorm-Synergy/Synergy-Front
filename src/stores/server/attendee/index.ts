import { useSuspenseQuery } from '@tanstack/react-query';
import { attendeeQueries } from './queries';
import { useAuthStore } from '@stores/client/useAuthStore';

export const useAttendeeProfile = () => {
  useAuthStore.getState().setAuth({
    'accessToken': import.meta.env.VITE_AUTH_TOKEN,
    'identifier': 'jiwon.kim@example.com',
    'role': 'ATTENDEE',
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
