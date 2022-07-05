import React, { ReactElement } from 'react'

interface IconProps {
    icon : ReactElement
}

export const Icon = (icon : IconProps) => {
  return (
    {icon}
  )
}
