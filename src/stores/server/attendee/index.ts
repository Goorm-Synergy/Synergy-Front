import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { attendeeQueries } from './queries';
import { useAuthStore } from '@stores/client/useAuthStore';
import {
  patchOnboardingDetails,
  patchOnboardingInfos,
} from '@api/attendee-controller';
import { postQna, postQrVerify } from '@api/session-verify-controller';

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

export const useOnboardingPatch = () => {
  const queryClient = useQueryClient();
  const { identifier, id } = useAuthStore.getState().user;

  const basicMutation = useMutation({
    mutationFn: ({ form }: any) => patchOnboardingInfos({ form }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: attendeeQueries.user(identifier),
      });
    },
  });

  const detailMutation = useMutation({
    mutationFn: ({ form }: any) => patchOnboardingDetails({ form }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: attendeeQueries.detailInfo(id),
      });
    },
  });

  return { basicMutation, detailMutation };
};

export const useSessionVerify = () => {
  const queryClient = useQueryClient();
  const { identifier } = useAuthStore.getState().user;

  const qrMutation = useMutation({
    mutationFn: ({
      sessionId,
      qrCode,
      redirectTo,
    }: {
      sessionId: number;
      qrCode: string;
      redirectTo: string;
    }) => postQrVerify(sessionId, qrCode, redirectTo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: attendeeQueries.user(identifier),
      });
    },
  });

  return { qrMutation };
};

export const useSessionQna = () => {
  const queryClient = useQueryClient();
  const { identifier } = useAuthStore.getState().user;

  const qnaMutation = useMutation({
    mutationFn: ({
      sessionId,
      content,
    }: {
      sessionId: number;
      content: string;
    }) => postQna(sessionId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: attendeeQueries.user(identifier),
      });
    },
  });

  return { qnaMutation };
};
