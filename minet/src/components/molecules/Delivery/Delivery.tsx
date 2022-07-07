import { FormControl, InputLabel, Select } from '@mui/material'
import React, { useState } from 'react'
import { Typography } from '../../atoms/Typography/Typography'

interface DeliveryProps {
  deliveryOptions : string[];
}

export const Delivery = (props : DeliveryProps) => {
  const [deliveryOption, setDeliveryOption] = useState();
  const handleChange =(e:any) => {
    setDeliveryOption(e.target.value); 
  }
  return (
    <div>
        <Typography children='Select speed delivery' variant=''/>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Name</InputLabel>
        <Select
          value={deliveryOption}
          multiple
          onChange={handleChange}
        >
          {/* options */}
        </Select>
      </FormControl>
    </div>
  )
}
