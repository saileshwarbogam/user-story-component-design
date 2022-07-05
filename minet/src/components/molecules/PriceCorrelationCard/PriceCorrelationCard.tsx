import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { Avatar } from '../../atoms/Avatar/Avatar';

export const PriceCorrelationCard = () => {
  let data = [""];
  useEffect(() => {
    //get data
  }, []);
  return (
    <div>

      {
        data.map(data => (
          <Grid container direction="row">
            <Grid item>
              <Avatar src='crypto.png' />
            </Grid>
            <Grid item>
              {/* render crypto details */}
            </Grid>
          </Grid>
        ))
      }
    </div>
  )
}
