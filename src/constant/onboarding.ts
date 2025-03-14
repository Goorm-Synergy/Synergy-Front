export const checkboxItems = [
  { id: 'AI', label: 'AI' },
  { id: '데이터 분석', label: '데이터 분석' },
  { id: '클라우드', label: '클라우드' },
  { id: 'DevOps', label: 'DevOps' },
  { id: '소프트웨어 개발', label: '소프트웨어 개발' },
  { id: 'UI/UX 디자인', label: 'UI/UX 디자인' },
  { id: '정보 보안', label: '정보 보안' },
  { id: '신기술 연구', label: '신기술 연구' },
  { id: '커리어 개발', label: '커리어 개발' },
];

export const jobs = [
  {
    value: '개발',
    text: '개발',
    children: [
      { value: '프론트엔드 개발자', text: '프론트엔드 개발자' },
      { value: '백엔드 개발자', text: '백엔드 개발자' },
      { value: '풀스택 개발자', text: '풀스택 개발자' },
      { value: 'AI/머신러닝 엔지니어', text: 'AI/머신러닝 엔지니어' },
      { value: '클라우드 엔지니어', text: '클라우드 엔지니어' },
      { value: 'DevOps 엔지니어', text: 'DevOps 엔지니어' },
      { value: '데이터 엔지니어', text: '데이터 엔지니어' },
      { value: '모바일 앱 개발자', text: '모바일 앱 개발자' },
      { value: '임베디드 시스템 개발자', text: '임베디드 시스템 개발자' },
      { value: '블록체인 개발자', text: '블록체인 개발자' },
    ],
  },
  {
    value: '디자인',
    text: '디자인',
    children: [
      { value: 'UI/UX 디자이너', text: 'UI/UX 디자이너' },
      { value: '그래픽 디자이너', text: '그래픽 디자이너' },
      { value: '웹 디자이너', text: '웹 디자이너' },
    ],
  },
  {
    value: '기획/운영',
    text: '기획/운영',
    children: [
      { value: '프로젝트 매니저', text: '프로젝트 매니저' },
      { value: '데이터 분석가', text: '데이터 분석가' },
      { value: '마케터', text: '마케터' },
    ],
  },
  {
    value: '기타',
    text: '기타',
    children: [
      { value: '학생', text: '학생' },
      { value: '취업 준비생', text: '취업 준비생' },
      { value: '연구원', text: '연구원' },
    ],
  },
];

// 희망 직무 리스트
export const hope_job = jobs.flatMap((job) => job.children);

// 경력 선택
export const experience_range = [
  { value: 'entry', text: '신입' },
  { value: '1-3', text: '1~2년 이하' },
  { value: '3-5', text: '3~4년 이하' },
  { value: '5+', text: '5년 이상' },
];

// 희망 회사 규모
export const company_type = [
  { value: 'startup', text: '스타트업' },
  { value: 'sme', text: '중소기업' },
  { value: 'mid', text: '중견기업' },
  { value: 'enterprise', text: '대기업' },
];

// 선호 기업 문화
export const company_culture = [
  { value: 'horizontal', text: '수평적인 조직 문화' },
  { value: 'growth', text: '개인의 성장을 중시' },
  { value: 'teamwork', text: '팀워크를 중시' },
  { value: 'flexible', text: '유연한 근무 환경' },
];

// 컨퍼런스 참여 목적
export const conference_purpose = [
  { value: 'networking', text: '네트워킹' },
  { value: 'learning', text: '최신 기술 트렌드 학습' },
  { value: 'career', text: '커리어 기회 탐색' },
  { value: 'project', text: '프로젝트 아이디어 구상' },
];

// 근무 지역
export const location = [
  { value: 'seoul', text: '서울' },
  { value: 'gyeonggi', text: '경기' },
  { value: 'gangwon', text: '강원' },
  { value: 'gyeongsang', text: '경상' },
  { value: 'jeolla', text: '전라' },
  { value: 'chungcheong', text: '충청' },
  { value: 'jeju', text: '제주' },
];

export const age_range = [
  { value: '20-24', text: '20~24세 이하' },
  { value: '25-29', text: '25~29세 이하' },
  { value: '30-34', text: '30~34세 이하' },
  { value: '35+', text: '35세 이상' },
];

export const education_levels = [
  { value: 'high_school', text: '고등학교 졸업' },
  { value: 'associate_degree', text: '2~3년제 대학 졸업' },
  { value: 'bachelor_degree', text: '4년제 대학 졸업' },
  { value: 'master_degree', text: '대학원 석사' },
  { value: 'doctorate', text: '박사' },
];
