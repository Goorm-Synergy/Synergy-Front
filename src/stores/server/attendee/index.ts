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
    attendeeQueries.user(useAuthStore.getState().user.identifier),
  );

  return query;
};
