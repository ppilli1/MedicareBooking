import { dayScreenInfo } from '../assets/data/dayScreenInfo'
import ServiceCard from '../components/Services/ServiceCard'

const DayScreen = () => {
  return (
    <section>
      <div className = "container">
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {dayScreenInfo.map((item,index) => (
              <ServiceCard item = {item} index = {index} key = {index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DayScreen