import React from 'react'
import {ImGithub, ImInstagram, ImLinkedin, ImMail, ImStackoverflow, ImTwitter} from 'react-icons/im'
import {GrSend} from 'react-icons/gr'

function Index() {
  return (
    <div className='container mx-auto mt-10 w-full md:mt-0 xl:w-3/4 xl:w-1/2'>
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start bg-white p-10 rounded-lg relative'> 
           <div className='flex flex-row absolute top-0 left-0 w-full bg-slate-700/50 rounded-lg h-5 pt-0.5'>
              <div className='w-4 h-4 rounded-full bg-red-800/75 relative left-5'></div>
              <div className='w-4 h-4 rounded-full bg-yellow-200/75 relative left-5 ml-2'></div>
              <div className='w-4 h-4 rounded-full bg-white/50 relative left-5 ml-2'></div>              
            </div> 
          
            <div className='contact__info w-full'>
            <h1 className='text-center text-slate-700 text-4xl mt-3 font-semibold'>Accounts</h1>
                <div className='flex justify-center items-center flex-wrap sm:justify-center md:justify-between mt-10 mb-20 mx-20 text-slate-700'>
                  <a href='https://www.linkedin.com/in/eraayatees/' target="blank"><ImLinkedin className='text-[6rem] m-2 sm:text-[4rem]'/></a>
                  <a href='https://github.com/erayates' target="blank"><ImGithub className='text-[6rem]  m-2 sm:text-[4rem]'/></a>
                  <a href='https://twitter.com/eraayatees' target="blank"><ImTwitter className='text-[6rem] m-2 sm:text-[4rem]'/></a>
                  <a href='https://stackoverflow.com/users/14838073/erayates' target="blank"><ImStackoverflow className='text-[6rem] m-2 sm:text-[4rem]'/></a>
                  <a href='https://instagram.com/eraayatees' target="blank"><ImInstagram className='text-[6rem] m-2 sm:text-[4rem]'/></a>
                  <a href='mailto:eray.ates@outlook.com' target="blank"><ImMail className='text-[6rem] m-2 sm:text-[4rem]'/></a>
                </div>
            </div>
            <div className='contact__form w-full'>
                <form className='flex flex-col'>
                    <label className='text-2xl font-md text-slate-700 text-center mb-5'>You can leave me a quick message by filling out the form below.</label>
                    <input type="text" placeholder='Name' className='py-2 px-4 text-slate-700 drop-shadow-lg rounded-lg outline-none mb-6'/>
                    <input type="text" placeholder="Email" className='py-2 px-4 text-slate-700 drop-shadow-lg rounded-lg outline-none mb-6'/>
                    <textarea placeholder="Message" className='py-2 px-4 text-slate-700 drop-shadow-lg rounded-lg outline-none mb-5 h-[250px]'></textarea>
                    <button type='submit' className='flex justify-center items-center text-right bg-green-200 text-green-800 py-2 px-4 text-xl rounded-lg cursor-pointer font-semibold w-full sm:w-1/4 self-end'><GrSend className='text-xl mr-2'/> Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Index