"use client";
import { useState } from 'react'
import classNames from 'classnames';
import Image from 'next/image'
import { Transition } from '@headlessui/react';

export default function Home() {
  const [showDisplay, setShowDisplay] = useState<string | null>(null)
  const [render, setRender] = useState<string>('')
  return (
    <>
    <main className="h-full p-6 bg-gray-hard">
      {render === '' && (
        <div className='grid grid-cols-4 grid-rows-3 gap-1 h-full border-gray-middle border-2'>
          <div className='col-span-2 row-span-3 hover:contrast-125'
            onMouseOver={() => setShowDisplay('LEFT_IMAGE')}
            onMouseOut={() => setShowDisplay(null)}
          >
            <div className='h-full relative'>
              <div className={classNames('absolute text-white p-6 bottom-0 left-0 bg-gray-hard ease-in duration-300', {
                'opacity-40': showDisplay !== "LEFT_IMAGE",
                'opacity-80': showDisplay === "LEFT_IMAGE",
              })}>
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
          <div className='col-start-3 relative hover:cursor-pointer contrast-75 transition-all hover:contrast-125 hover:shadow-2xl hover:scale-105'
            onMouseOver={() => setShowDisplay('SOFTWARE_DEVELOPMENT')}
            onMouseOut={() => setShowDisplay(null)}
            onClick={() => setRender('SOFTWARE_DEVELOPMENT')}
          >
            <div className={classNames('absolute text-white bottom-0 bg-gray-hard grid justify-center items-center w-full', {
              'opacity-70': showDisplay !== "SOFTWARE_DEVELOPMENT",
              'opacity-100': showDisplay === "SOFTWARE_DEVELOPMENT",
            })}>
              <h3 className='font-bold text-2xl text-center p-4'>Desarrollo de software</h3>
            </div>
            <img
              className='object-cover w-full h-full'
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className='col-start-3 row-start-2 relative contrast-75 hover:cursor-pointer transition-all hover:contrast-125 hover:shadow-2xl hover:scale-105'
            onMouseOver={() => setShowDisplay('NETWORK_LAN')}
            onMouseOut={() => setShowDisplay(null)}
          >
            <div className={classNames('absolute text-white bottom-0 bg-gray-hard grid justify-center items-center w-full', {
              'opacity-70': showDisplay !== "NETWORK_LAN",
              'opacity-100': showDisplay === "NETWORK_LAN",
            })}>
              <h3 className='font-bold text-2xl text-center p-4'>Redes de Datos</h3>
            </div>
            <img
              className='object-cover w-full h-full'
              src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className='col-start-4 row-start-1 relative contrast-75 hover:cursor-pointer transition-all hover:contrast-125 hover:shadow-2xl hover:scale-105'
            onMouseOver={() => setShowDisplay('NETWORKING')}
            onMouseOut={() => setShowDisplay(null)}
          >
            <div className={classNames('absolute text-white bottom-0 bg-gray-hard grid justify-center items-center w-full', {
              'opacity-70': showDisplay !== "NETWORKING",
              'opacity-100': showDisplay === "NETWORKING",
            })}>
              <h3 className='font-bold text-2xl text-center p-4'>Desarrollo de Marca</h3>
            </div>
            <img
              className='object-cover w-full h-full'
              src="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className='col-start-4 row-start-2 relative contrast-75 hover:cursor-pointer transition-all hover:contrast-125 hover:shadow-2xl hover:scale-105'
            onMouseOver={() => setShowDisplay('OUR_TEAM')}
            onMouseOut={() => setShowDisplay(null)}
          >
            <div className={classNames('absolute text-white bottom-0 bg-gray-hard grid justify-center items-center w-full', {
              'opacity-70': showDisplay !== "OUR_TEAM",
              'opacity-100': showDisplay === "OUR_TEAM",
            })}>
              <h3 className='font-bold text-2xl p-4 text-center'>Nuestro equipo</h3>
            </div>
            <img
              className='object-cover w-full h-full'
              src="https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className='col-start-3 row-start-3 relative contrast-75 hover:cursor-pointer transition-all hover:contrast-125 hover:shadow-2xl hover:scale-105'
            onMouseOver={() => setShowDisplay('WORK_WITH_US')}
            onMouseOut={() => setShowDisplay(null)}
          >
            <div className={classNames('absolute text-white bottom-0 bg-gray-hard grid justify-center items-center w-full', {
              'opacity-70': showDisplay !== "WORK_WITH_US",
              'opacity-100': showDisplay === "WORK_WITH_US",
            })}>
              <h3 className='font-bold text-2xl text-center p-4'>Trabaja con nostros</h3>
            </div>
            <img
              className='object-cover w-full h-full'
              src="https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className='col-start-4 row-start-3 bg-black-prom p-4 hover:cursor-pointer transition-all hover:shadow-2xl hover:scale-105'>
            <h3 className='text-green-middle text-4xl'>Contacto</h3>
            <div className='mt-4 grid gap-2'>
              <p className='text-white'>Telefono: (+57) 3162717184</p>
              <p className='text-white'>Email: prometheus.software.sas@gmail.com</p>
              <p className='text-white'>LinkedIn: prometheus-software-sas</p>
              <p className='text-white'>Instagram: @prometheus.software</p>
            </div>
          </div>
        </div>
      )}
        <Transition
          show={render === 'SOFTWARE_DEVELOPMENT'}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="h-full"
        >
          <div className='h-full bg-white p-6'>
            <div className='flex justify-between pb-4'>
              <h2 className='text-5xl font-bold bg-green-middle'>Desarollo de software</h2>
              <button
                onClick={() => setRender('')}
                className='absolute right-10 border-2 rounded-lg p-2'
              >
                Cerrar
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-justify w-1/2'>¿Tienes una visión desafiante? ¡Nos encanta la emoción de un buen desafío! Nuestro equipo de programadores y expertos en redes desatará su magia para crear soluciones únicas y personalizadas que se adapten a tus necesidades específicas. No importa si es un proyecto pequeño o un gran sueño, estamos aquí para transformar tus ideas en realidad.</p>
              <div className='grid gap-6 '>
                <h2 className='font-semibold text-2xl'>Revisa nuestros proyectos</h2>
                <div className='grid grid-cols-5 gap-4 p-1 max-h-96 overflow-auto'>
                  <div className='w-60 h-48 bg-green-middle'>Cotiza tu propio proyecto</div>
                  {Array.from(Array(100 ).keys()).map((_item, index) => (
                    <div className='w-60 h-48 bg-green-middle' key={index}>{`Proyecto ${index}`}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Transition>
    </main>
    </>
  )
}
