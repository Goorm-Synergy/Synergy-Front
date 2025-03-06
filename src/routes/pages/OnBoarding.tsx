import { useFunnel } from '@use-funnel/react-router-dom';
import {
  Jobs,
  MoreInfo,
  SelectInterested,
  SelectWork,
} from '../../types/funnel/onboarding.type';
import Interested from '@components/onboarding-process/Interested';
import { css } from '@emotion/react';

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
        margin: auto 0px;
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
        work={({ history }) => (
          <Work onNext={(work) => history.push('info', { work })} />
        )}
        info={({ context }) => <Info {...context} />}
      />
    </div>
  );
};

export default OnBoarding;

const Work = (props: { onNext: (work: Jobs) => void }) => {
  return (
    <div>
      <h1>Work Step</h1>
      <button
        onClick={() =>
          props.onNext({ parent: '', child: '', employeement_agree: true })
        }
      >
        Next
      </button>
    </div>
  );
};

const Info = ({ ...props }) => {
  return (
    <div>
      <h1>Info Step</h1>
      <button onClick={() => console.log(props)}>submit</button>
    </div>
  );
};
