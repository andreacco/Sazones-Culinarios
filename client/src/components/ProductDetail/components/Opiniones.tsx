// import myImage from '../../../../../assets/1664093866852.png';
// import '../../../../../Styles/AboutMe/BannerAboutMe.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import h1 from '../../../Images/h1.png'
import h2 from '../../../Images/h2.png'
import h3 from '../../../Images/h3.png'
import m1 from '../../../Images/m1.png'
import m2 from '../../../Images/m2.png'
import m3 from '../../../Images/m3.png'
import m4 from '../../../Images/m4.png'
import {BsStarFill} from 'react-icons/bs'
import '../../../scss/components/ProductDetail/components/Opiniones.scss'

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Opiniones = () => {

return (
    <section className="banner-opiniones">
        <h1 className="h1">Lo que opinan nuestros alumnos</h1>
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
        loop={true}>

        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295688/Product%20pages/otras%20img/opiniones/h1_ranhsh.jpg" alt='Morech Inostroza'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <h1>Morech Inostroza</h1>
                    <div><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/></div>
                    <p>"Compré el curso de gastronomía online el cual incluía 7 cursos y lo encontré excelente.
                    <br />
                    <br />
                    En mi caso busco aprender rápido y cada módulo es rápido y al punto.
                    <br />
                    <br />
                    Cada módulo trae hoja técnica la cual se puede imprimir y armar un buen libro de
                    recetas.
                    <br />
                    Ojo que dicha hoja no solo trae los ingredientes, también detalles adicionales y cada sección de preguntas ayuda a pensar sobre dicha receta, así desarrollar la creatividad en lo que uno más le interesa."</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295688/Product%20pages/otras%20img/opiniones/m1_tqbpew.jpg" alt='Inesinha Castedo Velasco'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <h1>Inesinha Castedo Velasco</h1>
                    <div><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/></div>
                    <p>"Muy buenos los cursos. Estoy cursando el de cocina internacional, los módulos son muy que he visto hasta el momento me han servido mucho, para aplicarlos en mi vida cotidiana, y he ido mejorando mis técnicas de cocina.
                    <br />
                    <br />
                    Son muy explícitos con la información que brindan, y lo bueno es que los módulos se puede ver las veces que uno quiera, independientemente si ya los han visto. La comunicación con los ejecutivos es excelente, tiene paciencia para explicar y hacerte entender en qué consisten los cursos. Los recomiendo 100% No se arrepentirán, invertir en el conocimiento no es mal gastar el dinero."</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295673/Product%20pages/otras%20img/opiniones/m2_z5ngxd.jpg" alt='Valentina Ignacia Araya Parraguez'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <h1>Valentina Ignacia Araya Parraguez</h1>
                    <div><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/></div>
                    <p>"100% recomendado!!
                    <br />
                    <br />
                    Gracias al curso online me acerqué mucho más a la pastelería y aprendí muchas más técnicas!!! Se entienden las explicaciones, es bien dinámico.
                    <br />
                    <br />
                    Ahora voy por mi segundo curso de gastronomía online!! A seguir aprendiendo!!
                    <br />
                    Full recomendado"</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295678/Product%20pages/otras%20img/opiniones/h2_pbtuku.jpg" alt='Miguel Carrera'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <h1>Miguel Carrera</h1>
                    <div><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/></div>
                    <p>"Me inscribí a su diplomado de Gastronomía Internacional y hasta el momento todo me ha parecido excelente en relación al contenido, los vídeos, las recetas, buenísimo!. 
                    <br />
                    <br />
                    Lo recomiendo para todo quienes están buscando nuevas recetas, aprender para emprender, etc..."</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295673/Product%20pages/otras%20img/opiniones/h3_qltxs5.jpg" alt='Fernando Fernández'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <h1>Fernando Fernández</h1>
                    <div><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/></div>
                    <p>"Por medio de un amigo me inscribí al curso de coctelería en casa y no tengo más que decir sino que este curso fue <strong>¡¡¡ESPECTACULAR!!!</strong> 
                    <br />
                    <br />
                    No solo el curso básico, que le empieza a abrir a uno las puertas al hermoso mundo de la coctelería y todo lo que este conlleva, sino que ahora quiero seguir profundizando con la mixología. Manuel explica muy bien, todo a detalle, es un crack."</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295681/Product%20pages/otras%20img/opiniones/m3_f6djft.jpg" alt='Veronica Villarroel Carreño'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <h1>Veronica Villarroel Carreño</h1>
                    <div><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/></div>
                    <p>"Desde hace mucho, buscaba cursos online que de verdad tuvieran calidad y me ayudaran a mejorar mi gusto a la cocina. Que suerte encontrarlos.
                    <br />
                    <br />
                    Estoy súper contenta de haber tomado este curso, ha sido muy beneficioso para mí, una muy bonita experiencia, muy entretenida y la calidad de los profesores es increíble. Excelente atención, siempre atentos a tus dudas, las recetas excelentes.
                    <br />
                    <br />
                    De verdad, 100% recomendadísimos!!!"</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src="https://res.cloudinary.com/dgcn9sprj/image/upload/v1679295683/Product%20pages/otras%20img/opiniones/m4_ftjxge.jpg" alt='Alexa Soares'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <h1>Alexa Soares</h1>
                    <div><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/><BsStarFill className="star"/></div>
                    <p>"Tome el curso de panadería hace un año por diversión y me gusto tanto que ahora estoy empezando comprar las maquinarias para montar mi propia panadería. 
                    <br />
                    Los súper recomiendo!!"</p>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
    </section>
    )
};

export default Opiniones;