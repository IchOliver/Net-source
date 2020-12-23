import React from 'react'
import Link from 'next/link'
interface Props{

}
const MeetSection:React.FC<Props> = props=>{
  
    return(
        <>
          <div className="w-full meet-background h-full">
            <div className="xl:pt-24 mx-auto meet-margin container xl:flex overflow-hidden relative">
              <div className="w-full xl:flex items-center xl:px-0 px-8">
              <div className="hero1">
               <div>
                 <h1 className="xl:text-5xl brid_text Eina01-bold xl:heading-line text-brid-title z-10">
                   Meet Our Connectivity Experts
                 </h1>
             
               </div>
              </div>
                <div className="hero2">
                <h1 className="xl:block Eina01-regular">Bringing the best of the NBN™ network to your fingertips.</h1>
                </div>  
             </div>
           
              </div>
             {/** mat profile */}
              <div className="xl:pt-24 mx-auto container xl:flex overflow-x-hidden relative">
              <div className="w-full xl:flex items-center xl:px-0 px-8">
              <div className="hero1">
               <div>
                 <img src="/images/persons/mat.png"/>
               </div>
              </div>
                <div className="hero2">
                    <h1 className="block Eina01-bold">Matthew Humphries</h1>
                    <p className="mt-10 Eina01-regular">The first of our two co-founders and a construction expert who’s dedicated the past 10 years of his life to major commercial telecommunications projects across Australia, Matt brings a wealth of on the ground, practical experience straight to your doorstep by helping you get NBN™ connected through Source Internet.</p>
                    <p className="mt-10 Eina01-regular">A priceless resource of technical expertise with a black book filled with some of the best NBN™ technicians across Australia, he takes lead in ensuring that every single one of our customers has a smooth, stress-free journey as they make the transition and join us on the NBN™  network.</p>

                </div>  
              </div>
           
              </div>
               {/** end */}
                 {/** alex profile */}
                 <div className="relative flex">
                
              <div className="xl:pt-24 mx-auto container xl:flex overflow-x-hidden ">
             
              <div className="w-full xl:flex items-center xl:px-0 px-8"> 
                <div className="hero2">
                    <h1 className="block Eina01-bold">Alex Byasse</h1>
                    <p className="mt-10 Eina01-regular">Our second co-founder and an engineering professional with a passion for driving world-class customer experiences, Alex played an integral role as a project engineer for the NBN™ network rollout across Queensland. </p>
                    <p className="mt-10 Eina01-regular">With an exceptional understanding of how the technology works and having seen first hand the level of frustration and difficulties that consumers were having with their NBN™ connections, he decided to leverage his deep network expertise to help households across Australia finally experience what the NBN™ network could truly do for them with the launch of Source Internet. His drive for exceptional customer experiences is backed up by his exceptional understanding of the technological intricacies behind the NBN™ network.</p>
                </div>  
                <div className="hero1">
               <div className="relative flex">
                 <img src="/images/persons/alex.png"/>
               </div>
              </div>
              </div>
           
              </div>
               {/* <img src="/images/persons/pattern.png" className="abolute top-0 right-0"/> */}
                 </div>
             
               {/** end */}
                 {/** ed profile */}
              <div className="xl:pt-24 mx-auto container xl:flex overflow-x-hidden relative">
              <div className="w-full xl:flex items-center xl:px-0 px-8">
              <div className="hero1">
               <div>
                 <img src="/images/persons/ed.png"/>
               </div>
              </div>
                <div className="hero2">
                    <h1 className="block Eina01-bold">Ed Tarlington</h1>
                    <p className="mt-10 Eina01-regular">Our in-house copper magician with an amazing ability to find, diagnose and fix copper faults that are holding back our customers from world-class internet, he brings to the team over 30 years of experience as a copper connectivity expert.</p>
                    <p className="mt-10 Eina01-regular">Especially with much of the NBN™ cabling being merged with pre-existing copper networks, Ed has proven to be an invaluable member of the team. Whether he’s sharing his insights into how the telco industry has evolved over the last 30 years or professing his love for his ute, his charming personality is only second to his ability to perform miracles on the copper network to get our customers connected.</p>

                </div>  
              </div>
           
              </div>
               {/** end */}
                   {/** konrad profile */}
              <div className="xl:pt-24 mx-auto container xl:flex overflow-x-hidden relative">
              <div className="w-full xl:flex items-center xl:px-0 px-8">
             
                <div className="hero2">
                    <h1 className="block Eina01-bold">Konrad Byasse</h1>
                    <p className="mt-10 Eina01-regular">A customer satisfaction wizard who helps manage new NBN™ connections by giving our customers an amazing experience as they change service providers, Konrad’s expertise goes well beyond your average customer service expert.</p>
                    <p className="mt-10 Eina01-regular">Unlike other customer service providers who read off a script or a support manual, Konrad comes out on regular trips with our NBN™ techs to get an inside look into exactly how the network works and the issues that arise so that he can always provide our customers with the best solution for their problems.</p>
                    <p className="mt-10 Eina01-regular">A confident soccer enthusiast who loves to predict the results of the latest EPL match, he’s a key driver behind why we’re renowned for our fantastic customer service.</p>
                </div>  
                <div className="hero1">
               <div>
                 <img src="/images/persons/konrad.png"/>
               </div>
              </div>
              </div>
           
              </div>
               {/** end */}
                   {/** chris profile */}
              <div className="xl:pt-24 mx-auto container xl:flex overflow-x-hidden relative">
              <div className="w-full xl:flex items-center xl:px-0 px-8">
              <div className="hero1">
               <div>
                 <img src="/images/persons/chris.png"/>
               </div>
              </div>
                <div className="hero2">
                    <h1 className="block Eina01-bold">Chris Shuck</h1>
                    <p className="mt-10 Eina01-regular">One of our top supervisors when we were building out the NBN™ network across Fraser Coast,Sunshine Coast and Brisbane,Chris is renowned for his amazing ability to manage and ensure exceptional performance from the large teams of contractors he oversees.</p>
                    <p className="mt-10 Eina01-regular">A jack-of-all-trades who deeply understands the intricacies involved with the NBN™ network,he steps in as our supervising network expert for customer connections that require that extra level of technical prowess and curations. When he isn't helping new homes get connected, you'll find him still working with his hands at home as a DIY expert with self-funded projects such as building a fire pit with seating in his own backyard or a pizza oven from scratch with his eldest son.</p>

                </div>  
              </div>
           
              </div>
               {/** end */}
               <div className="xl:pt-24 mx-auto container xl:overflow-x-hidden">
                   <div className="justify-center flex mt-8">
                       <h1 className="block Eina01-bold connted-title">Get Connected Today With Australia’s Simplest NBN™ Provider</h1>
                      
                   </div>
                   <div className="justify-center flex">
                     <hr className="mt-3 w-24 h-1.5 bg-teal"></hr>
                   </div>
                   <div className="mt-8 p-8">
                       <p className="mt-15 Eina01-regular">Your satisfaction is our number one goal and we’re firm believers that you deserve to be served by an ISP that has you feeling truly looked after.</p>
                       <p className="mt-15 Eina01-regular">That’s why our 100% local team of technical experts and customer support maestros are here to help you experience the best that the NBN™ truly has to offer.</p>
                       <p className="mt-15 Eina01-regular">From guiding you towards the best plan for your family to addressing any of your technical woes, leave your connectivity needs in the hands of experts and enjoy a world of lightning-fast internet by connecting directly to The Source, today.</p>
                   
                   </div>
                   <div className="mt-20">
                       <img src="/images/persons/nbn-image.png"/>
                   </div>
                    <div className="flex justify-center p-10">
                        <div>
                            <button className="flex items-center bg-button-1 p-1 text-white border-radius-btn xl:p-2">
                               <span className="leading-9 font-bold">Get Connected</span>
                               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-right" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="7 7 12 12 7 17" />
                                            <polyline points="13 7 18 12 13 17" />
                                        </svg>
                            </button>
                        </div>
                        <div className="ml-5">

                            <Link href="/plans">
                                <a>
                                    <button className="flex bg-transparent border-view p-1 border-2 text-teal border-radius-btn leading-9 font-bold xl:p-2">View Our Plans</button>
                                </a>
                            </Link>
                            </div>

                    </div>
               </div>
          </div>
        </>
    )
}

export default MeetSection;