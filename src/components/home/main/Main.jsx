import React from 'react'
import Pasillo from './pasillo/Pasillo'
import Present from './present/Present'

const main = () => {
  return (
    <main className='main'>
        <div className="container2">
          <h1>Container 2 (Presentacion) </h1>
        </div>
        <Present/>
        <Pasillo/>
    </main>
  )
}

export default main