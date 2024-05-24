import React from 'react'
import NewCarousel from '@/components/NewCarousel'
import Card from '@/components/Card'

export default function index() {
  return (
    //   <NewCarousel cardsData={5} spaceBetween={5} view={5}/>
      <Card cardClass='bg-white-100 border-2 border-black' buttonClass='ra-gradient' 
      title={'My title'} img={'https://archinect.imgix.net/uploads/zq/zqkzoem7sf01o9ij.jpg?fit=crop&auto=compress%2Cformat&w=1200'}></Card>
  )
}
