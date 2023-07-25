import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type childrenProp = {
  children: ReactNode
}

export type cardRowType = {
  children: ReactNode,
  wrap?: string,
}

export type customStyles = {
  customStyles?: string
}

export type startBtn = {
  customStyles?: string,
  text?: string
}

export type biocloudBannerType = {
  children: ReactNode,
  title: string,
  col?: string,
  sectionStyle?: string
}

export type infoBoxTypes = {
  image: StaticImageData,
  children: ReactNode,
  customBoxStyle?: string,
  subscribe?: boolean,
  boxInfo?: string
  width: number,
  height: number,
  childrenBoxStyle?: any,
  imageStyle?: null | any,
  containerStyle?: string,
  rowReverse?: string,
  section?: string
}