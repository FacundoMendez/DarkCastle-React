import React, {lazy, Suspense} from 'react';
import './App.css';
import Spinner from './components/home/preload/spinner/Spinner';


const PreloadCarga = lazy(() => import("./components/home/preload/PreloadCarga"))
const HeaderMain = lazy(() => import("./components/home/header/HeaderMain"))
const Main = lazy(() => import("./components/home/main/Main"))


function App() {
  return (
    <Suspense fallback = {<Spinner/>}>
      <div className='app'>

        <div className='header'>
            <PreloadCarga />
            <HeaderMain />
        </div>

        <div className='Main'>
            <Main />
        </div>

      </div>
    </Suspense>
  )
}

export default App;
