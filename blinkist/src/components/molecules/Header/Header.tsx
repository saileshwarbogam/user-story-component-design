import React from 'react'
import { Blinkist } from '../../atoms/Buttons/Blinkist/Blinkist'
import { Explore } from '../../atoms/Buttons/Explore/Explore'
import { HIghlights } from '../../atoms/Buttons/Highlights/HIghlights'
import { MyLibrary } from '../../atoms/Buttons/MyLibrary/MyLibrary'

export const Header = () => {
  return (
    <div>
        <Blinkist/>
        <Explore/>
        <MyLibrary/>
        <HIghlights/>
    </div>
  )
}
