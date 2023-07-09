import {useState} from 'react'
import { FormControl,FormLabel,FormGroup,FormControlLabel,Typography} from '@mui/material'
import BpCheckbox from "./BpCheckedIcon"
import CustomTypographySub from './CustomTypography'
import {defaultStyleFormItem ,DefaultTypographyItem,StylesFormGroupMatter} from './stylesFilter'

export const FormControlMatter= () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
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
      <FormGroup sx={StylesFormGroupMatter}>
        <FormLabel>
          <CustomTypographySub subtitle={"Materia"} />
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
              variant="subtitle1"
              sx={{
                ...DefaultTypographyItem,
                color: checkboxes.checkbox1 ? "#000" : "filter.fLabel",
              }}
            >
              Metals
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
              variant="subtitle1"
              sx={{
                ...DefaultTypographyItem,
                color: checkboxes.checkbox2 ? "#000" : "filter.fLabel",
              }}
            >
              Plastic
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
              variant="subtitle1"
              sx={{
                ...DefaultTypographyItem,
                color: checkboxes.checkbox3 ? "#000" : "filter.fLabel",
              }}
            >
              Glass
            </Typography>
          }
          sx={{ ...defaultStyleFormItem }}
        />

        <FormControlLabel
          control={
            <BpCheckbox
              name="checkbox4"
              checked={checkboxes.checkbox4}
              onChange={handleCheckboxChange}
            />
          }
          label={
            <Typography
              variant="subtitle1"
              sx={{
                ...DefaultTypographyItem,
                color: checkboxes.checkbox4 ? "#000" : "filter.fLabel",
              }}
            >
              Ceramic
            </Typography>
          }
          sx={{ ...defaultStyleFormItem }}
        />

        <FormControlLabel
          control={
            <BpCheckbox
              name="checkbox5"
              checked={checkboxes.checkbox5}
              onChange={handleCheckboxChange}
            />
          }
          label={
            <Typography
              variant="subtitle1"
              sx={{
                ...DefaultTypographyItem,
                color: checkboxes.checkbox5 ? "#000" : "filter.fLabel",
              }}
            >
              Minerals
            </Typography>
          }
          sx={{ ...defaultStyleFormItem }}
        />
      </FormGroup>
    </FormControl>
  );
}

export default FormControlMatter;