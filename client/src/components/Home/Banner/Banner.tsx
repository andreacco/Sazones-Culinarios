import { getBannerProducts } from '../../../redux/actions/index'
import '../../../scss/components/Banner.scss'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper scss
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



const Banner = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const bannerP = useSelector((state: any) => state.bannerProducts)
  console.log(bannerP, "BANEEEEEER");
  
  
  useEffect(() => {
    dispatch(getBannerProducts())
}, [dispatch])
  


  return (
    <section className="banner-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
          {bannerP.map((p: any) => p.map((pBanner: any) => {
                return (
                    <SwiperSlide>
                      <img src={pBanner.name.split(" ")[0] === "Barista" ? 
                                "https://res.cloudinary.com/dgcn9sprj/image/upload/v1674506242/Fondos%20Banner/barista2_oftj8t.jpg" : 
                                pBanner.name.split(" ")[0] === "Bartender" ?
                                "https://res.cloudinary.com/dgcn9sprj/image/upload/v1674506619/Fondos%20Banner/bartender_yofbku.jpg" :
                                pBanner.name.split(" ")[0] === "Chocofresas" ?
                                "https://res.cloudinary.com/dgcn9sprj/image/upload/v1674507534/Fondos%20Banner/chocofresas_wbgixr.jpg" :
                                pBanner.name.slice(13) === "Coreana Online" ?
                                "https://res.cloudinary.com/dgcn9sprj/image/upload/v1674508192/Fondos%20Banner/coreana_b6msma.jpg" :
                                "https://res.cloudinary.com/dgcn9sprj/image/upload/v1674510021/Fondos%20Banner/Nikkei_s1t07h.jpg"
                              } 
                                alt='cocina-internacional-wallpaper' />
                      <div className="text">
                        <div className="div-Texto">
                          <h2 className="titulo">{pBanner.name}</h2>
                          <p className="parrafo">{pBanner.description.slice(0, 100)}</p>
                        </div>
                        <div className="picture">
                          <section className="portada">
                            <img src={pBanner.mockups[0].der} alt="Cocina-internacional" />
                          </section>
                          <button className={`boton ${pBanner.name.length > 39 ? 
                                                      pBanner.name.slice(22,25) : 
                                                      pBanner.name.split(" ")[0] === "Curso" ?
                                                      pBanner.name.slice(13, 16) :
                                                      pBanner.name.split(" ")[0]}`} onClick={() => {navigate("/mangas/detail/62c855e1b65f7bbce6cadc81", { replace: true })}}>
                            <span>Más Información</span>
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                )
              })
            )
          }
        </Swiper>
          {/* <SwiperSlide>
            <img src={cocinaInternacionalFondo} alt='cocina-internacional-wallpaper' />
            <div className="text">
              <div className="div-Texto">
                <h2 className="titulo">Cocina internacional: 14 cursos incluidos</h2>
                <p className="parrafo">Aprende cocina internacional y conviértete en el mejor chef de todos!</p>
              </div>
              <div className="picture">
                <section className="portada">
                  <img src={portadaCocinaInternacional} alt="Cocina-internacional" />
                </section>
                <button className="boton boton-Cocina-internacional" onClick={() => {navigate("/mangas/detail/62c855e1b65f7bbce6cadc81", { replace: true })}}>
                  <span>Más Información</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bartenderFondo} alt='' />
            <div className="text">
              <div className="div-Texto">
                <h2 className="titulo">Bartender Profesional</h2>
                <p className="parrafo">Diviertete mientras aprendes una de las mejores profesiones en el mundo culinario!.</p>
              </div>
              <div className="picture">
                <section className="portada">
                  <img src={portadaBartender} alt="Bartender" />
                </section>
                <button className="boton boton-bartender" onClick={() => {navigate("/mangas/detail/62c8580cb65f7bbce6cadc88", { replace: true })}}>
                  <span>Más Información</span>
                </button>  
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={quesosFondo} alt='' />
            <div className="text">
              <div className="div-Texto">
                <h2 className="titulo">Elaboración de quesos artesanales</h2>
                <p className="parrafo">Empieza a elaborar quesos artesanales y emprende tu negocio exitoso este 2023!</p>
              </div>
              <div className="picture">
                <section className="portada">
                  <img src={portadaQuesos} alt="" />
                </section>
                <button className="boton boton-quesos" onClick={() => {navigate("/mangas/detail/62c8f5e7b65f7bbce6cadcce", { replace: true })}}>
                  <span>Más Información</span>
                </button>  
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cateringFondo} alt='' />
            <div className="text">
              <div className="div-Texto">
                <h2 className="titulo">Catering de eventos</h2>
                <p className="parrafo">Empieza un negocio exitoso y lidera el campo gastronómico!</p>
              </div>
              <div className="picture">
                <section className="portada">
                  <img src={portadaCatering} alt="" />
                </section>
                <button className="boton boton-catering" onClick={() => {navigate("/mangas/detail/62c8f5e7b65f7bbce6cadcce", { replace: true })}}> 
                  <span>Más Información</span>
                </button>  
              </div>
            </div>
          </SwiperSlide> */}
      </section>
  )
};

export default Banner;



// import '../../../scss/Components/Banner/Banner.scss'

// const Banner = () => {
//   return (
//     <div className='banner-container'>
//       Banner
//     </div>
//   )
// }

// export default Banner