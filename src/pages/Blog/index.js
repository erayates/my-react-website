import React from 'react'

function Index() {
  return (
    <div className='w-3/4 mx-auto mt-5 bg-white rounded-lg' >
        <div className='w-3/4 mx-auto mb-6 pt-8'>
           <input type="search" className='w-full outline-none p-3 bg-transparent border mt-5 text-white shadow-md shadow-black/5 rounded-lg placeholder:text-slate-400/50 text-slate-700/50 text-sm' placeholder='Search a blog...'></input>
        </div> 
        <div className='flex flex-col absolute right-[100px] items-center w-1/3'>
            <h3 className='text-slate-700 text-2xl mt-14 font-semibold'>Categories</h3>
            <ul className='flex flex-col items-center w-[250px] mt-4'>
                <li className='text-lg font-bold px-2 py-1 mb-3 w-full rounded bg-green-200 text-green-800 cursor-pointer hover:scale-105 border'>HTML5</li>
                <li className='text-lg font-bold px-2 py-1 mb-3 w-full rounded bg-green-200 text-green-800 cursor-pointer hover:scale-105 border'>CSS3</li>
                <li className='text-lg font-bold px-2 py-1 mb-3 w-full rounded bg-green-200 text-green-800 cursor-pointer hover:scale-105 border'>Javascript</li>
                <li className='text-lg font-bold px-2 py-1 mb-3 w-full rounded bg-green-200 text-green-800 cursor-pointer hover:scale-105 border'>React</li>
            </ul>
            <h3 className='text-slate-700 text-2xl mt-14 font-semibold'>Recently Added Posts</h3>
            <ul className='flex flex-col items-center w-[250px] mt-4'>
                <li className='text-md font-bold px-2 py-1 mb-3 w-full rounded bg-yellow-200 text-yellow-800 cursor-pointer hover:scale-105 border'>What is the HTML5?</li>
                <li className='text-md font-bold px-2 py-1 mb-3 w-full rounded bg-yellow-200 text-yellow-800 cursor-pointer hover:scale-105 border'>When you need to use CSS3?</li>
                <li className='text-md font-bold px-2 py-1 mb-3 w-full rounded bg-yellow-200 text-yellow-800 cursor-pointer hover:scale-105 border'>Javascript</li>
                <li className='text-md font-bold px-2 py-1 mb-3 w-full rounded bg-yellow-200 text-yellow-800 cursor-pointer hover:scale-105 border'>React</li>
            </ul>

        </div>
        <div className="flex justify-start items-center mb-20 p-10">
          <div className="h-full w-8/12 flex flex-col justify-center items-center rounded-lg p-5">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-700">What is the HTML?</h3>
            <p className="text-s lg:text-md font-md my-3 text-center text-slate-400/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mauris ut lorem dignissim rutrum ac non nulla. Donec vestibulum elit sapien, vitae ullamcorper nisl molestie sit amet. Vestibulum sit amet imperdiet magna. In gravida metus mi, eget tristique augue malesuada sed. Fusce sit amet leo eget felis dapibus molestie non sed neque. 
            </p>
            <button type="button" className="text-xs md:text-md bg-slate-700 text-white font-bold py-2 px-4 rounded-full self-end mt-2">Read More</button>
            <div className="w-full bg-black/25 rounded h-px my-3"></div>
            <div className="flex md:justify-evenly w-screen mb-5">
              <div className="flex justify-center">
                <div className="h-10 w-10 flex items-center mt-2">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="" className="object-cover rounded-full w-10 h-10"/>
                </div>
                <div className="flex flex-col text-slate-500 ml-2">
                    <h5 className="text-lg font-bold">Eray Ates</h5>
                    <p className="text-sm font-light">Web Developer</p>
                  </div>
              </div>
              <div className="text-center mt-2 italic font-light text-xs text-slate-400">
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
        </div>
        <div className="flex justify-start items-center mb-20 p-10">
          <div className="h-full w-8/12 flex flex-col justify-center items-center rounded-lg p-5">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-700">What is the HTML?</h3>
            <p className="text-s lg:text-md font-md my-3 text-center text-slate-400/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mauris ut lorem dignissim rutrum ac non nulla. Donec vestibulum elit sapien, vitae ullamcorper nisl molestie sit amet. Vestibulum sit amet imperdiet magna. In gravida metus mi, eget tristique augue malesuada sed. Fusce sit amet leo eget felis dapibus molestie non sed neque. 
            </p>
            <button type="button" className="text-xs md:text-md bg-slate-700 text-white font-bold py-2 px-4 rounded-full self-end mt-2">Read More</button>
            <div className="w-full bg-black/25 rounded h-px my-3"></div>
            <div className="flex md:justify-evenly w-screen mb-5">
              <div className="flex justify-center">
                <div className="h-10 w-10 flex items-center mt-2">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="" className="object-cover rounded-full w-10 h-10"/>
                </div>
                <div className="flex flex-col text-slate-500 ml-2">
                    <h5 className="text-lg font-bold">Eray Ates</h5>
                    <p className="text-sm font-light">Web Developer</p>
                  </div>
              </div>
              <div className="text-center mt-2 italic font-light text-xs text-slate-400">
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
        </div>
        <div className="flex justify-start items-center mb-20 p-10">
          <div className="h-full w-8/12 flex flex-col justify-center items-center rounded-lg p-5">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-700">What is the HTML?</h3>
            <p className="text-s lg:text-md font-md my-3 text-center text-slate-400/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mauris ut lorem dignissim rutrum ac non nulla. Donec vestibulum elit sapien, vitae ullamcorper nisl molestie sit amet. Vestibulum sit amet imperdiet magna. In gravida metus mi, eget tristique augue malesuada sed. Fusce sit amet leo eget felis dapibus molestie non sed neque. 
            </p>
            <button type="button" className="text-xs md:text-md bg-slate-700 text-white font-bold py-2 px-4 rounded-full self-end mt-2">Read More</button>
            <div className="w-full bg-black/25 rounded h-px my-3"></div>
            <div className="flex md:justify-evenly w-screen mb-5">
              <div className="flex justify-center">
                <div className="h-10 w-10 flex items-center mt-2">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="" className="object-cover rounded-full w-10 h-10"/>
                </div>
                <div className="flex flex-col text-slate-500 ml-2">
                    <h5 className="text-lg font-bold">Eray Ates</h5>
                    <p className="text-sm font-light">Web Developer</p>
                  </div>
              </div>
              <div className="text-center mt-2 italic font-light text-xs text-slate-400">
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
        </div>
        <div className="flex justify-start items-center mb-20 p-10">
          <div className="h-full w-8/12 flex flex-col justify-center items-center rounded-lg p-5">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-700">What is the HTML?</h3>
            <p className="text-s lg:text-md font-md my-3 text-center text-slate-400/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mauris ut lorem dignissim rutrum ac non nulla. Donec vestibulum elit sapien, vitae ullamcorper nisl molestie sit amet. Vestibulum sit amet imperdiet magna. In gravida metus mi, eget tristique augue malesuada sed. Fusce sit amet leo eget felis dapibus molestie non sed neque. 
            </p>
            <button type="button" className="text-xs md:text-md bg-slate-700 text-white font-bold py-2 px-4 rounded-full self-end mt-2">Read More</button>
            <div className="w-full bg-black/25 rounded h-px my-3"></div>
            <div className="flex md:justify-evenly w-screen mb-5">
              <div className="flex justify-center">
                <div className="h-10 w-10 flex items-center mt-2">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="" className="object-cover rounded-full w-10 h-10"/>
                </div>
                <div className="flex flex-col text-slate-500 ml-2">
                    <h5 className="text-lg font-bold">Eray Ates</h5>
                    <p className="text-sm font-light">Web Developer</p>
                  </div>
              </div>
              <div className="text-center mt-2 italic font-light text-xs text-slate-400">
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
        </div>

     
    </div>
  )
}

export default Index