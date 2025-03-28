import { fetchMyProfile } from '@api/attendee-controller';
import {
  fetchSessionDashboard,
  fetchSessionDashboardDetails,
} from '@api/dashboard-controller';
import { queryOptions } from '@tanstack/react-query';

export const dashboardQueries = {
  all: () => ['dashboard'],
  session: () => [...dashboardQueries.all(), 'session'],
  sessions: () =>
    queryOptions({
      queryKey: [...dashboardQueries.session()],
      queryFn: () => fetchSessionDashboard(),
    }),
  sessionDetail: () =>
    queryOptions({
      queryKey: [...dashboardQueries.session(), 'detail'],
      queryFn: () => fetchSessionDashboardDetails(),
    }),
};
