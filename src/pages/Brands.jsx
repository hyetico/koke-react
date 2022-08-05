import React from 'react'
import { SubTitle } from '../components/Subtitle'
import { Brandsitem } from '../components/Brandsitem'

export const Brands = () => {
  return (
    <section className='Brands_outer'>
      <div className="inner">
        <SubTitle title='로스터리' numtitle='커넥츠커피'></SubTitle>
        <Brandsitem></Brandsitem>
      </div>
    </section>
  )
}
