import React from 'react'
import {dayScreenInfo} from "./../../assets/data/dayScreenInfo"
import ServiceCard from "./ServiceCard"

const ServiceList = () => {
  return (
    <div className = "grid grid-cols-14 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
        {dayScreenInfo.map((item,index) => (
            <ServiceCard item = {item} index = {index} key = {index} />
        ))}
    </div>
  )
}

export default ServiceList