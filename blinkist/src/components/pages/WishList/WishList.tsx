import { Typography } from '@material-ui/core'
import React from 'react'
import { Banner } from '../../molecules/Banner/Banner'
import { Header } from '../../molecules/Header/Header'
import { SearchBar } from '../../organisms/SearchBar/SearchBar'

export const WishList = () => {

   

  return (
    <div>
        <Header/>
        <Banner/>
        <Typography/>
        <SearchBar/>
        {/* Books' details */}
    </div>
  )
}
