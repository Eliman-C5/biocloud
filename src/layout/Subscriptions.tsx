'use client'

import React, { useState }  from 'react'
import Link from 'next/link';
import { SubscriptionCard } from './SubscriptionCard';

export const Subscriptions = () => {

  const [pricing, setPricing] = useState(1);

  const handlePricing = (index: any) => {
      setPricing(index); // remove the curly braces
  };
  
  const subscriptionInfo = [
    {
      id: 1,
      planName: 'Starter',
      planInfo: 'Perfecto para centralizar la gestión en RRHH de startups y empresas',
      monthlyPrice: '$4.0',
      annuallyPrice: '$5.0',
      info: [
        {
          id: 1,
          text: 'Control de horas'
        },
        {
          id: 2,
          text: 'Gestión de turnos'
        },
        {
          id: 3,
          text: 'Gestión de licencias'
        },
        {
          id: 4,
          text: 'Expediente digital'
        },
      ]
    },
    {
      id: 2,
      planName: 'Business',
      planInfo: 'Ideal para empresas que necesiten sistematizar procesos.',
      monthlyPrice: '$6.0',
      annuallyPrice: '$7.0',
      info: [
        {
          id: 1,
          text: 'Funciones plan STARTER'
        },
        {
          id: 2,
          text: 'Portal del colaborador'
        },
        {
          id: 3,
          text: 'Cartelera digital'
        },
        {
          id: 4,
          text: 'Organigrama'
        },
        {
          id: 5,
          text: 'Inventario'
        },
        {
          id: 6,
          text: 'Recibos de nómina digital'
        },
      ]
    },
    {
      id: 3,
      planName: 'Enterprise',
      planInfo: 'Una poderosa solución para posicionar y escalar a tu equipo RRHH al top.',
      monthlyPrice: '',
      annuallyPrice: '',
      info: [
        {
          id: 1,
          text: 'Funciones plan BUSINESS'
        },
        {
          id: 2,
          text: 'Servicio técnico asistido'
        },
        {
          id: 3,
          text: 'Onboarding asistido'
        },
        {
          id: 4,
          text: 'Single Sing On'
        },
        {
          id: 5,
          text: 'Almacenamiento ilimitado'
        },
      ]
    },
  ]

  return (
    <section className="section mt-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12 text-center">
                    <h2 className="color-brand-3 mb-20">Planes de suscripción</h2>
                    <p className="font-lg color-gray-500">Biocloud te ofrece el plan que mejor se adapta a las necesidades de tu empresa.<br /> 
¡La experiencia, la confiabilidad, la seguridad y el rendimiento de nuestro software son inigualables!</p>
                    <ul className="tabs-plan change-price-plan" role="tablist">
                        <li> <a className={pricing === 1 ? "active" : ""} onClick={() => handlePricing(1)}>Monthly</a></li>
                        <li> <a className={pricing === 2 ? "active" : ""} onClick={() => handlePricing(2)}>Yearly</a></li>
                    </ul>
                </div>
            </div>
            <div className="row mt-50">
                {
                  subscriptionInfo.map(subs => <SubscriptionCard 
                    key={subs.id}
                    annuallyPrice={subs.annuallyPrice}
                    monthlyPrice={subs.monthlyPrice}
                    planName={subs.planName}
                    planInfo={subs.planInfo}
                    pricing={pricing}
                    info={subs.info}
                  />)
                }
            </div>
            <div className="border-bottom mt-30" />
        </div>
    </section>
  )
}
