import React from 'react'
import { Button } from '../../atoms/Button/Button'
interface ExploreProps {
  data : string[];
  onclick: ()=>void;
}
export const Explore = ({data} : ExploreProps) => {
  return (
    <>
      <Button children='Explore' variant='' onclick={()=>{}}/>
      {/* Render explore menu */}
    </>
  )
}
