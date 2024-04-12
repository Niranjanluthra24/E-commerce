import React from 'react'
import { Popular } from '../Components/Popular/Popular'
import {Hero} from "../Components/Hero/Hero"
import { Offers } from '../Components/Offers/Offers'
import { Newcollection } from '../Components/Newcollection/Newcollection'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div>
        <Hero />
         <Popular /> 
         <Offers />
         <Newcollection/>
         <NewsLetter/>
    </div>
  )
}
