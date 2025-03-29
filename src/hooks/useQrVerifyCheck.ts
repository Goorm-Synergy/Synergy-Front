import { useBoothVerify, useSessionVerify } from '@stores/server/attendee';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

interface Params {
  isAlreadyVerifyed: boolean; // 이전에 이미 QR인증되었는지 확인
  onQrSuccess: () => void; // QR에 성공했을때 호출 될 클라이언트 로직
  isBooth?: boolean;
}

export const useQrVerifyCheck = ({
  isAlreadyVerifyed,
  onQrSuccess,
  isBooth,
}: Params) => {
  const { id } = useParams();
  const { qrMutation: sessionQrMutation } = useSessionVerify();
  const { qrMutation: boothQrMutation } = useBoothVerify();
  const [searchParams, _] = useSearchParams();
  const [isChecked, setIsChecked] = useState(isAlreadyVerifyed);

  useEffect(() => {
    const qrCode = searchParams.get('qrCode');

    const verifyQR = async () => {
      if (isAlreadyVerifyed) return;
      if (qrCode && isBooth) {
        try {
          alert('booth QR 체크인 mutate!!');
          // await boothQrMutation.mutateAsync({
          //   boothId: Number(id),
          //   qrCode,
          //   redirectTo: `/booth/${id}?qrCode=${qrCode}`,
          // });
          onQrSuccess();
        } catch (err) {
          alert('잘못된 QR 요청입니다.');
        }
      }
      if (qrCode && !isBooth) {
        try {
          await sessionQrMutation.mutateAsync({
            sessionId: Number(id),
            qrCode,
            redirectTo: `/session/${id}?qrCode=${qrCode}`,
          });
          onQrSuccess();
        } catch (err) {
          alert('잘못된 QR 요청입니다.');
        }
      }
    };
    verifyQR();
    setIsChecked(true);
  }, []);

  return { isChecked };
};
