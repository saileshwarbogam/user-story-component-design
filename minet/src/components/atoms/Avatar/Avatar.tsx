import React from 'react'
import MuiAvatar from '@mui/material/Avatar';

interface AvatarProps {
    src: string;
}

export const Avatar = ({src}: AvatarProps) => {
  return (
    <MuiAvatar src={src}/>
  )
}
