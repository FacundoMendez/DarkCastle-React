import React, {useEffect} from 'react'
import "./nav.css"
import navScroll from './navScroll'

const Nav = () => {
    useEffect(()=>{
        navScroll()
    },[])
  return (
    <nav className="nav">
        <div className="nav-img">
            <img src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_480,q_auto:best,w_1817/v1668098585/darkCastle/nav_uq0u9z.webp" alt="Nav img" />
            <div className="nav-list">
                <ul className="list1">
                    <li><a href="/">Home</a> </li>
                    <li><a href="/">Chests</a> </li>
                    <li><a href="/">Cards</a></li>
                </ul>
                <ul className="list2">
                    <li><a href="/">Roadmap</a></li>
                    <li><a href="/">Whitelist</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav