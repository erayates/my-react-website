import React from 'react'
import { Link } from 'react-router-dom'
import {FaLocationArrow} from 'react-icons/fa'
import {SiMysql,SiFirebase,SiNodedotjs,SiPhp,SiHtml5,SiCss3,SiJavascript,SiReact,SiTailwindcss,SiBootstrap,SiC,SiCplusplus,SiCsharp,SiPython,SiMicrosoftsqlserver} from 'react-icons/si'

function Index() {
  return (
    <div className='flex flex-col justify-center items-center font-sans'>
        <div className='w-64 h-64 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-full'>
            <img src='https://pps.whatsapp.net/v/t61.24694-24/306423585_658121829256307_1429224317524881955_n.jpg?ccb=11-4&oh=01_AdRZUinoXVu5b3uD_ho-PcTqndFVOGwThSE1xBQO7AEb4w&oe=63699B23' className='rounded-full object-cover w-64 h-64' alt="me" />
        </div>
        <div className="flex flex-col mt-5 text-center">
            <h2 className="text-white text-3xl font-semibold">Eray Ates</h2>
            <span className='text-slate-500'>Web Developer</span>
            <button className="bg-green-200/30 mt-5 p-3 rounded-lg hover:bg-green-300/50" type='button'><Link to="/contact" className='flex justify-center items-center'>Contact Now!<FaLocationArrow className='ml-3'/></Link></button>
        </div>
        <div className='mt-5 text-center text-slate-400 w-3/4'>
            <h3 className='text-slate-200 text-2xl font-semibold mb-3 mt-5'>Brief</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet orci a risus scelerisque congue. Mauris malesuada nibh et turpis finibus, eu rutrum tortor placerat. Maecenas arcu diam, malesuada et tempor nec, maximus laoreet ipsum. In tincidunt neque et dolor molestie, vel porta ante iaculis. Integer quis justo nec orci consectetur tempor. Donec bibendum metus a mauris convallis blandit. Etiam in odio id erat tincidunt eleifend. Vivamus in augue lacus. Curabitur efficitur vestibulum elementum. Aliquam gravida eros at elit faucibus, quis efficitur ligula dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eget venenatis augue. Proin in lacus enim. Sed mauris massa, convallis nec orci eget, scelerisque bibendum quam.</p>
        </div>
        <div className='mt-10 text-center flex flex-col w-3/4 mb-10'>
            <h3 className='text-slate-200 text-2xl font-semibold mb-3'>Skills</h3>
            <h4 className='text-xl text-slate-400 font-medium text-left sm:text-center'>Frontend</h4>
            <div className='flex flex-wrap justify-center'>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiHtml5 className='w-9 h-9'/>
                </div>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                  <SiCss3 className='w-9 h-9'/>
                </div>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiJavascript className='w-9 h-9'/>
                </div>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiReact className='w-9 h-9' />
                </div>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiTailwindcss className='w-9 h-9'/>
                </div>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiBootstrap className='w-9 h-9'/>
                </div>
            </div>
            <h4 className='text-xl text-slate-400 font-medium text-left mt-10 sm:text-center'>Backend</h4>
            <div className='flex flex-wrap justify-center'>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiFirebase className='w-9 h-9'/>
                </div>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiNodedotjs className='w-9 h-9'/>
                </div>  
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiPhp className='w-9 h-9'/>
                </div>  
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiMysql className='w-10 h-10'/>
                </div>  
             
            </div>

            <h4 className='text-xl text-slate-400 font-medium text-left mt-10 sm:text-center'>Other Languages</h4>
            <div className='flex flex-wrap justify-center'>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiCsharp className='w-9 h-9'/>
                </div>
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                     <SiC className='w-9 h-9'/>
                </div>  
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiCplusplus className='w-9 h-9'/>
                </div>  
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                    <SiPython className='w-9 h-9'/>
                </div>  
                <div className='flex justify-center items-center w-16 h-16 bg-transparent mt-5 text-white shadow-lg shadow-white/20 rounded-lg m-2'>
                   <SiMicrosoftsqlserver className='w-9 h-9'/>
                </div>  
              
            </div>

        </div>

 
    </div>
  )
}

export default Index