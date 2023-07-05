import React from 'react'
import { FormControl,FormLabel,FormGroup,FormControlLabel,Typography,Divider} from '@mui/material'
import BpCheckbox from './BpCheckedIcon'
import CustomTypographySub from './CustomTypography'
import {defaultStyleFormItem ,DefaultTypographyItem,StylesFormGroupCategory} from './stylesFilter'

export const FormControlCategory = () => {
  return (
    <FormControl component="fieldset" variant="standard">
        <FormGroup sx={StylesFormGroupCategory}>
        <FormLabel><CustomTypographySub subtitle={"Categoria"}/></FormLabel>
          <FormControlLabel control={<BpCheckbox name="mujer"/>} label={
              <Typography  sx={{...DefaultTypographyItem, color:'filter.fLabel',width:'38px'}}>
                Mujer
              </Typography>} 
          sx={{...defaultStyleFormItem}}
          />
          <FormControlLabel control={<BpCheckbox  name="hombre" />}label={
              <Typography sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'54px'}}>
                Hombre
              </Typography>} 
          sx={{...defaultStyleFormItem}}/>
          <FormControlLabel control={<BpCheckbox name="todos" />}label={
              <Typography  sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'42px'}}>
                Todos
            </Typography>}
          sx={{...defaultStyleFormItem}}/>
        </FormGroup>
      </FormControl>
      
  )
}

export default FormControlCategory;
