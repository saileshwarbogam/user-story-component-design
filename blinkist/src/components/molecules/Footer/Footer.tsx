import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'

interface FooterData {
  data : string[];
}

export const Footer = (props : FooterData) => {
    
  return (
    <div>
        <Grid container>
            <Grid item>
                {/* footer data */}
            </Grid>

        </Grid>
    </div>
  )
}

