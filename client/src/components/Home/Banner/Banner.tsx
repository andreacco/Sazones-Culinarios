import cocinaInternacionalFondo from "../../../Images/cocina-internacional-fondo.jpg";
import bartenderFondo from "../../../Images/bartender-fondo.jpg";
import quesosFondo from "../../../Images/quesos-fondo.jpg";
import cateringFondo from "../../../Images/catering-fondo.jpg";
import portadaCocinaInternacional from "../../../Images/3-der.png";
import portadaBartender from "../../../Images/8-der.png";
import portadaQuesos from "../../../Images/11-der.png";
import portadaCatering from "../../../Images/12-der.png";
import '../../../scss/components/Banner.scss'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper scss
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from 'react-router-dom';



const Banner = () => {

  const navigate = useNavigate()

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
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
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