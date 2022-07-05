import { FormControl, InputLabel, Select } from '@mui/material'
import React from 'react'
import { Typography } from '../../atoms/Typography/Typography'

export const Delivery = () => {
  return (
    <div>
        <Typography children='Select speed delivery' variant=''/>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Name</InputLabel>
        <Select
          multiple
        //   onChange={handleChange}
        >
          {/* options */}
        </Select>
      </FormControl>
    </div>
  )
}
