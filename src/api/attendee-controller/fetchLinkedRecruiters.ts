import apiClient from '@utils/axios';

export const fetchLinkedRecruiters = async () => {
  try {
    const res = await apiClient.get('/api/v1/attendee/liked-recruiters');
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
