import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { Button } from '../../atoms/Button/Button'

export const MyPortfolioCurrency = () => {
    let buttons = ["Bitcoin", "XRP", "Poladot", "Ethereum"]
    useEffect(() => {
            // get data
    }, [])
    const handleChange =()=> {
        
    }
  return (
    <div>
        <Grid container direction="row">
            {
                buttons.map(button=>(
                    <Grid item>
                        <Button children={button} variant="contained" onclick={handleChange}/>
                    </Grid>

                ))
            }
        </Grid>
    </div>
  )
}
