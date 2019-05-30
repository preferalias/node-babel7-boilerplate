import R from 'ramda'
import { expData } from './expdata'

const dataFilter = (n) => {
  const { lift, reservable } = n. quote
  if(lift.maxPax > 20 
    || lift.aircraftTailDetails.yearOfMake < 2009 
    || lift.aircraftCategory === "Piston" 
    || lift.aircraftCategory === "Turbo prop"
    || reservable === false 
    ) return true
  return false
}

console.log(R.reject(dataFilter, expData.data.results).length)
console.log(expData.data.results.length)