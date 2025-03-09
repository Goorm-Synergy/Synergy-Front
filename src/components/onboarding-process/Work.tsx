import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  css,
} from '@mui/material';
import { useState } from 'react';
import { Jobs } from 'src/types/funnel/onboarding.type';
import { jobs } from 'src/constant/onboarding';
import SelectBox from '@components/SelectBox';

interface Props {
  interested_list: string[];
  onNext: (work: Jobs) => void;
}

const Work = ({ interested_list, onNext }: Props) => {
  const [selectedParent, setSelectedParent] = useState<number | null>(null);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [childOptions, setChildOptions] = useState<
    { value: string; text: string }[]
  >([]);

  const [agreeValue, setAgreeValue] = useState<string | null>(null);
  const [privateAgree, setPrivateAgree] = useState<boolean>(false); // ✅ 개인정보 동의 상태 추가

  // ✅ 선택된 직업 데이터 관리
  const work: Jobs = {
    parent: jobs.find((job) => job.value === selectedParent)?.text || '',
    child: selectedChild || '',
    employeement_agree: agreeValue === 'yes',
  };

  // ✅ 부모 직업 변경 핸들러
  const handleParentChange = (value: number) => {
    setSelectedParent(value);
    setSelectedChild(null);
    const selectedJob = jobs.find((job) => job.value === value);
    setChildOptions(selectedJob ? selectedJob.children : []);
  };

  // ✅ 완료 버튼 클릭 시 처리 로직
  const handleButtonClick = () => {
    if (agreeValue === 'no' && privateAgree)
      return alert(
        `(${interested_list.join(',')}, ${work.parent}, ${work.child}, ${work.employeement_agree}) 데이터 post, 홈으로 이동`,
      );

    return onNext(work);
  };

  return (
    <>
      <Typography
        variant="h1"
        css={css`
          font-size: 28px;
        `}
      >
        현재 어떤 일을 하고 계신가요?
      </Typography>

      <Typography
        variant="inherit"
        css={css`
          font-size: 17px;
          margin: 17px 0px 47px;
        `}
        color="#717171"
      >
        채용을 희망할 경우 알려주세요! <br />
        <br />
        관련 혜택을 제공해 드립니다.
      </Typography>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 30px;
        `}
      >
        {/* 부모 직업 선택 */}
        <SelectBox
          id="parent-job"
          label="직업"
          items={jobs}
          value={selectedParent ?? ''}
          onChange={(value) => handleParentChange(Number(value))}
        />

        {/* 자식 직무 선택 */}
        <SelectBox
          id="child-job"
          label="직무"
          items={childOptions}
          value={selectedChild ?? ''}
          onChange={(value) => setSelectedChild(value.toString())}
          disabled={childOptions.length === 0}
        />

        {/* 채용 희망 여부 선택 */}
        <FormControl>
          <FormLabel>채용 희망 여부</FormLabel>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={agreeValue}
            onChange={(e) => setAgreeValue(e.target.value)}
          >
            <FormControlLabel
              value="yes"
              control={<Radio size="small" />}
              label="예"
            />
            <FormControlLabel
              value="no"
              control={<Radio size="small" />}
              label="아니오"
            />
          </RadioGroup>
        </FormControl>

        {/* 개인정보 수집 동의 */}
        <FormControlLabel
          control={
            <Checkbox
              checked={privateAgree}
              onChange={(e) => setPrivateAgree(e.target.checked)}
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 20 },
                fontSize: '13px',
              }}
            />
          }
          label="개인 정보 수집에 동의합니다."
        />
      </div>

      {/* 버튼 클릭 시 조건에 따라 submit 또는 onNext 실행 */}
      <Button
        onClick={handleButtonClick}
        sx={{
          width: '100%',
          backgroundColor: '#ddd',
          marginTop: '50px',
        }}
      >
        완료
      </Button>
    </>
  );
};

export default Work;
