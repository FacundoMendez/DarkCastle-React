import React, {lazy} from 'react'
import NftData from './nftData/NftData'
import Pasillo from './pasillo/Pasillo'
import PresentDark from './presentDark/PresentDark'
import Slider3Stars from './slider/Slider3stars'

const main = () => {
  return (
    <main className='main'>
        <PresentDark/>
        <Slider3Stars/>
        <NftData/>
        <Pasillo/>
    </main>
  )
}

export default main