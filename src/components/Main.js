import React from 'react'
import Card from './Card'
import {FoodItems} from "../utils/constants"

const Main = () => {
  return (
    <div className="font-sans flex flex-wrap lg:gap-4 gap-4 p-4 justify-center lg:px-36">
      {FoodItems.map((item,index)=> <Card key={index} props={item} />)}
      {FoodItems.map((item,index)=> <Card key={index} props={item} />)}
    </div>
  )
}

export default Main
