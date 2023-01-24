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
                                alt='fondo-curso'/>
                      <div className="text">
                        <div className="div-Texto">
                          <h2 className="titulo">{pBanner.name}</h2>
                          <p className="parrafo">{pBanner.description.slice(0, 100)}</p>
                        </div>
                        <div className="picture">
                          <section className="portada">
                            <img src={pBanner.mockups[0].der} alt="product-image" />
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
          
      </section>
  )
};

export default Banner;