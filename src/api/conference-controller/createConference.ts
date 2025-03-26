import apiClient from '@utils/axios';

interface CreateConferenceRequest {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  type: string;
}

interface CreateConferenceResponse {
  status: string;
  code: number;
  message: string;
  data: {
    id: number;
  };
}

export const createConference = async (body: CreateConferenceRequest): Promise<CreateConferenceResponse> => {
  const { data } = await apiClient.post('/api/v1/conference', body);
  return data;
};
