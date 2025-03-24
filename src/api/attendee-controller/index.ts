import apiClient from '@utils/axios';

export const fetchMyProfile = async () => {
  try {
    const res = await apiClient.get('/api/v1/attendee/my');
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const fetchAttendeeDetailInfo = async (attendeeId: number) => {
  try {
    const res = await apiClient.get(`/api/v1/attendee/${attendeeId}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const fetchLinkedRecruiters = async () => {
  try {
    const res = await apiClient.get('/api/v1/attendee/liked-recruiters');
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const patchOnboardingInfos = async () => {
  try {
    const res = await apiClient.patch('/api/v1/attendee/onboarding/job-info', {
      'interestCodes': [0],
      'jobGroupCode': 0,
      'jobPositionCode': 0,
      'hiringInterested': true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const patchOnboardingDetails = async () => {
  try {
    const res = await apiClient.patch(
      '/api/v1/attendee/onboarding/job-info-details',
      {
        'desiredJobGroupCode': 0,
        'desiredJobPositionCode': 0,
        'educationLevelCode': 0,
        'ageGroupCode': 0,
        'techStacks': 'string',
        'experienceLevelCode': 0,
        'preferredRegionCodes': [0],
        'selfIntroduction': 'string',
        'profileImageUrl': 'string',
        'additionalInfo': 'string',
        'workplaceSelectionFactorCodes': [0],
        'preferredCorporateCultureCodes': [0],
        'conferencePurposeCodes': [0],
      },
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
