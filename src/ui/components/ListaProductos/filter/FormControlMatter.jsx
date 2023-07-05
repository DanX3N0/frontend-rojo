import React from 'react'
import { FormControl,FormLabel,FormGroup,FormControlLabel,Typography} from '@mui/material'
import BpCheckbox from "./BpCheckedIcon"
import CustomTypographySub from './CustomTypography'
import {defaultStyleFormItem ,DefaultTypographyItem,StylesFormGroupMatter} from './stylesFilter'

export const FormControlMatter= () => {
  return (
    <FormControl component="fieldset" variant="standard">
    
        <FormGroup sx={StylesFormGroupMatter}>
        <FormLabel><CustomTypographySub subtitle={"Materia"} sx={{}}/></FormLabel>
            <FormControlLabel control={<BpCheckbox name="Metals"/>} label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'45px'}}>
                Metals
              </Typography>} 
            sx={{...defaultStyleFormItem}}/>

            <FormControlLabel control={<BpCheckbox name="Plastic" />} label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'45px'}}>
                Plastic
              </Typography>} 
            sx={{...defaultStyleFormItem}}/>

            <FormControlLabel control={<BpCheckbox  name="Glass" />}label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'37px'}}>
                Glass
              </Typography>}
            sx={{...defaultStyleFormItem}}/>

            <FormControlLabel control={<BpCheckbox name="ceramic" />}label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'56px'}}>
                Ceramic
            </Typography>}
            sx={{...defaultStyleFormItem}}/>
            
            <FormControlLabel control={<BpCheckbox name="ceramic" />}label={
              <Typography variant="subtitle1" sx={{...DefaultTypographyItem,color:'filter.fLabel',width:'57px'}}>
                Minerals
            </Typography>}
            sx={{...defaultStyleFormItem}}/>      
        </FormGroup>
      </FormControl>
  )
}

export default FormControlMatter;