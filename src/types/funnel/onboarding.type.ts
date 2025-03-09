export type Jobs = {
  parent: string;
  child: string;
  employeement_agree: boolean;
};

type Infos = {
  hope_job: string;
  skills: string[];
  experience: string;
  others: string;
  cover_letter: string;
  agree: boolean;
};

// 1. 아무것도 입력 안됨
export type SelectInterested = {
  interested_list?: string[];
};

// 2. 관심있는 분야만 선택됨
export type SelectWork = {
  interested_list: string[];
  work?: Jobs;
};

// 3. 관심있는 분야, 하고있는 일 선택됨
export type MoreInfo = {
  interested_list: string[];
  work: Jobs;
  info?: Infos;
};
