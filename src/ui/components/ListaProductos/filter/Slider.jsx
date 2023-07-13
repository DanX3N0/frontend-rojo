import { useState } from 'react';
import Box from '@mui/material/Box';
import {CustomSlider,StyledInputStack,StyledInput,StylesBoxSlider} from "./stylesSlider"


export default function InputSlider() {
  const [value, setValue] = useState(200);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };


  return (
    <>
      <StyledInputStack direction='row'>
          <StyledInput 
          type="number"
          defaultValue={1}
          disabled
            />
        <StyledInput 
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="number"
           
          />
      </StyledInputStack>
      <Box sx={StylesBoxSlider}>
        <CustomSlider
        aria-label="pretto slider"
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="preto-slider"
        max={1000}
        min={1}
        step={10}
        /> 
        </Box>       
    </>

  );
}