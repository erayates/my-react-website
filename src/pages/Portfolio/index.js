import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {fetchGit,getData,fetchRepos,showStatus} from '../../store/gitSlice' 

import {RiChatFollowUpFill,RiUserFollowFill} from 'react-icons/ri'

function Index() {
 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGit())
    dispatch(fetchRepos())
  },[])
  const status = useSelector(showStatus)
  const info = useSelector(getData)
  const repos = useSelector(state => state.git.repos)
  console.log(info)
  console.log(repos)
  return (
    <div className='container mx-auto'>
      {status === 'loading' && <div className='text-center text-4xl mt-5 font-bold tracking-widest'>LOADING</div>}
      {status === 'failed' && <div className='text-center text-4xl mt-5 font-bold tracking-widest'>An error happened.</div>}
      {status === 'succeeded' &&
      
        <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start bg-white p-10 rounded-lg relative'> 
           <div className='flex flex-row absolute top-0 left-0 w-full bg-slate-700/50 rounded-lg h-5 pt-0.5'>
              <div className='w-4 h-4 rounded-full bg-red-800/75 relative left-5'></div>
              <div className='w-4 h-4 rounded-full bg-yellow-200/75 relative left-5 ml-2'></div>
              <div className='w-4 h-4 rounded-full bg-white/50 relative left-5 ml-2'></div>              
            </div>   
          <div className='left__profile w-full lg:w-1/3  flex flex-col items-center'>
            <h2 className='text-4xl font-bold mb-5 text-slate-700 mt-2'>Github Profile</h2>
              <img src={info.avatar_url} alt='avatar' className='rounded-full w-64 h-64 mb-5'/>
              <p className='text-2xl font-semibold text-slate-700'>{info.bio}</p>
              <p className='flex justify-center items-center text-slate-700 rounded bg-green-200 text-green-800 hover:scale-105 border w-3/4 p-2 text-2xl mt-5'><RiChatFollowUpFill className='mr-5'/> {info.followers} followers</p>
              <p className='flex justify-center items-center text-slate-700 rounded bg-blue-200 text-blue-800 hover:scale-105 border w-3/4 p-2 text-2xl mt-5'><RiUserFollowFill className='mr-5'/> {info.following} following</p>
          </div>
          <div className='w-3/4'>
            <h2 className='text-4xl font-bold mb-5 text-slate-700 text-center mt-20 lg:mt-0'>Github Repositories</h2>
            <div className='flex flex-wrap justify-center'>
              {repos.map((repo,idx) => {
                return (
                    <div className='w-full lg:w-[300px] p-2' key={idx}>
                       <a href={repo.html_url} target="_blank">
                        <div className='bg-white rounded-lg p-5 bg-yellow-200 text-yellow-800 h-full'>
                          <h2 className='text-2xl font-bold text-slate-700'>{repo.name}</h2>
                          <p className='text-slate-700'>{repo.description}</p>
                          <p className='text-slate-700'><strong>Language:</strong> {repo.language}</p>
                        </div>
                       </a>
                    </div>
                )
              })}
            </div>
          </div>
        </div>
      }
    </div>
    
  )
}

export default Index