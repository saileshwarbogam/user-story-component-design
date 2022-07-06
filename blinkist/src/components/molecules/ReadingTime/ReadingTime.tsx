import React from 'react'
import { Icon } from '../../atoms/Icon/Icon'
import { Typography } from '../../atoms/Typography/Typography';

interface ReadingTimeProps {
  timeRead : string;
}
export const ReadingTime = (props : ReadingTimeProps) => {
  return (
    <div>
      <Typography children={props.timeRead} variant='h3'/>
    </div>
  )
}
