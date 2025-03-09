import InputBox from '@components/InputBox';
import SelectBox from '@components/SelectBox';
import TextareaBox from '@components/TextareaBox';
import { Button, css, Typography } from '@mui/material';
import {
  company_type,
  expreience_range,
  hope_job,
  salary_range,
} from 'src/constant/onboarding';

const Info = ({ ...props }) => {
  return (
    <>
      <Typography
        variant="h1"
        css={css`
          font-size: 28px;
        `}
      >
        채용 담당자를 위한 <br /> 추가 정보를 입력해주세요!
      </Typography>

      <Typography
        variant="inherit"
        css={css`
          font-size: 17px;
          margin: 17px 0px 47px;
        `}
        color="#717171"
      >
        작성한 내용을 채용 담당자가 볼 수 있습니다.
      </Typography>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 30px;
          height: 100%;
        `}
      >
        {/* 희망 직무 선택 */}
        <SelectBox
          id="hope_jop"
          label="희망 직무"
          items={hope_job}
          value={''}
          onChange={(value) => console.log(value)}
        />

        {/* 보유 기술 */}
        <InputBox
          label="보유 기술"
          id="skiils"
          isRequired={true}
          placeholder="ex) java, aws ..."
        />

        {/* 경력 */}
        <SelectBox
          id="experience"
          label="경력"
          items={expreience_range}
          value={''}
          onChange={(value) => console.log(value)}
        />

        {/* 경험 및 기타 정보 */}
        <InputBox
          label="경험 및 기타 정보"
          id="extra_expreience"
          isRequired={false}
        />

        {/* 희망 연봉 */}
        <SelectBox
          id="salary"
          label="희망 연봉"
          items={salary_range}
          value={''}
          onChange={(value) => console.log(value)}
        />

        {/* 희망 근무 지역 */}
        <InputBox label="희망 근무 지역" id="location" isRequired={false} />

        {/* 직장 선택 요소 */}
        <SelectBox
          id="company"
          label="희망 회사 규모"
          items={company_type}
          value={''}
          onChange={(value) => console.log(value)}
        />

        {/* 선호 하는 기업 문화 */}
        <InputBox label="선호 하는 기업 문화" id="culture" isRequired={false} />

        {/* 컨퍼런스 참여 목적 */}
        <InputBox label="컨퍼런스 참여 목적" id="purpose" isRequired={false} />

        {/* 자기소개서 */}
        <TextareaBox label="자기소개서" id="purpose" isRequired={false} />
      </div>

      {/* submit */}
      <Button
        // onClick={handleButtonClick}
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

export default Info;
