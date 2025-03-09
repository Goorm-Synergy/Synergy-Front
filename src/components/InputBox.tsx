import { css, FormControl, Input, InputLabel } from '@mui/material';

interface Props {
  label: string;
  id: string;
  isRequired: boolean;
  placeholder?: string;
}
const InputBox = (props: Props) => {
  const { label, id, isRequired, placeholder } = props;
  return (
    <FormControl
      required={isRequired}
      css={css`
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 10px;
      `}
    >
      <InputLabel>{label}</InputLabel>
      <Input id={id} placeholder={placeholder || ''} />
    </FormControl>
  );
};

export default InputBox;
