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
