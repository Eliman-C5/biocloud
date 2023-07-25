import Layout from '@/layout/Layout'
import imgInfoBox1 from '../../public/media/frame1.png'
import imgInfoBox2 from '../../public/media/img-infobox.png'
import imgInfoBox3 from '../../public/media/img.png'
import imgInfoBox4 from '../../public/media/infoImg4.png'
import imgInfoBox5 from '../../public/media/infoImg5.png'
import imgInfoFluid from '../../public/media/infoImgFluid.png'
import tabletImg from '../../public/media/tabletImg.png'
import { Header } from '@/sections/Header'
import { InfoBox } from '@/sections/InfoBox'
import { TextWithImage } from '@/sections/TextWithImage'
import { CardsSection } from '@/sections/CardsSection'
import { StartBtn } from '@/layout/StartBtn'
import { MultipleRowsSection } from '@/sections/MultipleRowsSection'
import { BiocloudBanner } from '@/sections/BiocloudBanner'
import { SubscribeComponent } from '@/components/SubscribeComponent'
import { FramesSection } from '@/sections/FramesSection'
import { FeaturesCards } from '@/sections/FeaturesCards'
import { FeaturesBox } from '@/layout/FeaturesBox'
import { CardRow } from '@/layout/CardRow'
import { Card } from '@/layout/Card'
import icon17 from '../../public/media/icon-17.svg'
import icon18 from '../../public/media/icon-18.svg'
import icon19 from '../../public/media/icon-19.svg'
import icon20 from '../../public/media/icon-20.svg'
import { TestimonialSection } from '@/layout/TestimonialSection'
import { Subscriptions } from '@/layout/Subscriptions'
import { FeatureSlider } from '@/layout/FeatureSlider'
import { TerminalesSlider } from '@/layout/TerminalesSlider'
import Image from 'next/image'
import { CardProductSection } from '@/sections/CardProductSection'
import { MapBiocloud } from '@/layout/MapBiocloud'
import { ContactSection } from '@/sections/ContactSection'

const cardsInfo = [
  {
    id: 1,
    img: icon17,
    title: 'App Fichaje',
    text: 'Fichaje de entrada y salida con un solo clic, a través de la APP.'
  },
  {
    id: 2,
    img: icon18,
    title: 'Tablet',
    text: 'Convierte cualquier tablet en un punto de acceso con la appp de Biocloud.'
  },
  {
    id: 3,
    img: icon19,
    title: 'Quién está trabajando',
    text: 'Comprueba, en una sola vista, quién está trabajando desde cualquier lugar.'
  },
  {
    id: 4,
    img: icon20,
    title: 'Informes',
    text: 'Informes y estadísticas de fichajes para optimizar el tiempo de tu equipo.'
  },
]


