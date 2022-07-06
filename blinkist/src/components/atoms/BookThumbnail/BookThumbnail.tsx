import React from 'react'
interface BookThumbnailProps {
  src : string;
  onclick? : ()=>void;
}
export const BookThumbnail = ({src, onclick}: BookThumbnailProps) => {
  return (
    <>  
      <img src={src} alt="" onClick={onclick} />
    </>
  )
}
