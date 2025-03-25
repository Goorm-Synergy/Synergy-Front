import { useSuspenseQuery } from '@tanstack/react-query';
import { attendeeQueries } from './queries';
import { useAuthStore } from '@stores/client/useAuthStore';

export const useAttendeeProfile = () => {
  const { identifier } = useAuthStore.getState().user;
  return useSuspenseQuery(attendeeQueries.users(identifier));
};

export const useAttendeePoints = () => {
  const { identifier } = useAuthStore.getState().user;
  return useSuspenseQuery(attendeeQueries.points(identifier));
};

export const useAttendeeLinkedRecruiters = () => {
  const { identifier } = useAuthStore.getState().user;
  return useSuspenseQuery(attendeeQueries.linkedRecruiters(identifier));
};

export const useAttendeeDetailInfo = (id: number) => {
  return useSuspenseQuery(attendeeQueries.detailInfo(id));
};
