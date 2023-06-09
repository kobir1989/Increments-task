import { Button as MuiButton } from '@mui/material';
import styled from '@emotion/styled';

//Custom button
const CustomButton = styled(MuiButton)(({ theme }) => ({
  //Variant='contained'
  '&.MuiButton-contained': {
    fontFamily: 'Roboto',
    boxShadow: 'none',
    textTransform: 'capitalize',
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    padding: '0.93rem 1.87rem',
    fontWeight: '500',
    fontSize: '1.12rem',
    lineHeight: '1.31rem',
    borderRadius: '4px',
    '&.Mui-disabled': {
      background: theme.palette.primary.light,
    },
  },
}));

const Button = ({ children, ...props }) => {
  return (
    <CustomButton disableRipple {...props}>
      {children}
    </CustomButton>
  );
};

export default Button;
