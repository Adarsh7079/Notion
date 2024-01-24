import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Donut from './Donut';

const series=[10,20,10,40,20]
const options = {
  series:[10,20,10,40,20],
  labels: ["Exception", "Intransit", "Pending", "Delivery", "Out for delivery"],
  colors:["#5E4200","#956F00","#E5A500","#FFC879","#FFDDB6"],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val
    },
  },
  plotOptions:{
    pie:{
      expandOnClick:false,
     
      donut:{
        size:"30px",
        show:true,
        series:false,
        fontsize:2
      }
      ,
    }
  }
}

const Home = () => {
  
  return (
    <div className="  relative overflow-y-hidden">
      <section className=" mx-[15%] mt-24">
        <div >
          <img src='/cub.png' className=' absolute w-48 h-48 opacity-30 mx-32 -mt-5'/>
        </div>
        <div >
          <img src='/cub.png' className=' absolute w-48 h-48 opacity-30 mx-[450px] -mt-[100px]'/>
        </div>
        <div >
          <img src='/cub.png' className=' absolute w-48 h-48 opacity-30 right-0 mt-14 -mx-20'/>
        </div>
        <div >
          <img src='/cub.png' className=' absolute w-48 h-48 opacity-30 right-[650px]  -mx-20'/>
        </div>
        <div >
          <img src='/cub.png' className=' absolute w-48 h-48 opacity-30 mt-[140px] -mx-[50px]'/>
        </div>
        <div >
          <img src='/cub.png' className=' absolute w-48 h-48 opacity-30 mt-[150px] mx-[350px]'/>
        </div>
        <div >
          <img src='/cub.png' className=' absolute w-48 h-48 opacity-30 mt-[120px] mx-[650px]'/>
        </div>
        <div >
          <img src='/cub.png' className=' absolute w-48 h-48 opacity-30 left-0 -mx-[150px] -mt-14'/>
        </div>
        <div className=" mt-10 text-neutral-600 text-2xl font-bold font-['Inter'] leading-loose">
          Welcome, John Mathew!!
        </div>
        <div className=" flex gap-5 mt-8 opacity-85">
          <div className="w-[332px] h-[168px] bg-white rounded-xl  flex-col justify-start items-start gap-7 inline-flex border-[1px] border-gray-300 p-5">
            <div className=" flex flex-col gap-3">
              <div className="w-[300px] font-semibold text-neutral-600 text-sm font-['Inter'] leading-tight">
                Order Sync Successful!
              </div>
              <div className="w-[300px] text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                Your order details from the last 30 days have been successfully
                synced. Check them out now!
              </div>
            </div>
            <div
              className="w-[139px] h-7 px-2 py-1.5 rounded-lg justify-center items-center text-xs font-medium
                     bg-[#303020] hover:bg-[#303040] text-white"
            >
              Explore Your Orders
            </div>
          </div>

          <div className="w-[332px] h-[168px] bg-white rounded-xl  flex-col justify-start items-start gap-7 inline-flex border-[1px] border-gray-300 px-5">
            <div className=" flex flex-col gap-3">
              <div className=" flex  mt-5 gap-2">
                <img src="/alert.png" className="w-5 h-5" alt="" />
                <div className="w-[272px]  flex items-center font-semibold text-yellow-900 text-sm font-['Inter'] leading-tight">
                  Customize Customer Notification
                </div>
              </div>
              <div className="w-[300px] text-yellow-900 text-[13px] font-['Inter'] leading-tight">
                Tailor Your Email Experience: Set the Sender Email and Choose
                Notification Triggers
              </div>{" "}
            </div>
            <div
              className="w-[157px] h-7 px-2 py-1.5 rounded-lg justify-center items-center text-xs font-medium
              bg-[#303020] hover:bg-[#303040] text-white"
            >
              {" "}
              Configure Notifications{" "}
            </div>
          </div>

          <div className="w-[332px] h-[168px] bg-[#EAF4FF] rounded-xl   flex-col justify-start items-start gap-7 inline-flex border-[1px] border-gray-300 p-5">
            <div className=" flex flex-col gap-2">
              <div className=" flex  gap-2">
                <img src="/Info.png" className=" w-5 h-5"/>
                <div className=" flex items-center w-[272px] font-semibold text-neutral-600 text-sm font-['Inter'] leading-tight">
                  Your Tracking Link has been generated
                </div>
              </div>
              <div className="text-neutral-600 text-[13px] font-['Inter'] ">
                Include the{" "}
                <span className="text-blue-700 text-[13px] font-['Inter'] underline leading-tight">
                  {" "}
                  Link
                </span>{" "}
                to Your Store's Navigation <br /> Menu.
              </div>
            </div>
            <div className=" flex gap-2">
              <div className="w-[92px] h-7 px-3 py-1.5 bg-white rounded-lg shadow-inner justify-center items-center gap-0.5 inline-flex">
                <div className="text-zinc-800 text-xs font-bold font-['Inter'] leading-none">
                  Copy Link
                </div>
              </div>
              <div
                className="w-[157px] h-7 px-2 py-1.5 rounded-lg justify-center items-center text-xs font-medium
                bg-[#303020] hover:bg-[#303040] text-white"
              >
                {" "}
                Go To Navigation Menu{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-20 bg-[#FFF7EE] mt-20">
        <div className=" mt-10 mx-[15%]">
          <div className=" text-neutral-600 text-2xl font-bold font-['Inter'] leading-loose py-7">
            Instant Dive into Your Performance Metrics
          </div>
          <div className=" h-9 justify-start items-center gap-2 inline-flex">
            <div className="px-3 py-2 bg-purple-50 rounded border border-violet-500 justify-center items-center flex">
              <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                Lifetime
              </div>
            </div>
            <div className="px-2 w-[100px] py-2 bg-white rounded justify-center items-center flex">
              <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                Last Week
              </div>
            </div>
            <div className="px-2 w-[100px] py-2 bg-white rounded justify-center items-center flex">
              <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                Last Month
              </div>
            </div>
            <div className="px-2 w-[120px] py-2 bg-white rounded justify-center items-center flex">
              <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                Last Year
              </div>
            </div>
            <div className=" y-3 h-[3 0px] bg-white rounded justify-center items-center gap-2 flex">
             <div className=" flex gap-5 px-2 w-[200px]">
             <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight flex items-center">
                  Customize Time Line
                </div>
                <img src="/Calendar.png " className=" w-5  h-5"/>
             </div>
             
            </div>
          </div>
          <div className=" flex gap-14">
            <div className=" mt-10 border-[1px] border-gray-300 w-[448px] h-[368px] p-4 bg-white rounded-xl flex-col justify-start items-start gap-4 inline-flex">
              <div className=" flex flex-col gap-3">
                <div className="w-[416px] h-5 justify-between items-start inline-flex">
                  <div className="text-neutral-600 text-sm font-['Inter'] leading-tight">
                    Shipment Updates
                  </div>
                  <div className="text-neutral-600 text-sm font-['Inter'] leading-tight">
                    Total Orders : 394
                  </div>
                </div>
                <div className=" w-[416px] h-9 justify-start items-center gap-2 inline-flex ">
                  <div className="px-1 py-2 bg-orange-50 rounded border border-neutral-200 justify-center items-center flex">
                    <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                      Delivered
                    </div>
                  </div>
                  <div className="px-2 w-[200px] py-2 bg-zinc-100 rounded justify-center items-center flex">
                    <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                      Out for delivery
                    </div>
                  </div>
                  <div className="px-2 py-2 bg-zinc-100 rounded justify-center items-center flex">
                    <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                      Intransit
                    </div>
                  </div>
                  <div className="px-2 py-2 bg-zinc-100 rounded justify-center items-center flex">
                    <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                      Pending
                    </div>
                  </div>
                  <div className="px-2 py-2 bg-zinc-100 rounded justify-center items-center flex">
                    <div className="text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                      Exception
                    </div>
                  </div>
                  
                </div>
                <div className=" flex  w-full  mx-32 mt-2  ">
                  <Donut className=""/>
                </div>
                <div className="w-[416px] h-5 justify-start items-center gap-2 inline-flex">
                     <div className=' flex gap-5'>
                        <div className="justify-start items-center gap-2 flex">
                              <div className=' bg-[#5E4200]  w-[20px] h-3 rounded-lg'/>
                              <div className="text-neutral-600 text-sm font-['Inter'] leading-tight">Exception</div>
                          </div>
                          <div className="justify-start items-center gap-2 flex">
                              <div className=' bg-[#956F00]  w-[20px] h-3 rounded-lg'/>
                              <div className="text-neutral-600 text-sm font-['Inter'] leading-tight">Intransit</div>
                          </div>
                          <div className="justify-start items-center gap-2 flex">
                            <div className=' bg-[#E5A500]  w-[20px] h-3 rounded-lg'/>
                              <div className="text-neutral-600 text-sm font-['Inter'] leading-tight">Pending</div>
                          </div>
                     </div>
                     
                </div>
                <div className="w-[416px] h-5 justify-start items-center gap-2 inline-flex">
                     <div className=' flex gap-5'>
                        <div className="justify-start items-center gap-2 flex">
                              <div className=' bg-[#FFC879]  w-[20px] h-3 rounded-lg'/>
                              <div className="text-neutral-600 text-sm font-['Inter'] leading-tight">Delivered </div>
                          </div>
                          <div className="justify-start items-center gap-2 flex">
                              <div className=' bg-[#FFDDB6]  w-[20px] h-3 rounded-lg'/>
                              <div className="text-neutral-600 text-sm font-['Inter'] leading-tight">Out for deliveryt</div>
                          </div>
                         
                     </div>
                     
                </div>
              </div>
            </div>
            <div className=" mt-10 w-[216px] h-[368px] bg-yellow-700 rounded-xl flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch pl-4 pr-11 pt-4 pb-6 justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-white text-[15px] font-bold font-['Inter'] leading-tight">
                    Star Facts about your <br /> orders!!!
                  </div>
                  <div className="self-stretch h-[280px] flex-col justify-start items-start gap-8 flex">
                    <div className=" mt-5 self-stretch text-white text-[14px] font-['Inter'] leading-tight">
                      There are 8 shipments <br /> that have been in out for{" "}
                      <br /> delivery for more than <br />3 days.
                      <br />
                      <br />
                      There are 5 shipments <br /> in exception right now
                      <br />
                      <br />
                      The maximum <br /> chargebacks are from <br /> Miami.
                    </div>
                    <div className="w-[300px] h-7 justify-start items-center gap-2 inline-flex ">
                      <div className="px-3 py-1.5 bg-white rounded-lg shadow-inner justify-center items-center gap-0.5 flex">
                        <div className="text-zinc-800 font-bold text-xs font-['Inter'] leading-none">
                          Check Orders Page
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] opacity-20 bg-orange-100 rounded-full blur-sm" />
                <div className="w-[51px] h-[51px] opacity-20 bg-orange-100 rounded-full blur-sm" />
              </div>
            </div>
            <div className="  border-[1px] border-gray-300 mt-10 w-[447px] h-[368px] bg-white rounded-xl shadow shadow-inner flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[368px] px-4 pt-4 pb-8 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-[68px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-neutral-600 text-sm font-['Inter'] leading-tight">
                    Tracking Page Views Vs Orders
                  </div>
                  <div className="self-stretch text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                    Understand user engagement patterns and optimize your
                    tracking page for enhanced customer experiences.
                  </div>
                </div>
                <div className="self-stretch h-[228px] flex-col justify-start items-start gap-5 flex">
                  <div className="self-stretch h-[104px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch h-[104px] flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch h-[104px] p-4 bg-orange-100 rounded-md flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch text-neutral-600 text-xs font-['Inter'] leading-none">
                          Orders
                        </div>
                       
                       <div className="self-stretch flex justify-between">
                          <div className=" text-neutral-600 text-4xl font-bold font-['Inter'] leading-[48px]">
                            80
                          </div>
                          <div>
                             <img src="/Order.png" className=" w-14 h-14 -mt-3" alt="" />
                          </div>
                       </div>
                      
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[104px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch h-[104px] p-4 bg-orange-300 rounded-md flex-col justify-start items-center gap-2 flex">
                      <div className="self-stretch text-neutral-600 text-xs font-['Inter'] leading-none">
                        Tracking Page Views{" "}
                      </div>
                      <div className="w-12 h-12 relative" />
                       
                      <div className="self-stretch flex justify-between">
                          <div className=" text-neutral-600 text-4xl font-bold font-['Inter'] leading-[48px]">
                            44
                          </div>
                          <div>
                             <img src="/View.png" className=" w-14 h-14 -mt-5 " alt="" />
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mx-[15%] mt-10 pb-20">
        <div className=" text-neutral-600 text-2xl font-bold font-['Inter'] leading-loose">
          Discover the Heart of Our Functionality
        </div>
        <div className=" flex gap-8  mt-5">
          <div className="  border-[1px] border-gray-300  rounded-xl w-[332px]  p-4 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-center items-center gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-neutral-600 text-sm font-['Inter'] leading-tight">
                    Elevate Your Brand Aesthetics with Custom Tracking Page
                    Styles
                  </div>
                  <div className="self-stretch text-neutral-600 text-[13px] font-['Inter'] leading-tight">
                    Immerse your customers in a branded experience by
                    personalizing the colors on your tracking page.{" "}
                  </div>
                </div>
              </div>
              <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-end gap-4 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch justify-start items-start gap-2 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-[13px] font-['Inter'] leading-tight">
                        Accent Color
                      </div>
                    </div>
                    <div className="self-stretch px-3 py-1.5 bg-white rounded-lg border border-zinc-500 justify-start items-center gap-1 inline-flex">
                      <div className="grow shrink basis-0 h-5 justify-start items-start flex">
                        <div className="text-zinc-800 text-[13px] font-['Inter'] leading-tight">
                          FF9898
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-16 h-8 bg-red-300 rounded-lg" />
                </div>
                <div className="self-stretch justify-start items-end gap-4 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch justify-start items-start gap-2 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-[13px] font-['Inter'] leading-tight">
                        Text Color
                      </div>
                    </div>
                    <div className="self-stretch px-3 py-1.5 bg-white rounded-lg border border-zinc-500 justify-start items-center gap-1 inline-flex">
                      <div className="grow shrink basis-0 h-5 justify-start items-start flex">
                        <div className="text-zinc-800 text-[13px] font-['Inter'] leading-tight">
                          571010
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-16 h-8 bg-rose-950 rounded-lg" />
                </div>
                <div className="self-stretch justify-start items-end gap-4 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch justify-start items-start gap-2 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-800 text-[13px] font-['Inter'] leading-tight">
                        Background Color
                      </div>
                    </div>
                    <div className="self-stretch px-3 py-1.5 bg-white rounded-lg border border-zinc-500 justify-start items-center gap-1 inline-flex">
                      <div className="grow shrink basis-0 h-5 justify-start items-start flex">
                        <div className="text-zinc-800 text-[13px] font-['Inter'] leading-tight">
                          FFEAEA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-16 h-8 bg-rose-100 rounded-lg" />
                </div>
              </div>
            </div>
            <div className=" flex gap-3 mt-7">
              <div className=" border-[1px] border-gray-300 w-[70px] h-7 px-3 py-1.5 bg-white rounded-lg shadow-inner justify-center items-center gap-0.5 inline-flex">
                <div className="text-zinc-800 font-bold text-xs font-['Inter'] leading-none">
                  Preview
                </div>
              </div>
              <div className=" w-[100px] h-7 bg-[#303030]  rounded-lg text-white px-3 text-[12px] flex items-center">
                Apply Colors
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
             <div className=" border-[1px] border-gray-300 w-[448px] rounded-lg">
                  <div className="p-5  flex flex-col gap-5">
                    <div className="w-[416px] text-neutral-600 text-sm font-['Inter'] font-bold leading-tight">Exclusive Onboarding Support for High-Volume Brands</div>
                    <div className="w-[416px] text-neutral-600 text-[13px] font-['Inter'] leading-tight">Unlock personalized guidance! Book a one-on-one <br/>
                      onboarding call to streamline your experience.</div>
                      <div className=" w-[117px] h-7 font-semibold text-xs bg-[#303030] text-white flex items-center rounded-lg px-2">
                    Schedule A Call 
                    </div>
                  </div>
                 
             </div>
             <div className=" border-[1px] border-gray-300 w-[448px] rounded-lg">
                <div className=" p-5 flex flex-col gap-2">
                   <div className="w-[416px] text-neutral-600 text-sm font-['Inter'] font-bold leading-tight">Explore Our Integrated Ecosystem</div>
                   <div className="w-[416px] text-neutral-600 text-[13px] font-['Inter'] leading-tight">Discover a variety of popular integrations tailored for your <br /> convenience. </div>
                   <div className=" flex gap-5 mt-4">
                      <img src="/image1.png" className="w-[34px] h-[34px]" alt="" />
                      <img src="/image2.png" className="w-[34px] h-[34px]" alt="" />
                      <img src="/image3.png" className="w-[34px] h-[34px]" alt="" />
                      <img src="/image4.png" className="w-[34px] h-[34px]" alt="" />
                      <img src="/image5.png" className="w-[34px] h-[34px]" alt="" />
                    </div>
                    <div className=" mt-7 w-[139px] rounded-lg text-white text-xs h-7 bg-[#303030] px-1 flex justify-center font-semibold items-center">
                    Explore Integrations 
                    </div>
                    
                </div>
                
              
                <div></div>
             </div>

          </div>
          <div className=" border-[1px] border-gray-300 w-[372px] rounded-lg p-5">
            <div className=" flex flex-col gap-5">
               <div className="w-[300px] font-bold  text-neutral-600 text-sm font-['Inter'] leading-tight">Seamlessly Integrate Custom HTML <br /> Elements</div>
               <div className="w-[300px] text-neutral-600 text-[14px] font-['Inter'] leading-tight">Unleash creativity with our Custom HTML <br />
                feature. Add links, custom messages, or any <br /> HTML content to elevate the tracking page <br />
                 experience for your customers.
               </div>
               <div>
                   <div className="w-[300px] text-zinc-800 text-[13px] font-['Inter'] leading-tight">HTML Link</div>
                   <textarea className=" mt-3 border-[1px] border-gray-300 rounded-lg w-[330px] h-24"></textarea>
                   
               </div>
               <div className=" ">
               <div className=" flex gap-2">
              <div className=" border-[1px] border-gray-300 w-[70px] h-7 px-3 py-1 bg-white rounded-lg shadow-inner justify-center items-center gap-0.5 inline-flex">
                <div className="text-zinc-800 text-xs font-bold font-['Inter'] leading-none">
                  Preview
                </div>
              </div>
              <div className=" w-[100px] h-7 bg-[#303030]  rounded-lg text-white px-3 text-[12px] flex items-center">
                Apply Colors
              </div>
            </div>
               </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default Home;
