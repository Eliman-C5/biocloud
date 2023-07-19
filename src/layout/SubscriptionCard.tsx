import Link from 'next/link'
import React from 'react'

type subscription = {
  planName: string,
  planInfo: string,
  pricing: number,
  monthlyPrice: string,
  annuallyPrice: string,
  info: any
}

export const SubscriptionCard = ({
  planName, 
  planInfo, 
  pricing, 
  monthlyPrice, 
  annuallyPrice,
  info}: subscription) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card-plan-style-2 hover-up">
                        <div className="card-plan" style={{borderColor: '#AEE6B9'}}>
                            <div className="card-image-plan">
                                <div className="info-plan">
                                    <h4 className="color-brand-3">{planName}</h4>
                                    <p className="font-md color-grey-400">{planInfo}</p>
                                </div>
                            </div>
                            <div className="box-day-trial"> 
                              <span className="font-lg-bold color-brand-3 text-price-standard">{pricing == 1 ? monthlyPrice : annuallyPrice} </span> 
                            <span className="font-md color-grey-500 text-type-standard">- USD mes/ empleado </span><br /></div>
                            <div className="mt-20"> <Link className="btn btn-brand-1-full hover-up" href="#">Elegir este plan
                                <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link></div>
                        </div>
                        <div className="mt-30 mb-30">
                            <ul className="list-ticks list-ticks-2">
                              {
                                info.map((item: any) => <li key={item.id}>
                                  <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>{item.text}
                              </li>)
                              }
                            </ul>
                        </div>
                    </div>
                </div>
  )
}
