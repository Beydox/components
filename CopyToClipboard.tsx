import React from "react"
import { Alert, Box, Button, Fade } from "@mui/material"
import { useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


type CopyToClipboardProps = {
    copyContent: string
}


const CopyToClipboard = ({copyContent}: CopyToClipboardProps) => {
    const [isCopied, setIsCopied] = useState<boolean>(false)
    const handleCopyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigator.clipboard.writeText(copyContent)
        setIsCopied(true)
        setTimeout(()=> {setIsCopied(false)}, 3000)
    }

    return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, mb: 2, ml: 1, height: 48, alignItems: 'center' }} >
        <Button variant='outlined' sx={{height: 40}} onClick={handleCopyClick}>
            <ContentCopyIcon></ContentCopyIcon>
            Copy
        </Button>
        <Fade in={isCopied} timeout={1500}>
            <Alert icon={<CheckIcon fontSize="inherit" />} 
                severity="success"
                sx={{ml: 3}}>
                Copied to clipboard!
            </Alert>
        </Fade>    
    </Box>
  )
}


export default CopyToClipboard
