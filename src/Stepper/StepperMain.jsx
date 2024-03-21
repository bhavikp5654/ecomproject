import React from 'react'
import Stepper from './Stepper'
import Customer from './Customer'

function StepperMain() {

    const checkoutsteps = [
        {
            name:"Customer Info",
            component:()=> <div> <Customer /> </div>
        },
        {
            name:"Shipping Info",
            component:()=> <div> Enter Shipping Info  </div>
        },
        {
            name:"payment Info",
            component:()=> <div> Enter payment Info  </div>

        },
        {
            name:"Order Info",
            component:()=> <div> order status  </div>
        }

    ]

  return (
    <div>
        <Stepper steps ={checkoutsteps}/>
    </div>
  )
}

export default StepperMain