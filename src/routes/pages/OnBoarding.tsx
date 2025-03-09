import { useFunnel } from '@use-funnel/react-router-dom';
import {
  Jobs,
  MoreInfo,
  SelectInterested,
  SelectWork,
} from '../../types/funnel/onboarding.type';
import Interested from '@components/onboarding-process/Interested';
import { css } from '@emotion/react';
import Work from '@components/onboarding-process/Work';
import Info from '@components/onboarding-process/Info';

const OnBoarding = () => {
  const funnel = useFunnel<{
    interested: SelectInterested;
    work: SelectWork;
    info: MoreInfo;
  }>({
    id: 'onboarding-funnel',
    initial: {
      step: 'interested',
      context: {},
    },
  });

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: auto 0;
      `}
    >
      <funnel.Render
        interested={({ history }) => (
          <Interested
            onNext={(interested_list) =>
              history.push('work', { interested_list })
            }
          />
        )}
        work={({ context, history }) => (
          <Work
            interested_list={context.interested_list}
            onNext={(work) =>
              history.push('info', (prev) => ({ ...prev, work }))
            }
          />
        )}
        info={({ context }) => <Info {...context} />}
      />
    </div>
  );
};

export default OnBoarding;
