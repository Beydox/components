import { createRoot } from 'react-dom/client'
import { Box, Button, Card, CardContent, FormControl, Grid2, TextField, Typography } from "@mui/material"
import React from 'react'
import './options.css'
import { useState, useEffect } from 'react'
import { getStoredApiKey, setStoredApiKey } from '../utils/storage'


type FormState = 'ready' | 'saving'

const App = () => {
    const [apiKey, setApiKey] = useState<string | null>(null)
    const [formState, setFormState] = useState<FormState>('ready')

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setFormState('saving')
      setTimeout(() => {
        setFormState('ready')
        setStoredApiKey(apiKey)
      }, 500)
    }

    useEffect((() => {
      getStoredApiKey().then((key) => setApiKey(key))
    }), [])

    const isFieldDisabled = formState === 'saving'
    
    return (            
    <Box mx={'10%'} my={'2%'}>
      <Card>
        <CardContent>
          <Grid2 container direction={'column'} spacing={4}>
            <Typography variant='h5' sx={{ ml: 2}}>API key settings:</Typography>
            <FormControl  sx={{ ml: 1, width: 500 }} >
              <TextField id="outlined-basic" label='API key: '  variant="outlined" 
                value={apiKey}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApiKey(e.target.value)}
                disabled={isFieldDisabled}
                autoFocus
                />
              <Button 
                variant={formState === 'ready' ? 'contained' : 'outlined'} 
                sx={{ mt: 2, mb: 1, width: 150 }}
                onClick={handleSave}
              >{formState === 'ready' ? 'Save' : 'Saving...'}</Button>
            </FormControl>
            <Typography variant='body1' sx={{ml: 1}}><sup>*</sup> To obtain an API key, go to the official website and navigate to the API Console section</Typography>
          </Grid2>
        </CardContent>
      </Card>
    </Box>   
    )
}



const container = document.createElement('div')
const root = createRoot(container)
document.body.appendChild(container)
root.render(<App />)