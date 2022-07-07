import { Avatar } from '@material-ui/core'
import { Grid } from '@mui/material'
import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

export const Header = () => {

  return (
    <>
        <Grid container>
            <Grid item>
                <Typography children="Dashboard" variant='h3'/>
            </Grid>
            <Grid item>
                <Grid container>
                    <Grid item>
                        {/* Link ti sell page */}
                        <Button children="sell" onclick={()=>{}} variant="contained"/>
                    </Grid>
                    <Grid item>
                        {/* Link to buy page */}
                        <Button children="Buy" onclick={()=> {}} variant="contained"/>
                    </Grid>
                    <Grid item>
                        <Avatar src="user.png"/>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}
