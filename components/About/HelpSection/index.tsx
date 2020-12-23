import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import WayCard from './Cards/WayCard'
  interface Props{

  }
const HelpSection:React.FC<Props> = props =>{
   
    return(
        <>
          <div className="help-background relative w-full">
              <div className="help-title">
                  <h1 className="text-white Eina02-Bold xl:text-4xl title-lg helping-title">Helping You Experience The Best That The NBN™ Has To Offer</h1>
              </div>
              <div className="help-description">
               <p className="text-white Eina01-Regular description xl: text-1xl ">From being routed to overseas support staff that are rarely able to help to feeling like another name in the chequebook instead of an individual with problems that need to be heard, we’ve built our company from the ground up with one simple goal in mind.</p>
              </div>
              <div className="help-description">
                 <p className="text-white Eina01-Regular xl:block complete-text">Your complete satisfaction.</p>
              </div>
              <WayCard/>
              <div className="help-description">
                <h1 className="text-white Eina01-Bold xl:block quality-text">Quality NBN™ Starts From The Source</h1>
              </div>
             <div className="w-full justify-center flex absolute help-video">
               <div className="border-teal border-4">
                   {/* <ReactPlayer 
                   width={1000}
                   height={600}
                   url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                   playIcon={<button>Play</button>}
                   /> */}
                   <div className="test-video relative">
                      <img src="/images/play-icon.png" className="play-icon"/>
                   </div>
               </div>
             </div>
          </div>
        </>
    )
}

export default HelpSection;