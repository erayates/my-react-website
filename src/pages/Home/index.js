
import { Pagination,Autoplay} from "swiper";
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

function Index() {
  return (
    <Swiper direction={"vertical"} pagination={{clickable: true}} autoplay={{delay:3000,disableOnInteraction:true}} modules={[Pagination,Autoplay]} className=" mySwiper container mx-auto bg-white h-screen md:h-4/6 rounded-lg text-slate-700 mb-5 w-96 sm:w-3/4 md:mt-0">
        <div className='flex flex-row absolute top-0 left-0 w-full bg-slate-700/50 rounded-lg h-5 pt-0.5'>
          <div className='w-4 h-4 rounded-full bg-red-800/75 relative left-5'></div>
          <div className='w-4 h-4 rounded-full bg-yellow-200/75 relative left-5 ml-2'></div>
          <div className='w-4 h-4 rounded-full bg-white/50 relative left-5 ml-2'></div>              
        </div> 
        <SwiperSlide className="flex justify-center items-center ">
          <div className="h-full w-8/12 flex flex-col justify-center items-center">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold">What is the HTML?</h3>
            <p className="text-s lg:text-xl font-light my-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mauris ut lorem dignissim rutrum ac non nulla. Donec vestibulum elit sapien, vitae ullamcorper nisl molestie sit amet. Vestibulum sit amet imperdiet magna. In gravida metus mi, eget tristique augue malesuada sed. Fusce sit amet leo eget felis dapibus molestie non sed neque. 
            </p>
            <button type="button" className="text-xs md:text-md bg-slate-700 text-white font-bold py-2 px-4 rounded-full self-end mt-2">Read More</button>
            <div className="w-full bg-slate-700/25 rounded h-px my-3"></div>
            <div className="flex flex-col md:justify-evenly w-screen mb-5">
              <div className="flex justify-center">
                <div className="h-10 w-10 flex items-center mt-2">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="" className="object-cover rounded-full w-10 h-10"/>
                </div>
                <div className="flex flex-col ml-2">
                    <h5 className="text-lg font-bold">Eray Ates</h5>
                    <p className="text-sm font-light">Web Developer</p>
                  </div>
              </div>
              <div className="text-center mt-5 italic font-light text-xs">
                <p>Created date: 28.10.2022</p>
                <p>Created by Author</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center tags mb-12 md:mb-0">
              <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#HTML</span>
              <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#Software</span>
              <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#Web Development</span>
              <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2 mb">#Frontend</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center ">
          <div className="h-full w-8/12 flex flex-col justify-center items-center relative">  
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold">What is the HTML?</h3>
              <p className="text-s lg:text-xl font-light my-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mauris ut lorem dignissim rutrum ac non nulla. Donec vestibulum elit sapien, vitae ullamcorper nisl molestie sit amet. Vestibulum sit amet imperdiet magna. In gravida metus mi, eget tristique augue malesuada sed. Fusce sit amet leo eget felis dapibus molestie non sed neque. 
              </p>
              <button type="button" className="text-xs md:text-md bg-slate-700 text-white font-bold py-2 px-4 rounded-full self-end mt-2">Read More</button>
              <div className="w-full bg-slate-700/25 rounded h-px my-3"></div>
              <div className="flex flex-col md:justify-evenly w-screen mb-5">
                <div className="flex justify-center">
                  <div className="h-10 w-10 flex items-center mt-2">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="" className="object-cover rounded-full w-10 h-10"/>
                  </div>
                  <div className="flex flex-col ml-2">
                      <h5 className="text-lg font-bold">Eray Ates</h5>
                      <p className="text-sm font-light">Web Developer</p>
                    </div>
                </div>
                <div className="text-center mt-5 italic font-light text-xs">
                  <p>Created date: 28.10.2022</p>
                  <p>Created by Author</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center tags mb-12 md:mb-0">
                <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#HTML</span>
                <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#Software</span>
                <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#Web Development</span>
                <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2 mb">#Frontend</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center ">
          <div className="h-full w-8/12 flex flex-col justify-center items-center">
           
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold">What is the HTML?</h3>
            <p className="text-s lg:text-xl font-light my-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mauris ut lorem dignissim rutrum ac non nulla. Donec vestibulum elit sapien, vitae ullamcorper nisl molestie sit amet. Vestibulum sit amet imperdiet magna. In gravida metus mi, eget tristique augue malesuada sed. Fusce sit amet leo eget felis dapibus molestie non sed neque. 
            </p>
            <button type="button" className="text-xs md:text-md bg-slate-700 text-white font-bold py-2 px-4 rounded-full self-end mt-2">Read More</button>
            <div className="w-full bg-slate-700/25 rounded h-px my-3"></div>
            <div className="flex flex-col md:justify-evenly w-screen mb-5">
              <div className="flex justify-center">
                <div className="h-10 w-10 flex items-center mt-2">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="" className="object-cover rounded-full w-10 h-10"/>
                </div>
                <div className="flex flex-col ml-2">
                    <h5 className="text-lg font-bold">Eray Ates</h5>
                    <p className="text-sm font-light">Web Developer</p>
                  </div>
              </div>
              <div className="text-center mt-5 italic font-light text-xs">
                <p>Created date: 28.10.2022</p>
                <p>Created by Author</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center tags mb-12 md:mb-0">
              <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#HTML</span>
              <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#Software</span>
              <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2">#Web Development</span>
              <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2 mb">#Frontend</span>
            </div>
          </div>
        </SwiperSlide>
      
        
  
    </Swiper>
  )
}

export default Index