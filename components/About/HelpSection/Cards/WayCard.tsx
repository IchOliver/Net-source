import React from 'react'

import {Card,Button} from 'react-bootstrap'
interface Props{

}
const theirWay=[
    {
        id:1,
        title:'Offshore Customer Service'
    },
    {
        id:2,
        title:'Limited Technical Support'
    },
    {
        id:3,
        title:'Locked-In Contracts'
    },
    {
        id:4,
        title:'Data Limits & “Speed Throttles”'
    },
    {
        id:5,
        title:'Complicated Plans & Charges'
    }
]
const sourceWay=[
  {
      id:1,
      title:'Australian Support Team'
  },
  {
      id:2,
      title:'In-House NBN™ Specialists'
  },
  {
      id:3,
      title:'No Lock-In Contracts'
  },
  {
      id:4,
      title:'Unlimited Data, All Day Everyday'
  },
  {
      id:5,
      title:'Simple Monthly Plans & Low Fees'
  }
]
const WayCard:React.FC<Props> = props=>{
   return(
      <div className="way-layout xl:block">
        <div className="card1">
         <div>
             <div className="w-full justify-center flex">
               <h1 className="xl:text-5xl Eina01-Bold">Their Way</h1>
             </div>
            {
                theirWay.map(item=>(
                  <div className="their-card-layout" key={item.id}>
                   <div className="their-card-content">
                    <img src="/images/close.png" alt=""/>
                    <p className="ml-4 card-title-color xl:text-2xl Eina01-Bold ">OffShore Customer Service</p>
                   </div>
                   </div>
                ))
            }
           
         </div>
        </div>
        <div className="card2">
         <div>
             <div className="w-full justify-center flex">
               <h1 className="xl:text-5xl Eina01-Bold">The Source Way</h1>
             </div>
           
            {
                sourceWay.map(item=>(
                    <div className="source-card-layout" key={item.id}>
                    <div className="source-card-content">
                        <img src="/images/check-mark.png" alt=""/>
                        <p className="ml-4 card-title-color xl:text-2xl Eina01-Bold">Australian Support Team</p>
                    </div>
                    </div>
                ))
            }
          
         </div>
        </div>
      </div>
   )
}
export default WayCard;