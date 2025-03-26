import { createConference } from '@api/conference-controller/createConference';

export const createConferenceQuery = {
  queryKey: ['createConference'],
  queryFn: createConference,
};
