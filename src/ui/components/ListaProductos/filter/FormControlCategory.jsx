import {useState} from 'react'
import { FormControl,FormLabel,FormGroup,FormControlLabel,Typography} from '@mui/material'
import BpCheckbox from './BpCheckedIcon'
import CustomTypographySub from './CustomTypography'
import {defaultStyleFormItem ,StylesFormGroupCategory,DefaultTypographyItem} from './stylesFilter'

export const FormControlCategory = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
 
  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup sx={StylesFormGroupCategory}>
        <FormLabel>
          <CustomTypographySub subtitle={"Categoria"} />
        </FormLabel>
        <FormControlLabel
          control={
            <BpCheckbox
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
            />
          }
          label={
            <Typography
              sx={{
                ...DefaultTypographyItem,
                color: checkboxes.checkbox1 ? "#000" : "filter.fLabel",
              }}
            >
              Mujer
            </Typography>
          }
          sx={{ ...defaultStyleFormItem }}
        />
        <FormControlLabel
          control={
            <BpCheckbox
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />
          }
          label={
            <Typography
              sx={{
                ...DefaultTypographyItem,
                color: checkboxes.checkbox2 ? "#000" : "filter.fLabel",
              }}
            >
              Hombre
            </Typography>
          }
          sx={{ ...defaultStyleFormItem }}
        />
        <FormControlLabel
          control={
            <BpCheckbox
              name="checkbox3"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
            />
          }
          label={
            <Typography
              sx={{
                ...DefaultTypographyItem,
                color: checkboxes.checkbox3 ? "#000" : "filter.fLabel",
              }}
            >
              Todos
            </Typography>
          }
          sx={{ ...defaultStyleFormItem }}
        />
      </FormGroup>
    </FormControl>
  );
}
  export default FormControlCategory
