import { cardRowType } from '@/types/types'
import React from 'react'

export const CardRow = ({children, wrap = 'flex-lg-nowrap'}: cardRowType) => {
  return (
    <div className={`row d-flex justify-content-center ${wrap}`}>
    {children}
    </div>
  )
}
