import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { Button } from '../../atoms/Button/Button'

interface MyPortfolioCurrencyProps {
    buttons : string[];
}

export const MyPortfolioCurrency = (props : MyPortfolioCurrencyProps) => {
    // let buttons = ["Bitcoin", "XRP", "Poladot", "Ethereum"]
    useEffect(() => {
            // get data
    }, [])
    const handleChange =()=> {
        
    }
  return (
    <div>
        <Grid container direction="row">
            {
                props.buttons.map(button=>(
                    <Grid item>
                        <Button children={button} variant="contained" onclick={handleChange}/>
                    </Grid>

                ))
            }
        </Grid>
    </div>
  )
}
