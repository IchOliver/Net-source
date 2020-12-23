import React ,{useState} from 'react'

interface Props{

}

const BridgeSection:React.FC<Props> = props=>{
   
    return(
        <>
        <div className="relative">
         <img src="/images/oval-copy.png" className="absolute top-0 right-0 lg:block" alt=""/>
         <div className="xl:pt-24 mx-auto container xl:flex overflow-hidden relative">
           <img src="/images/oval-gray-b-h.png" className="absolute top-0 left-0 hidden lg:block w-12 ml-16" alt=""/>
           <div className="w-full xl:flex xl:px-0 px-8">
            <div className="sm:block  xl:block hero1-1">
               <div className="relative">
                 <img src="/images/tri-angle.png" className="tri-distance" alt=""/>
                 <h1 className="xl:text-5xl brid_text Eina01-bold xl:heading-line text-brid-title z-10">
                
                   Bridging The Gap Between You  &amp; Unlimited Connectivity On The 
                      <span className="relative z-10">
                            <hr className="bg-green line-green" />
                            <span className="relative z-20"> NBN™ </span>   
                        </span>
                 </h1>
             
               </div>
              </div>
            <div className="hero2">
                <div className="hero2-content">
                   <p className=" Eina01-Regular xl:block title-height first-title">The NBN™ network was built on a promise. A vision to deliver the best, high-speed internet experiences to households across Australia. But as the rollout continued and time went on, one thing became clear. </p>
                   <p className="mt-10 Eina01-Regular ">People weren’t getting the connection they deserved.</p>
                   <p className="mt-10 Eina01-Regular title-height">That’s why we decided to bridge the gap between you and an amazing experience on the NBN™ network…</p>
                   <h1 className="mt-10 xl:text-3xl Eina01-bold ">…by connecting you straight to the source.</h1>
                </div>
             
            </div>  
           </div>
         </div>
       
        </div>
        <div className="relative w-full flex justify-between xl:block double-image">
             <img src="/images/oval-blue-1.png" className="absolute bottom-0 left-0 hidden lg:block" alt=""/>
             <img src="/images/oval-blue-2.png" className="sm:absolute bottom-0 left-0 block lg:hidden" alt=""/>
             <img src="/images/oval-green-2.png" className="absolute bottom-0 right-0 hidden lg:block" alt=""/>
             <img src="/images/oval-green-1.png" className="absolute sm:h-1/2 bottom-0 right-0 block lg:hidden" alt=""/>
          </div>
        </>
    )
}

export default BridgeSection;