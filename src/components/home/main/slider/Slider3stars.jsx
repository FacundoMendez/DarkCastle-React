import React, { Suspense} from 'react'
import "./slider.css"
import Spinner from '../../preload/spinner/Spinner';



const Slider3Stars = () => {

   
  return (
    <Suspense fallback={<Spinner/>}>
        <div className="containerSlider">
            <video src="https://res.cloudinary.com/dvrxw8fbg/video/upload/c_scale,h_1080,q_auto:eco,w_1920/v1668047422/darkCastle/relampago_vtfmzr.mp4" loop autoPlay></video>

            <div className="wrapper">
                <div className="slider">
                    <div className="slide">

                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047876/darkCastle/3starsRubi/Reaper3Stars_yubxhc.webp" alt="background Slider 2"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/v1668047874/darkCastle/3starsRubi/Warrior3Stars_mgchlx.png" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047876/darkCastle/3starsRubi/Reaper3Stars_yubxhc.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047873/darkCastle/3starsEsmerald/Sorcerer3Stars_mf25cp.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047873/darkCastle/3starsEsmerald/Warrior3Stars_gwkyjv.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047873/darkCastle/3starsEsmerald/Sorcerer3Stars_mf25cp.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047874/darkCastle/3starsObsidian/Reaper3Stars_ibngep.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047874/darkCastle/3starsObsidian/Warrior3Stars_xuphg2.webp"alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047876/darkCastle/3starsObsidian/Sorcerer3Stars_vqelod.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1080/v1668047870/darkCastle/3starsDiamante/Reaper3Stars_fl8qgd.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1080/v1668047870/darkCastle/3starsDiamante/Warrior3Stars_rqbfqg.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1080/v1668047870/darkCastle/3starsDiamante/Sorcerer3Stars_sbo4wz.webp" alt="background Slider 3"/>
                        
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047871/darkCastle/2starsRubi/Reaper2Stars_no5lan.webp" alt="background Slider 2"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047872/darkCastle/2starsRubi/Warrior2Stars_rmiyek.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047872/darkCastle/2starsRubi/Sorcerer2Stars_fs2anq.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047871/darkCastle/2starsEsmerald/Reaper2StarsPNG_frygba.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047869/darkCastle/2starsEsmerald/Warrior2Stars_xkftbj.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047869/darkCastle/2starsEsmerald/Sorcerer2StarsPNG_gjhwdr.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047872/darkCastle/2starsObsidian/Reaper2StarsPNG_xj3q8w.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047874/darkCastle/2starsObsidian/Warrior2StarsPNG_dsffg5.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047872/darkCastle/2starsObsidian/Sorcerer2StarsPNG_gtrqx8.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1080/v1668047870/darkCastle/2starsDiamante/Reaper2Stars_y7ytjg.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1080/v1668047868/darkCastle/2starsDiamante/Warrior2Stars_kkckvt.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1080/v1668047868/darkCastle/2starsDiamante/Sorcerer2Stars_nu1ojn.webp" alt="background Slider 3"/>

                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047873/darkCastle/1starRubi/Reaper1Star_plvorp.webp" alt="background Slider 2"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047868/darkCastle/1starRubi/Warrior1Star_f5spoj.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047868/darkCastle/1starRubi/Sorcerer1Star_yyw1sw.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047871/darkCastle/1starEsmerald/Warrior1Star_lqempg.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047871/darkCastle/1starEsmerald/Sorcerer1StarPNG_oqz1wz.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047870/darkCastle/1starEsmerald/Reaper1StarPNG_sjjfyd.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047872/darkCastle/1starsObsidian/Reaper1StarPNG_gvylbd.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047868/darkCastle/1starsObsidian/Sorcerer1StarsPNG_ycav9f.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047868/darkCastle/1starsObsidian/Warrior1StarPNG_xwyrvv.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1920,q_auto:best,w_1920/v1668047868/darkCastle/1starsObsidian/Warrior1StarPNG_xwyrvv.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1080/v1668047869/darkCastle/1starDiamante/Warrior1Star_fwycdb.webp" alt="background Slider 3"/>
                        <img className="imgSlider" src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1080,q_auto:best,w_1080/v1668047869/darkCastle/1starDiamante/Sorcerer1Star_kijpim.webp" alt="background Slider 3"/>

                    </div>
                </div>
            </div>
        </div>

    </Suspense>
  )
}

export default Slider3Stars