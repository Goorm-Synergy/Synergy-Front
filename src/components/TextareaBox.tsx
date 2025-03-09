import { TextField } from '@mui/material';

interface Props {
  label: string;
  id: string;
  isRequired: boolean;
  placeholder?: string;
}
const TextareaBox = (props: Props) => {
  const { label, id, isRequired } = props;
  return (
    <TextField id={id} label={label} multiline rows={5} required={isRequired} />
  );
};

export default TextareaBox;
