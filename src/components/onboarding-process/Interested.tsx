import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  css,
} from '@mui/material';
import { useState } from 'react';

const items = [
  { id: 'ai', label: 'AI' },
  { id: 'machine-learning', label: '머신러닝' },
  { id: 'design', label: '디자인' },
  { id: 'big-data', label: '빅데이터' },
  { id: 'frontend', label: '프론트엔드 개발' },
  { id: 'backend', label: '백엔드 개발' },
  { id: 'cloud', label: '클라우드 기술' },
];

const Interested = (props: { onNext: (interested_list: string[]) => void }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <>
      <Typography variant="h1">
        김지원 님! <br />
        지금 정보를 입력하고, <br />
        포인트를 적립하여 <br />
        특별한 혜택을 누려보세요
      </Typography>

      <Typography
        variant="inherit"
        sx={{ color: 'gray', margin: '18px 0px 47px ' }}
      >
        관심 있는 분야를 선택해주세요.
      </Typography>

      <FormGroup
        row
        sx={{ columnGap: '20px', rowGap: '13px', maxWidth: '326px' }}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 16 },
                  fontSize: '20px',
                }}
              />
            }
            label={item.label}
            sx={{
              margin: 0,
              border: '1px solid #ddd',
              borderRadius: '20px',
              paddingRight: '13px',
            }}
          />
        ))}
      </FormGroup>

      <Button
        onClick={() => props.onNext(selectedItems)}
        sx={{
          width: '100%',
          backgroundColor: '#ddd',
          marginTop: '100px',
        }}
      >
        다음
      </Button>
    </>
  );
};

export default Interested;
