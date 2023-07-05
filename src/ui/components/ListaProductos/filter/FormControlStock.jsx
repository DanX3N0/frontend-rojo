import React from 'react'
import { FormControl,FormLabel,FormGroup,FormControlLabel,Typography} from '@mui/material'
import BpCheckbox from './BpCheckedIcon'
import CustomTypographySub from './CustomTypography'
import {defaultStyleFormItem ,DefaultTypographyItem,StylesFormGroupStock} from './stylesFilter'

export const FormControlStock = () => {
  return (
    <FormControl component="fieldset" variant="standard">
        
        <FormGroup sx={StylesFormGroupStock}>
        <FormLabel><CustomTypographySub subtitle={"Stock"}/></FormLabel>
          <FormControlLabel control={<BpCheckbox name="disponible"/>} label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'71px'}}>
                Disponible
              </Typography>} 
          sx={{...defaultStyleFormItem}}
          />
          <FormControlLabel control={<BpCheckbox  name="agotado" />}label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'58px'}}>
                Agotado
              </Typography>} 
          sx={{...defaultStyleFormItem}}/>
        </FormGroup>
      </FormControl>
      
  )
}



export default FormControlStock;