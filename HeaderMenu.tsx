import React from 'react'
import { Box, Tooltip } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'


type HeaderMenuProps = {
    title?: string 
}

const HeaderMenu = ({title}: HeaderMenuProps) => {
  return (
    <Box>
    <Tooltip title={title} placement="right">
      <a href="../options.html" target="_blank">
        <TuneIcon></TuneIcon>
      </a>
    </Tooltip>
  </Box>
  )
}

export default HeaderMenu