export default function Home() {
  return (
    <Layout>
      <Header />
      <InfoBox 
        image={imgInfoBox1}
        width={690}
        height={571}
        section='software'
      >
        <h3 className="biocloud-text-color text-card-biocloud">
          Digitalice los procesos de su empresa en RRHH sin importar el rubro y la calidad personal
        </h3>
        <p className="font-md text-card-biocloud" style={{color: '#3D565F'}}>
        <span style={{fontWeight: '700'}}>Biocloud</span> es el software web centralizado para la Gestión de <span style={{fontWeight: '700'}}>Tiempo & Asistencia y Cálculo de novedades de Pre- Nómina.</span>
        </p>
        <p className="font-md text-card-biocloud" style={{color: '#3D565F'}}>Además permite guardar documentación, generar reportes y exportar estadísticas de tus colaboradores, entre otras herramientas que transforman la experiencia laboral.</p>
        <h4 style={{color: '#2C2A2E'}} className='text-card-biocloud'>¿Quieres ver Biocloud en acción?</h4>
      </InfoBox>
      <TextWithImage />
      <CardsSection />
      <InfoBox
        image={imgInfoBox2}
        customBoxStyle='bg-blue-light'
        subscribe={false}
        width={689}
        height={513}
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud">¿Necesitás ayuda para configurar Biocloud?</h3>
        <ul>
          <li className='font-md-bold'>Pedal de arranque</li>
          <li className='font-md-bold'>Capacitación</li>
          <li className='font-md-bold'>Soporte</li>
          <li className='font-md-bold'>Mantenimiento</li>
        </ul>
        <div className="">
          <StartBtn />
        </div> 
      </InfoBox>
      <MultipleRowsSection />
      <BiocloudBanner title='¿Quieres ver Biocloud en acción?'>
        <SubscribeComponent />
      </BiocloudBanner>
      <FramesSection />
      <FeaturesCards />
      <BiocloudBanner title='¿Quieres ver Biocloud en acción?'>
        <SubscribeComponent />
      </BiocloudBanner>
      <InfoBox
        customBoxStyle='bg-7'
        image={imgInfoBox3}
        height={658}
        width={689}
        boxInfo='info-box-style'
        imageStyle={{objectFit: 'cover'}}
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud">Trabajo en la oficina, en casa o en movimiento...</h3>
        <p className='font-lg color-gray-500 text-card-biocloud'>Adapta tu empresa a los nuevos tiempos, Gestiona el teletrabajo junto a Biocloud</p>
      </InfoBox>
      
      <FeatureSlider />
      
      <InfoBox
        customBoxStyle='bg-blue-light'
        image={imgInfoBox4}
        width={700}
        height={537}
        subscribe={false}
        rowReverse='flex-row-reverse'
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud">Conoce el estado de tu equipo en cualquier momento y en el lugar que se encuentre</h3>
        <p className='font-lg color-gray-500 text-card-biocloud'>Biocloud APP, software adaptado al teletrabajo</p>
      </InfoBox>
      
      <InfoBox
        customBoxStyle='bg-7'
        containerStyle='container-fluid px-0'
        imageStyle={{objectFit: 'cover'}}
        image={imgInfoFluid}
        width={945}
        height={738}
        section='tablet'
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud text-card-biocloud">Tablet como reloj de personal</h3>
        <p className='font-2xl-bold color-gray-500 text-card-biocloud d-none d-lg-block'>Adapta tu empresa a los nuevos tiempos</p>
        <p className='font-xl-bold color-gray-500 text-card-biocloud d-none d-lg-block'>Gestiona el teletrabajo junto a Biocloud</p>
        <p className='font-md color-gray-500 text-card-biocloud d-lg-none'>Adapta tu empresa a los nuevos tiempos</p>
        <p className='font-md color-gray-500 text-card-biocloud d-lg-none'>Gestiona el teletrabajo junto a Biocloud</p>
      </InfoBox>
      
      <FeaturesBox
        image={tabletImg}
        width={686}
        height={472}
      >
        <h2 className='font-bold-800 text-card-biocloud'>Tablet fichaje</h2>
        <Image className='info-image d-block d-lg-none' alt='' width={686} height={472} src={tabletImg} />
        <CardRow wrap='flex-wrap'>
          {
            cardsInfo.map(item => <Card 
              key={item.id} 
              text={item.title} 
              paragraph={item.text} 
              img={item.img}  
              cardStyle='col-sm-6 col-10'
            />)
          }
        </CardRow>
        <div className="">
          <StartBtn customStyles='bg-brand-1 start-btn-margin' />
        </div>
        
      </FeaturesBox>
      
      <InfoBox
        customBoxStyle='bg-blue-light'
        image={imgInfoBox5}
        width={689}
        height={513}
        subscribe={false}
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud">Biocloud Tablet registra asistencia, código de trabajo, solicita licencias y envía notificaciones</h3>
        <p className='font-md color-gray-500 text-card-biocloud'>Con Biocloud tablet convierte cualquier tablet en un punto de marcación de asistencia</p>
      </InfoBox>
      
      <TerminalesSlider />
      
      <CardProductSection />
      
      <TestimonialSection />
      
      <Subscriptions />
      
      <BiocloudBanner
        title='Elige el plan mejor que se adapte a tu empresa'
        col='col-lg-10'
        sectionStyle='mt-50'
      >
        <h4 style={{textAlign: 'center', color: '#2C2A2E'}}>Desarrolla  la digitalización 100%, todo organizado, actualizado y  en un mismo lugar, accesible desde cualquier ubicación las 24 hs los 365 días del año.</h4>
        <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center mt-20' style={{gap: '20px'}}>
          <a className='btn btn-brand-1'>Comparar planes</a>
          <a className='btn btn-brand-1' style={{background: '#E0F1F4'}}>Solicita una demo</a>
        </div>
      </BiocloudBanner>
      
      <ContactSection />
      
    </Layout>
  )
}
