import apiClient from '@utils/axios';

export const fetchAttendeeDetailInfo = async (attendeeId: number | null) => {
  try {
    const res = await apiClient.get(`/api/v1/attendee/${attendeeId}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
