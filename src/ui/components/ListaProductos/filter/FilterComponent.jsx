import React from 'react'
import {Typography,Stack,FormLabel} from '@mui/material'
import {StyledContainerFilt,StylesLayoutTitle,StyledTitleFilt,StyledGroupFilt} from './stylesFilter'
import FilterIcon from '../icons/FilterIcon'
import CustomTypographySub from './CustomTypography'
import FormControlCategory from './FormControlCategory'
import FormControlMatter from './FormControlMatter'
import FormControlStock from './FormControlStock'
import DividerGroup from './DividerGroup'
import InputSlider from './Slider'

export default function FilterComponents() {
  return (
    <StyledContainerFilt>
       <StyledTitleFilt>
          <Stack sx={StylesLayoutTitle}>
            <Typography variant='titleFilt'>Filtrar</Typography>
            <FilterIcon/>
          </Stack>
        </StyledTitleFilt>
        <DividerGroup  sx={{top:'198px'}}/>
        <DividerGroup  sx={{top:'424px'}}/>
        <DividerGroup sx={{top:'535px'}}/>
        <StyledGroupFilt  elevation={0}>
        <FormControlCategory/>
        <FormControlMatter/>
        <FormControlStock/>
        <FormLabel><CustomTypographySub subtitle={'Cantidad'}/></FormLabel>
      </StyledGroupFilt>
      <InputSlider/>
    </StyledContainerFilt>
  )
}
