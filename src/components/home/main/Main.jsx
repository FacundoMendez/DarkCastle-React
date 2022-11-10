import React, {lazy} from 'react'
const Pasillo = lazy(() => import ("./pasillo/Pasillo"))
const NftData = lazy(() => import ("./nftData/NftData"))
const PresentDark = lazy(() => import ("./presentDark/PresentDark"))
const Slider3Stars = lazy(() => import ("./slider/Slider3stars"))



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