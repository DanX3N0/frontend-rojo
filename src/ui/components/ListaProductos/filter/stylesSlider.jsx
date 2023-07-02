import { styled } from '@mui/system'
import {Stack,Slider,Input} from '@mui/material'

export const CustomSlider = styled(Slider)(({ theme }) => ({
    color:theme.palette.secondary.main,
    width:'165.112px',
    height: '1.436px',
    '& .MuiSlider-track': {
      height:'3px'
    },

    '& .MuiSlider-thumb': {
      height: '15.792px',
      width: '15.792px',
      backgroundColor:theme.palette.secondary.main,
      border: 'none',
    },
  }));

export const StyledInputStack = styled(Stack)({
    height:'17.946px',
    width:'175.79px',
    position:'absolute',
    bottom:'75.05px',
    left:'32px',
    justifyContent:'space-between',
    
});

export const StyledInput = styled(Input)({
    width: '43.787px',
    '&.MuiInput-root': {
      border: 'none'
    },
    '&.MuiInput-underline:before, &.MuiInput-underline:after': {
      display: 'none'
    }
  });
export const StylesBoxSlider={
  position:'absolute',
  width:'165.112px',
  height:'15.792px',
  bottom:'50.21px',
  left:'32px'
}