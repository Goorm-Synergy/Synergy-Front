import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@stores/client/useAuthStore';
import {
  loginRequestQuery,
  adminLoginRequestQuery,
  signupRequestQuery,
  requestAuthCodeQuery,
  confirmAuthCodeQuery,
  resetPasswordRequestQuery,
  resetPasswordQuery,
} from './queries';

// 참가자 로그인
export const useLoginMutation = () => {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: loginRequestQuery.queryKey,
    mutationFn: loginRequestQuery.queryFn,
    onSuccess: (data) => {
      setAuth({
        accessToken: data.accessToken,
        identifier: data.identifier,
        role: data.role,
      });
      navigate('/mypage');
    },
    onError: (error: any) => {
      alert(error.message || '로그인 중 오류가 발생했습니다.');
    },
  });
};

// 관리자 로그인
export const useAdminLoginMutation = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  return useMutation({
    mutationKey: adminLoginRequestQuery.queryKey,
    mutationFn: adminLoginRequestQuery.queryFn,
    onSuccess: (data) => {
      setAuth({
        accessToken: data.accessToken,
        identifier: data.identifier,
        role: data.role,
      });
      if (data.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/recruiter/list');
      }
    },
    onError: (error: any) => {
      alert(error.message || '관리자 로그인 중 오류가 발생했습니다.');
    },
  });
};

// 회원가입
export const useAuthSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: signupRequestQuery.queryKey,
    mutationFn: signupRequestQuery.queryFn,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      navigate('/onboarding');
    },
    onError: (error: any) => {
      alert(error.message || '회원가입 중 오류가 발생했습니다.');
    },
  });
};

// 인증번호 요청 관련 훅
export const useRequestAuthCodeMutation = () => {
  return useMutation({
    mutationKey: requestAuthCodeQuery.queryKey,
    mutationFn: requestAuthCodeQuery.queryFn,
    onSuccess: () => {
      alert('인증번호가 이메일로 발송되었습니다.');
    },
    onError: (error: any) => {
      alert(error.message || '인증번호 요청 중 오류가 발생했습니다.');
    },
  });
};

// 회원가입 인증번호 확인
export const useConfirmAuthCodeMutation = () => {
  return useMutation({
    mutationKey: confirmAuthCodeQuery.queryKey,
    mutationFn: confirmAuthCodeQuery.queryFn,
    onSuccess: () => {
      alert('인증번호가 확인되었습니다.');
    },
    onError: (error: any) => {
      alert(error.message || '인증번호 확인 중 오류가 발생했습니다.');
    },
  });
};

// 비밀번호 설정 인증번호
export const useResetPasswordRequestMutation = () => {
  return useMutation({
    mutationKey: resetPasswordRequestQuery.queryKey,
    mutationFn: resetPasswordRequestQuery.queryFn,
    onSuccess: () => {
      alert('인증번호가 이메일로 발송되었습니다.');
    },
    onError: (error: any) => {
      alert(error.message || '인증번호 요청 중 오류가 발생했습니다.');
    },
  });
};

//비밀번호 재설정 
export const useResetPasswordMutation = () => {
  const navigate = useNavigate();
  
  return useMutation({
    mutationKey: resetPasswordQuery.queryKey,
    mutationFn: resetPasswordQuery.queryFn,
    onSuccess: () => {
      alert('비밀번호가 성공적으로 변경되었습니다.');
      navigate('/participant-login');
    },
    onError: (error: any) => {
      alert(error.message || '비밀번호 변경 중 오류가 발생했습니다.');
    },
  });
};
