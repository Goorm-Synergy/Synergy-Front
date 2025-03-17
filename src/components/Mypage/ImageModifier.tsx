import { ButtonBase, css, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ImageModifier = () => {
  const { palette } = useTheme();

  return (
    <div
      css={css`
        display: flex;
        position: relative;
        aspect-ratio: 1;
        width: 100px;
      `}
    >
      <img
        src={'#'}
        alt="picture1"
        css={css`
          aspect-ratio: 1;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          object-fit: cover;
          background-color: black;
        `}
      />
      <ButtonBase
        css={css`
          padding: 5px;
          background-color: ${palette.icon.primary};
          border-radius: 100%;
          position: absolute;
          bottom: 0;
          right: 0;
        `}
      >
        <EditIcon
          css={css`
            width: 14.7px;
            height: 14.7px;
            color: ${palette.icon.tertiary};
          `}
        />
      </ButtonBase>
    </div>
  );
};

export default ImageModifier;
