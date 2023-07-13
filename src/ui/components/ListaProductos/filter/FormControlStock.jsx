import{useState} from 'react'
import { FormControl,FormLabel,FormGroup,FormControlLabel,Typography} from '@mui/material'
import BpCheckbox from './BpCheckedIcon'
import CustomTypographySub from './CustomTypography'
import {defaultStyleFormItem ,DefaultTypographyItem,StylesFormGroupStock} from './stylesFilter'

export const FormControlStock = () => {
  const [checked, setChecked] = useState(false)
  const handleCheckbox1=(e)=>{
    setChecked(e.target.checked)
  }
  const [checker, setChecker] = useState(false)
  const handleCheckbox2=(e)=>{
    setChecker(e.target.checked)
  }
  return (
    <FormControl component="fieldset" variant="standard">
        
        <FormGroup sx={StylesFormGroupStock}>
        <FormLabel><CustomTypographySub subtitle={"Stock"}/></FormLabel>
          <FormControlLabel control={<BpCheckbox checked={checked} onChange={handleCheckbox1} />} label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:`${checked?'#000':'filter.fLabel'}`}}>
                Disponible
              </Typography>} 
          sx={{...defaultStyleFormItem}}
          />
          <FormControlLabel control={<BpCheckbox checked={checker} onChange={handleCheckbox2} />}label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:`${checker?'#000':'filter.fLabel'}`}}>
                Agotado
              </Typography>} 
          sx={{...defaultStyleFormItem}}/>
        </FormGroup>
      </FormControl>    
  )
}



export default FormControlStock;