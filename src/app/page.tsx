"use client";
import Image from 'next/image'
import Header from './components/header'
import Contact from './components/contact'
import { WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon } from 'next-share'
import config from './components/header/config.json'

export default function Home() {
  return (
    <>
    <main className="h-full">
      <div className='grid grid-cols-4 grid-rows-3 gap-1 h-full'>
        <div className='col-span-2 row-span-3 hover:cursor-pointer'>
          <div className='h-full relative'>
            <div className='absolute text-white p-6 bottom-0 left-0 bg-gray-hard'>
              <h3 className='font-bold text-4xl pb-4'>Sobre nosotros</h3>
              <span className='text-xl text-justify'>Prometheus Software es una empresa de desarrollo de software, consultora tecnológica para empresas. Nuestro enfoque se centra en proporcionar soluciones tecnológicas personalizadas que ayuden a las empresas a maximizar su potencial.</span>
            </div>
            <div className='absolute p-6 bg-black-prom opacity-90'>
            <img className='' src="logo.png" alt="" />
            <p className='font-semibold text-green-middle text-center text-2xl'>Enciende tu potencial</p>
            </div>
            <img
              className='object-cover w-full h-full'
              src="principal-left-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className='col-start-3 hover:cursor-pointer relative'>
          <div className='absolute text-white inset-0 bg-gray-hard m-4 p-4 grid justify-center'>
            <h3 className='font-bold text-2xl pb-4 text-center'>Desarrollo de software</h3>
            <p className=''>Desarrollamos software de acuerdo a tus necesidades, y las necesidades del mercado.</p>
            <button className='text-white border-2 border-white mt-4 p-2'>Conoce nuestros productos</button>
          </div>
          <img
            className='object-cover w-full h-full'
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className='bg-red-500 col-start-3 row-start-2 relative hover:cursor-pointer'>
          <div className='absolute text-white inset-0 bg-gray-hard m-4 p-4 grid justify-center'>
            <h3 className='font-bold text-2xl pb-4 text-center'>Redes de Datos</h3>
            <p className=''>Somos lideres en la instalación, mantenimiento y reparación de redes de datos.</p>
            <button className='text-white border-2 border-white mt-4 p-2'>Genera una cotización</button>
          </div>
          <img
            className='object-cover w-full h-full'
            src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className='bg-red-500 col-start-4 row-start-1 relative hover:cursor-pointer'>
          <div className='absolute text-white inset-0 bg-gray-hard m-4 p-4 grid justify-center'>
            <h3 className='font-bold text-2xl pb-4 text-center'>Desarrollo de Marca</h3>
            <p className=''>Landing page, e-commerce y consultoría para un mejor uso de las redes sociales.</p>
            <button className='text-white border-2 border-white mt-4 p-2'>Genera una cotización</button>
          </div>
          <img
            className='object-cover w-full h-full'
            src="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className='bg-yellow-300 col-start-4 row-start-2 relative hover:cursor-pointer'>
          <div className='absolute text-white inset-0 bg-gray-hard m-4 p-4 grid justify-center'>
            <h3 className='font-bold text-2xl pb-4 text-center'>Nuestro equipo</h3>
            <p className=''>Estámos compuestos por expertos en informática, comprometidos en brindar servicios de alta calidad.</p>
            <button className='text-white border-2 border-white mt-4 p-2'>Conoce al equipo</button>
          </div>
          <img
            className='object-cover w-full h-full'
            src="https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className='bg-yellow-300 col-start-3 row-start-3 relative hover:cursor-pointer'>
          <div className='absolute text-white inset-0 bg-gray-hard m-4 p-4 grid justify-center'>
            <h3 className='font-bold text-2xl pb-4 text-center'>Nuestro equipo</h3>
            <p className=''>Estámos compuestos por expertos en informática, comprometidos en brindar servicios de alta calidad.</p>
            <button className='text-white border-2 border-white mt-4 p-2'>Conoce al equipo</button>
          </div>
          <img
            className='object-cover w-full h-full'
            src="https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className='col-start-4 row-start-3 bg-black-prom p-4'>
          <h3 className='text-green-middle text-4xl'>Contacto</h3>
          <div className='mt-4 grid gap-2'>
            <p className='text-white'>Telefono: (+57) 3162717184</p>
            <p className='text-white'>Email: prometheus.software.sas@gmail.com</p>
            <p className='text-white'>LinkedIn: prometheus-software-sas</p>
            <p className='text-white'>Instagram: @prometheus.software</p>
          </div>
        </div>
        {/* <div className='col-span-2 col-start-3 row-start-3 bg-black-prom p-8'>
          <h3 className='text-green-middle text-4xl'>Contacto</h3>
          <div className='mt-4 grid gap-2'>
            <p className='text-white'>Telefono: (+57) 3162717184</p>
            <p className='text-white'>Email: prometheus.software.sas@gmail.com</p>
            <p className='text-white'>LinkedIn: prometheus-software-sas</p>
            <p className='text-white'>Instagram: @prometheus.software</p>
          </div>
        </div> */}
      </div>
    </main>
    </>
  )
}
