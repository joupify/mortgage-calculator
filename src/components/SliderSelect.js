import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, SetData}) => {

  // {homeValue, downPayment, loanPayment, loanTerm} = data

  return (
    <div>
      <SliderComponent
       label={'Home value'}
       unit='$'
       defaultValue={data.homeValue} 
       amount={data.homeValue}
       value = {data.homeValue}
       min={1000} 
       max={10000} 
       step={100} 
       onChange={(e, value)=>SetData({
        ...data,
        homeValue: value
      })} />

      <SliderComponent
      label={'down payment'} 
      unit='$'
      amount={data.downPayment}
       defaultValue={data.downPayment}
       value= {data.downPayment} 
       min={0} 
       max={data.homeValue} 
       step={10} 
       onChange={(e, value)=>SetData({
        ...data,
        downPayment: value
       })} />

<     SliderComponent
      label={'loan payment'} 
      unit='$'
      amount={data.loanPayment} 
       defaultValue={data.loanPayment} 
       value= {data.loanPayment}  
       min={0} 
       max={data.homeValue} 
       step={10} 
       onChange={(e, value)=>SetData({
        ...data,
        loanPayment: value

       })} />
    </div>
  )
}

export default SliderSelect