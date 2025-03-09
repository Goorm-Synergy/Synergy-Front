export const jobs = [
  {
    value: 1,
    text: '개발자',
    children: [
      { value: 'frontend', text: '프론트엔드 개발자' },
      { value: 'backend', text: '백엔드 개발자' },
      { value: 'fullstack', text: '풀스택 개발자' },
      { value: 'devops', text: '데브옵스 엔지니어' },
    ],
  },
  {
    value: 2,
    text: '디자이너',
    children: [
      { value: 'uiux', text: 'UI/UX 디자이너' },
      { value: 'graphic', text: '그래픽 디자이너' },
      { value: 'motion', text: '모션 그래픽 디자이너' },
    ],
  },
  {
    value: 3,
    text: 'PM',
    children: [
      { value: 'product', text: '프로덕트 매니저' },
      { value: 'project', text: '프로젝트 매니저' },
    ],
  },
  {
    value: 4,
    text: '마케터',
    children: [
      { value: 'digital', text: '디지털 마케터' },
      { value: 'brand', text: '브랜드 마케터' },
    ],
  },
];

export const hope_job = jobs.flatMap((job) => job.children);

export const expreience_range = [
  { value: 1, text: '신입' },
  { value: 2, text: '1~3년차' },
  { value: 3, text: '3~5년차' },
  { value: 4, text: '5~7년차' },
  { value: 5, text: '7~10년차' },
  { value: 6, text: '10년차 이상' },
];

export const salary_range = [
  { value: 1, text: '3000~5000 만원' },
  { value: 2, text: '5000~7000 만원' },
  { value: 3, text: '7000~10000 만원' },
  { value: 4, text: '10000 만원 이상' },
];

export const company_type = [
  { value: 1, text: '스타트업' },
  { value: 2, text: '중소기업' },
  { value: 3, text: '중견기업' },
  { value: 4, text: '대기업' },
];
